// Vercel serverless entrypoint for all /api/* Express routes.
// Secrets and database credentials are read only from Vercel environment variables.
const app = require('../server/index');
module.exports = app;
