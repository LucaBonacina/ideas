---
tipo: progetto
tags: [progetto, nidi, piattaforma, deploy]
---
# Deploy su Google Cloud

Decisione dell'utente (25/11/2026): ospitare la piattaforma su Google Cloud Platform. Database su MongoDB Atlas M0 (gratuito) ospitato su GCP.

## Architettura

| Pezzo | Servizio | Note |
|---|---|---|
| API (NestJS) | Cloud Run, servizio `nidi-api` | immagine `backend/Dockerfile`, comando `node dist/main.js` |
| Sito (Next.js) | Cloud Run, servizio `nidi-web` | immagine `web/Dockerfile` (standalone); `API_URL` fissato in build |
| Database | MongoDB Atlas M0 su GCP | regione europea disponibile per M0 più vicina a Milano |
| File grezzi | Cloud Storage, bucket `<progetto>-nidi-raw` | montato nei job come cartella (`DATA_DIR=/data`) |
| Aggiornamento dati | Cloud Run Job `nidi-import` | stessa immagine dell'API, comando `node dist/cli.js tutto` |
| Pianificazione | Cloud Scheduler | una volta a settimana |
| Segreti | Secret Manager | `mongo-uri` |

Costo previsto con traffico iniziale: 0-5 euro al mese (Cloud Run gratuito entro la quota mensile, bucket di circa 1,3 GB, Atlas M0 gratuito).

Compromesso su Atlas: Cloud Run esce da IP variabili, quindi l'accesso di rete ad Atlas va aperto (0.0.0.0/0) e protetto da utente e password robusti. Un IP fisso richiede connettore VPC e Cloud NAT (circa 30-40 euro al mese): da valutare solo più avanti.

## Passi

Variabili usate sotto (da adattare):

```bash
PROGETTO=<id del progetto GCP>
REGIONE=europe-west8
BUCKET=$PROGETTO-nidi-raw
gcloud config set project $PROGETTO
```

1. **Servizi**
   ```bash
   gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com secretmanager.googleapis.com cloudscheduler.googleapis.com storage.googleapis.com
   ```
2. **Registro delle immagini**
   ```bash
   gcloud artifacts repositories create nidi --repository-format=docker --location=$REGIONE
   ```
3. **Bucket dei file grezzi** e caricamento di quelli esistenti (`backend/data/raw`, più `dati-conservati/comuni` e i file manuali elencati in `piattaforma/dati-conservati/README.md`):
   ```bash
   gcloud storage buckets create gs://$BUCKET --location=$REGIONE --uniform-bucket-level-access
   gcloud storage rsync -r backend/data/raw gs://$BUCKET/raw
   ```
4. **Atlas**: creare il cluster M0 su GCP, un utente del database con password robusta, accesso di rete `0.0.0.0/0`. Salvare la stringa di connessione in Secret Manager (mai in chat né nel repository):
   ```bash
   printf '%s' 'mongodb+srv://<utente>:<password>@<cluster>/nidi?retryWrites=true&w=majority' | gcloud secrets create mongo-uri --data-file=-
   ```
5. **Account di servizio** per API e job, con accesso al segreto e al bucket:
   ```bash
   gcloud iam service-accounts create nidi-run
   SA=nidi-run@$PROGETTO.iam.gserviceaccount.com
   gcloud secrets add-iam-policy-binding mongo-uri --member=serviceAccount:$SA --role=roles/secretmanager.secretAccessor
   gcloud storage buckets add-iam-policy-binding gs://$BUCKET --member=serviceAccount:$SA --role=roles/storage.objectAdmin
   ```
6. **Immagini** (dalla cartella `piattaforma/`): primo giro per l'API.
   ```bash
   gcloud builds submit --config cloudbuild.yaml --substitutions=_REGIONE=$REGIONE
   ```
7. **API**
   ```bash
   gcloud run deploy nidi-api --image=$REGIONE-docker.pkg.dev/$PROGETTO/nidi/api:latest --region=$REGIONE \
     --service-account=$SA --set-secrets=MONGO_URI=mongo-uri:latest --allow-unauthenticated --memory=1Gi
   API_URL=$(gcloud run services describe nidi-api --region=$REGIONE --format='value(status.url)')
   ```
8. **Sito**: secondo giro di build con l'indirizzo dell'API, poi deploy.
   ```bash
   gcloud builds submit --config cloudbuild.yaml --substitutions=_REGIONE=$REGIONE,_API_URL=$API_URL,_NOME_SITO="Nido Vicino"
   gcloud run deploy nidi-web --image=$REGIONE-docker.pkg.dev/$PROGETTO/nidi/web:latest --region=$REGIONE \
     --set-env-vars=API_URL=$API_URL --allow-unauthenticated --memory=1Gi
   ```
9. **Job di import** con il bucket montato:
   ```bash
   gcloud run jobs create nidi-import --image=$REGIONE-docker.pkg.dev/$PROGETTO/nidi/api:latest --region=$REGIONE \
     --service-account=$SA --set-secrets=MONGO_URI=mongo-uri:latest --set-env-vars=DATA_DIR=/data \
     --add-volume=name=raw,type=cloud-storage,bucket=$BUCKET --add-volume-mount=volume=raw,mount-path=/data \
     --command=node --args=dist/cli.js,tutto --memory=4Gi --cpu=2 --task-timeout=3h --max-retries=0
   ```
   Primo caricamento del database dai file già nel bucket, senza riscaricare: eseguire una volta con `--offline`.
   ```bash
   gcloud run jobs execute nidi-import --region=$REGIONE --args=dist/cli.js,tutto,--offline --wait
   ```
   Nota: con il bucket montato in `/data`, i file grezzi stanno in `/data/raw/...`: corrisponde al percorso `raw/` usato nel passo 3.
10. **Aggiornamento settimanale** (lunedì alle 3:10):
    ```bash
    gcloud scheduler jobs create http nidi-import-settimanale --location=$REGIONE --schedule="10 3 * * 1" --time-zone=Europe/Rome \
      --uri="https://run.googleapis.com/v2/projects/$PROGETTO/locations/$REGIONE/jobs/nidi-import:run" --http-method=POST \
      --oauth-service-account-email=$SA
    gcloud projects add-iam-policy-binding $PROGETTO --member=serviceAccount:$SA --role=roles/run.invoker
    ```
11. **Dominio** (quando ci sarà il nome): mappatura del dominio su `nidi-web` da Cloud Run, oppure un load balancer.

## Cosa resta fuori dal job automatico

- Fonti scaricate a mano (Veneto, Alto Adige): si aggiornano caricando il nuovo file nel bucket, nella cartella della fonte con la data del giorno.
- Raccolta e lettura delle pagine comunali (`raccolta-comuni`, `testi-comuni`, estrazione): lavoro una tantum, non settimanale.
- Stradario dei civici: va aggiornato a mano nel bucket quando serve.

## Prima di pubblicare

- Completare le bozze di [[Piattaforma - stato|informativa privacy e note legali]] (titolare, contatti): pagine `/privacy` e `/note-legali` del sito.
- Licenze degli stradari regionali e comunali dei civici da indicare nella pagina fonti.
- Uso delle tile di OpenStreetMap: per traffico reale serve un fornitore di mappe (la policy delle tile OSM non consente uso intenso da parte di siti terzi).
