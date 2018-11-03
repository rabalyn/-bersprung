module.exports = {
    apps : [{
      name: 'uebersprung',
      script: './app.js',
      watch: ['lib', 'app.js', 'src/locales', 'ecosystem.config.js'],
      interpreter: 'babel-node',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }]
  }
