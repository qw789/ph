var until={
    delegateEvent:function(interfaceEle, selector, type, fn){
        if(interfaceEle.addEventListener){
            interfaceEle.addEventListener(type, eventfn);
            }else{
            interfaceEle.attachEvent("on"+type, eventfn);
            }
              
            function eventfn(e){
            var e = e || window.event;   
            var target = e.target || e.srcElement;
            if (matchSelector(target, selector)) {
                    if(fn) {
                        fn.call(target, e);
                    }
                }
            }
    },
    matchSelector:function(ele, selector) {
            // if use id
            if (selector.charAt(0) === "#") {
                return ele.id === selector.slice(1);
            }
            // if use class
            if (selector.charAt(0) === ".") {
                return (" " + ele.className + " ").indexOf(" " + selector.slice(1) + " ") != -1;
            }
            // if use tagName
            return ele.tagName.toLowerCase() === selector.toLowerCase();
        }
}

export default until;