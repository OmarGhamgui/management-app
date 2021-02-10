const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/user", , "/client", , "/branch"], { target: "http://localhost:5000" })
  );
};