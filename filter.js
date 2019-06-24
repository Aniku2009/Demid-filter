// // // const arr = [4,7,4,-5,,7.549,1,7,5];
// // const num = 474579175;
// // const arr = num.toString().split('');
// //
// // // return parseInt(Array.from(num.toString()).sort().reverse().join(''));
// //
// //
// // function convertNum(num){
// //     return parseInt(Array.from(num.toString()).sort().reverse());
// // }
// // console.log(convertNum(num));
// //
// //
// // function mainFlow (A) {
// //     console.log(A);
// //     let arrAfterCopy = copyArr(A);
// //      let arrAfterVerification = verificationData(arrAfterCopy);
// //     let arrAfterFilter = filter(arrAfterVerification);
// //     let arrFinal = arrAfterFilter.join("");
// //     console.log(arrFinal);
// //     // alert('Original array - '+ arrFinal);
// //     for (let i = 0; i < arrFinal.length; i++) {
// //        console.log(arrFinal[i]);
// //     }
// // }
// //
// // function verificationData (arrayForFilter){
// //     let copyOfArr = copyArr(arrayForFilter);
// //     let a=true;
// //     while(a){
// //         copyOfArr.forEach(function(d,i,copyOfArr) {
// //            let element = parseInt(d,10);
// //            if (element<0 || !((element ^ 0) === element) || !element){
// //               copyOfArr.splice(i,i);
// //            }
// //             return;
// //         });
// //         break;
// //     }
// //     // copyOfArr.forEach(function(element,i,copyOfArr) {
// //     //    if (element<0 || !((element ^ 0) === element) || !element){
// //     //       copyOfArr.splice(0,i);
// //     //    };
// //     // });
// //     return copyOfArr;
// // }
// //
// // function copyArr (arrayForCopy){
// //     let copyOfArr = arrayForCopy.slice();
// //     return copyOfArr;
// // }
// //
// // function filter (copyOfArr){
// //     let  A= copyArr(copyOfArr);
// //     let n = A.length;
// //     for (let i = 0; i < n-1; i++)
// //     { for (let j = 0; j < n-1-i; j++)
// //         { if (A[j+1] > A[j])
// //              { let t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
// //         }
// //     }
// //     return A;
// // }
// //
// //
// // mainFlow(arr);
//
// function doAsyncTask(cb) {   setTimeout(() => {     console.log("Async Task Calling Callback");     cb();   }, 1000); }
// doAsyncTask(() => console.log("Callback Called"));
//
//
// let o= {name : 'Vasy',
// surname : 'Ivanov'};
//
// delete o.name;
//  // delete o.surname;
//
//
// console.log('------------------------------------------------------');
// for (let d in o)
//     console.log(d)
//
// console.log('------------------------------------------------------');
//
//
// function some (age) {
//     if (age=== u) {
//         console.log('enter age');
//     }
// }
//
// function isEmpty(o){
//     let count = 0;
//     for (let v in o){
//         count++;
//         console.log(count);
//     }
//     if (!count)
//     {return true;}
//     else
//     { return false;}
// }
//
// // function isEmpty(t){
// //     console.log('in function');
// //     console.log(t);
// //     for (let v in t){
// //         console.log('in array');
// //         console.log(v);
// //         return false;
// //     }
// //         return true;
// // }
//
// console.log(isEmpty(o));
//
//
//
add =  (i) => {return i+1};
divide =  (i) => {return i/2};
multip =  (i) => {return i*i};

const compose = (...fns) =>
    fns.reduceRight((prevFn, nextFn) =>
            (...args) => nextFn(prevFn(...args)),
        value => value
    );
// const compose = (...fns) => (arg) =>
//     fns.reduce((composed, f) => f(composed),arg);
// const compose  = (...arr) =>
//     arr.reduce((prevFn, nextFn) =>
//             (...args) => nextFn(prevFn(...args)),
//         value => value
//     );
// }const compose  = (...arr) =>{
//        arr.reduce(function (prev, current) {
//     });
//     return (i) =>{
//
//     }
// }
// const fnc = compose(
//     val => { console.log(1); return `<${add(val)}>`; },
//     // val => { console.log(2); return `<${divide(val)}>`; },
//     val => { console.log(3); return `<${multip(val)}>`; }
// );
const fnc = compose(multip, divide, add);
// const fnc = compose(
//     val => [add, divide, multip]);
console.log( fnc(5) );
// fnc = (i, j )  => {
//
//     let arr = [add(i, j), divide(i), multip(i)];
//
//     let result = arr.reduce(function (prev, current, a) {
//         console.log('index - '+a);
//         if (a !== 0) {
//         arguments[0]=prev;}
//
//         console.log('prev - ' + prev);
//         console.log('current' + current);
//         let temp = current;
//         return temp;
//     }, 0);
//     return result;
// }
// var result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);





// function checkAge(age) {
//     let d = (age > 18) || confirm('Родители разрешили?');
//    console.log(d);
//     return d;
// }
//
// checkAge(8);
// let all = multip(divide(add(3,7)));
// console.log( all );
