module.exports = {
  apps: [
    {
      name: 'elemental-healing',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      // Auto-restart configuration
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      max_memory_restart: '500M',
      // Restart on error
      restart_delay: 4000,
      // Kill timeout
      kill_timeout: 5000,
      // Listen timeout
      listen_timeout: 30000,
      // Error handling
      error_file: '/home/user/.pm2/logs/elemental-healing-error.log',
      out_file: '/home/user/.pm2/logs/elemental-healing-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
}
