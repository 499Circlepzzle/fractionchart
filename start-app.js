import { spawn } from 'child_process';

console.log('🚀 Starting development servers...');

// Start Vite first
const vite = spawn('npm', ['run', 'dev'], { 
  stdio: 'pipe',
  detached: false 
});

// Start proxy server
const proxy = spawn('node', ['server.js'], { 
  stdio: 'inherit',
  detached: false 
});

// Handle cleanup
const cleanup = () => {
  console.log('Shutting down...');
  vite.kill();
  proxy.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Forward Vite output
vite.stdout.on('data', (data) => {
  if (data.toString().includes('ready in')) {
    console.log('✅ Vite ready');
  }
});

vite.on('exit', cleanup);
proxy.on('exit', cleanup);