import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Proxy everything else to Vite
app.use('/', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
  ws: true
}));

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on port ${PORT}, forwarding to Vite on 8080`);
});