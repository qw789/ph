const Koa = require('koa');
const compose = require('koa-compose');
const r=require('ramda');
const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
// const middlewares=r.compose(logger,main)
app.use(middlewares);
app.listen(3000);