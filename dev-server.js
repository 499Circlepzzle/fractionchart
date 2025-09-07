import { createServer } from 'vite';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const app = express();
  
  // Create Vite server in middleware mode
  const vite = await createServer({
    server: { 
      middlewareMode: true,
      host: '0.0.0.0',
      port: 5000
    },
    appType: 'spa',
    root: resolve(__dirname),
  });

  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);

  const port = 5000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer().catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
});