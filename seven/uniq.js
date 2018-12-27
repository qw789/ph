function unique(array) {
    debugger;
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i]);
        }
    }
    return res;
}
unique([1,2,1])