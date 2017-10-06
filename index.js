const Koa = require('koa'),
      app = new Koa(),
      Router = require('koa-router'),
      userRoute = require('./route/user'),
      PORT = process.env.PORT || 3000;

var api = new Router({
    prefix: '/api'
});
api.use('/users', userRoute.routes());
app.use(api.routes());

var server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;