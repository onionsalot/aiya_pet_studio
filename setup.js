const { spawn } = require('child_process')

const backendInstall = spawn('bundle', ['install'], { cwd: 'backend', stdio: 'inherit' })
backendInstall.on('exit', (code) => {
  if (code === 0) {
    const dbMigrate = spawn('bin/rails', ['db:migrate'], { cwd: 'backend', stdio: 'inherit' })
    dbMigrate.on('exit', (code) => {
      if (code === 0) {
        const frontendInstall = spawn('yarn', ['install'], { cwd: 'frontend', stdio: 'inherit' })
        frontendInstall.on('exit', (code) => {
          if (code === 0) {
            console.log('Setup completed successfully!')
          } else {
            console.error('Failed to run "yarn install"')
          }
        })
      } else {
        console.error('Failed to run "bin/rails db:migrate"')
      }
    })
  } else {
    console.error('Failed to run "bundle install"')
  }
})