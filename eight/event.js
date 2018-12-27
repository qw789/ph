const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    aa(){
        this.emit("event")
    }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});
setTimeout(()=>{
   myEmitter.aa();    
},2000)