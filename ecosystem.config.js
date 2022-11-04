module.exports = {
    apps: [
      {
        name: 'dashboard',
        script: 'npm start',
        time: true,
        instances: 1,
        autorestart: true,
        max_restarts: 30,
        watch: false,
        max_memory_restart: '2G',
      },
    ],
    deploy: {
      prelive: {
        'post-deploy':  './scripts/post-deploy.sh',
        user: process.env.DEPLOY_PRELIVE_USER,
        host: [
          {
            host: process.env.DEPLOY_PRELIVE_HOST,
          },
        ],
        key: 'deploy.prelive.key',
        ref: 'origin/main',
        repo: 'git@github.com:hackjunction-haku-2022/ecometrika-dashboard.git',
        path: '/opt/dashboard',
        env: {
            DB_URL: process.env.DB_PRELIVE_URL
        }
      },
    },
  };