var express = require('express');
var app = express();
var port = 17469;
var fs = require('fs');
var path = require('path');
var moment = require('moment');
// var md5 = require('md5');


app.get('/',(req,res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        ceshi3
        <script src="/moments.min.js"></script>
    </body>
    </html>`)
})

//强缓存
app.get('/moments.min.js',(req,res)=>{
    let jsPath = path.resolve(__dirname,'./static/js/moment.min.js')
    let cont = fs.readFileSync(jsPath);
    res.setHeader('Expires', getGLNZ()) //1分钟
    res.setHeader('Cache-Control', 'public,max-age=120') //2分钟
    res.end(cont)
})

//协商缓存Last-Modified/If-Modified-Since
// app.get('/moments.min.js',(req,res)=>{
//     let jsPath = path.resolve(__dirname,'./static/js/moment.min.js')
//     let cont = fs.readFileSync(jsPath);
//     let status = fs.statSync(jsPath)

//     // console.log(status.mtime.toUTCString(), req.headers['if-modified-sinze'])
//     let lastModified = status.mtime.toUTCString()
//     console.log(lastModified, req.headers['if-modified-since'])
//     if(lastModified === req.headers['if-modified-since']){
//         res.writeHead(304, 'Not Modified')
//         res.end()
//     } else {
//         res.setHeader('Last-Modified', lastModified)
//         res.writeHead(200, 'OK')
//         res.end(cont)
//     }
// })

//协商缓存Etag
// app.get('/moments.min.js',(req,res)=>{
//     let jsPath = path.resolve(__dirname,'./static/js/moment.min.js')
//     let cont = fs.readFileSync(jsPath);
//     let etag = md5(cont);

//     console.log(etag,'etag')
//     if(req.headers['if-none-match'] === etag){
//         res.writeHead(304, 'Not Modified')
//         res.end()
//     } else {
//         res.setHeader('ETag', etag)
//         res.writeHead(200, 'OK')
//         res.end(cont)
//     }
//     res.end(cont)
// })


function getGLNZ(){
    return moment.utc().add(1,'m').format('ddd, DD MMM YYYY HH:mm:ss')+' GMT';
}

app.listen(port,()=>{
    console.log(`listen on ${port}`)    
})