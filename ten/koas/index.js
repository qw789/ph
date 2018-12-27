const Koa = require("koa");
// const fs = require("fs");

const app = new Koa();

// 异步函数
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("hello");
        }, 3000);
    });
}

app.use((ctx, next) => {
    console.log(1);
    next();
    console.log(2);
});
app.use(async (ctx, next) => {
    console.log(3);
    await fn(); // 调用异步函数
    await next();
    console.log(4);
});
app.use(async (ctx, next) => {
    console.log(5);
    await next();
    console.log(6);
});
app.listen(3000, () => {
    console.log("server start 3000");
});