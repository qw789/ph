// 模拟 Koa 创建的实例
const app = {
    middlewares: []
};

// 创建 use 方法
app.use = function(fn) {
    app.middlewares.push(fn);
};

app.compose = function() {
    // 递归函数
    function dispatch(index) {
        // 如果所有中间件都执行完跳出，并返回一个 Promise
        if (index === app.middlewares.length) return Promise.resolve();

        // 取出第 index 个中间件并执行
        const route = app.middlewares[index];

        // 执行后返回成功态的 Promise
        return Promise.resolve(route(() => dispatch(index + 1)));
    }

    // 取出第一个中间件函数执行
    dispatch(0);
};

module.exports = app;