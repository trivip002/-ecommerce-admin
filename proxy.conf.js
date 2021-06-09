const PROXY_CONFIG = [
  {
    context: [
      "/roles"
    ],
    target: "https://app-deploy-service.herokuapp.com",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    ws: true,
    headers: {host: 'app-deploy-service.herokuapp.com'},
  }
]

module.exports = PROXY_CONFIG
