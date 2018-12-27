const Fresh = (callBacks = []) => {
    let len    
    const _fresh = (endtime, cb, setReVal, dateIndex) => {
      // start end date
      const date = +new Date()
      , leftsecond = ((endtime - date) / 1000) | 0
      // funcs
      ,isStop = Boolean(leftsecond > 0)
      //state是内层函数形参，val是外层函数形参，{state,val}是返回结果
      , result = state => val => ({state, val})
      // vars
      let dataObj = {d: void 0, h: void 0, m: void 0,s: void 0,}
      ,re = void 0
      
      // default result val format
      if(!setReVal)
          setReVal = ({d, h, m, s}) => `${d}天${h}小时${m}分${s}秒`
      //  computed date
      dataObj = {
          d: parseInt(leftsecond / 3600 / 24),
          h: parseInt((leftsecond / 3600) % 24),
          m: parseInt((leftsecond / 60) % 60),
          s: parseInt(leftsecond % 60),
      }
      // set result
      re = isStop 
          ? result(true)
              (setReVal(dataObj))
          : result(false)
              ("结束")
      // stop
      isStop || callBacks.splice(dateIndex, 1)
      // cb
      cb(re)
    }
  
    // export 传两个回调函数（cb,setReVal)
    const init = (endDateVal, cb, setReVal) => {
      callBacks.push([endDateVal, cb, setReVal])
    }
    
    // export
    const start =  () => {  
      const palyInterval = () => {
        if(callBacks.length == 0){
            clearInterval(sh)
            return
        }
        callBacks.forEach((params, index) => {
            len = len ? len : params.length
            params[len] = index
            _fresh(...params)
        })
      }
      palyInterval()
      // definition Interval
      const sh  = setInterval(palyInterval, 1000)
    }
    return {
      add: init,
      start
    }
  }
  
  
  export default Fresh

 
  
  