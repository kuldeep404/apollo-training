import { config } from 'dotenv';

config();
// eslint-disable-next-line no-undef
const envVars = process.env;
// console.log("env vars", process.env, process.env)
const configuration = Object.freeze({
  SERVICE_URL: envVars.SERVICE_URL,
  port: envVars.PORT,
});
// eslint-disable-next-line no-console
console.log('config is::::', configuration);
export default configuration;
