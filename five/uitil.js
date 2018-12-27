export function makeMap(
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ?
    function (val) {
      return map[val.toLowerCase()];
    } :
    function (val) {
      return map[val];
    }
}
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

//数组变纯对象
export function toObject (arr) {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
/**
 * Convert an Array-like object to a real Array.
 */
export function toArray (list, start) {
  start = start || 0
  let i = list.length - start
  const ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

//flatten
const flatten = (arr) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};
//第二种办法
function flatten(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr);
  }
  return arr;
}

let intersection = a.filter(v => b.includes(v))  //交集
let difference = a.concat(b).filter(v => !a.includes(v) || !b.includes(v))  //不属于a或者不属于b