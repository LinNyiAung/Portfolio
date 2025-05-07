// start.js
const { spawn } = require('child_process');
const path = require('path');

// React scripts binary path
const reactScriptsPath = path.join(__dirname, 'node_modules', '.bin', 'react-scripts');

// Run with explicitly set host and port
const process = spawn(reactScriptsPath, ['start'], {
  env: {
    ...process.env,
    PORT: 10000,  // Render expects this port
    HOST: '0.0.0.0', // Bind to all interfaces
    DANGEROUSLY_DISABLE_HOST_CHECK: 'true' // Allows external connections
  }
});

process.stdout.on('data', (data) => {
  console.log(data.toString());
});

process.stderr.on('data', (data) => {
  console.error(data.toString());
});

process.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});