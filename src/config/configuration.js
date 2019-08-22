import { config } from 'dotenv';
config();
// eslint-disable-next-line no-undef
const envVars = process.env;
// console.log("env vars", process.env, process.env)
const configuration = Object.freeze( {
    URL: envVars.SERVICE_URL,
    port: envVars.PORT,
});
console.log('config is::::', configuration);
export default configuration;
