// var a=['typeof NaN',
// '99999999999',
// '0.5+0.1==0.6',
// '0.2+0.1==0.3',
// 'Math.max()',
// 'Math.min()',
// '[]+[]',
// '[]+{}',
// '{}+[]',
// 'true+true+true',
// 'true-true',
// 'true==1',
// 'true===1',
// '(!+[]+[]+![]).length',
// '[]==0'
// ]
// for(var i of a){
//     console.log(i+' => <'+eval(i)+'>')
// }
let statusBox=['data','dating','refuse','refusedating'];
let a={status:"data"};
// let b={status:'dating'}
let b={}
if((a.status=="data"||a.status=="dating") && (b && (b.status=="data"||b.status=="dating"))){
    console.log(222)
}