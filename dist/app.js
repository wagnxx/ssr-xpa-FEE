const Koa = require('koa');

const render = require('koa-swig');

const serve = require('koa-static');

const co = require('co');

const {
  join
} = require('path');

const {
  createContainer,
  Lifetime
} = require('awilix');

const {
  loadControllers,
  scopePerRequest
} = require('awilix-koa');

const app = new Koa();
app.use(serve(join(__dirname, './dest/assets')));
app.context.render = co.wrap(render({
  root: join(__dirname, './views'),
  autoescape: true,
  cache: false,
  ext: 'html',
  writeBody: false,
  varControls: ['[[', ']]']
})); // 把service融入到容器中

const container = createContainer();
container.loadModules([__dirname + '/services/*.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});
app.use(scopePerRequest(container));
app.use(loadControllers(__dirname + '/controllers/*.js'));
app.listen(3000, () => {
  console.log('server is running on port 3000');
});