import { createLogger, format, transports } from 'winston';

export default createLogger({
  level: process.env.LOG_LEVEL ?? 'info',
  format: format.combine(format.timestamp(), format.errors({ stack: true }), format.json()),
  transports: [new transports.Console({ silent: process.env.NODE_ENV === 'test' })],
});
