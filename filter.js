const arr = [4,7,4,-5,,7.549,1,7,5];

function mainFlow (A) {
    let arrAfterCopy = copyArr(A);
    let arrAfterVerification = verificationData(arrAfterCopy );
    let arrAfterFilter = filter(arrAfterVerification);

    for (let i = 0; i < arrAfterFilter.length; i++) {
       console.log(arrAfterFilter[i]);
    }
}

function verificationData (arrayForFilter){
    let copyOfArr = copyArr(arrayForFilter);
    let a=true;
    while(a){
        copyOfArr.forEach(function(element,i,copyOfArr) {
           if (element<0 || !((element ^ 0) === element) || !element){
              copyOfArr.splice(0,i);
           }

        });

    }
    // copyOfArr.forEach(function(element,i,copyOfArr) {
    //    if (element<0 || !((element ^ 0) === element) || !element){
    //       copyOfArr.splice(0,i);
    //    };
    // });
    return copyOfArr;
}

function copyArr (arrayForCopy){
    let copyOfArr = arrayForCopy.slice();
    return copyOfArr;
}

function filter (copyOfArr){
    let  A= copyArr(copyOfArr);
    let n = A.length;
    for (let i = 0; i < n-1; i++)
    { for (let j = 0; j < n-1-i; j++)
        { if (A[j+1] > A[j])
             { let t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
    }
    return A;
}





function mix (arrForMix) {
    let mixs = copyArr(arrForMix);
    for (let i = mixs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixs[i], mixs[j]] = [mixs[j], mixs[i]];
    }
    return mixs;
}

function compareElemOfArr (arrOrig, arrMix){
    // let j=false;
    // do{
    for (let i=0;i<arrOrig.length;i++){
        if (arrOrig[i]==arrMix[i]){
            let d = shiftEll(arrMix);
            arrMix = [...d];
            i=0;
            //  continue;
        }
    }

    // }
    // while (j=true);
    return arrMix;
}

function shiftEll (arrShif){
    let copy = copyArr(arrShif);
    let shifted = copy.shift();
    let d =  [...copy, shifted];
    return d;
}

mainFlow(arr)