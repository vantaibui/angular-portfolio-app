const PROXY_CONFIG = [
  {
    context: "/openweathermap/",
    target: "https://openweathermap.org/",
    secure: true,
    changeOrigin: true, // The backend is not on localhost
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  },
  {
    context: "/unsplash/",
    target: "https://images.unsplash.com/",
    secure: true,
    changeOrigin: true,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
  },
];
module.exports = PROXY_CONFIG;
