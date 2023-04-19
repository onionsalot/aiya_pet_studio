const { spawn } = require('child_process')

const railsServer = spawn('bundle', ['exec', 'rails', 's'], { cwd: 'backend', stdio: 'inherit' })

const reactServer = spawn('npm', ['start'], { cwd: 'frontend', stdio: 'inherit' })

process.on('SIGINT', () => {
  railsServer.kill('SIGINT');
  reactServer.kill('SIGINT');
  process.exit();
})