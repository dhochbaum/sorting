function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf = [];
  for (let i = 0; i <= Math.floor(wholeArray.length / 2); i++) {
    firstHalf.push(wholeArray.shift());
  }
  return [firstHalf, wholeArray];
}


const merge = (arr1, arr2) => {
    let outputArr = [];
    

    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]){
            outputArr.push(arr1.shift())
        } else {
            outputArr.push(arr2.shift())
        }

    }
    return outputArr.concat(arr1.concat(arr2))
}

const mergeSort = (input) => {
    let arr = []
    const len = input.length
    //  [1,5,7,4,2,8]
    while(arr.length < len) {
        arr.push([input.shift()])
    }

    while(arr.length > 1) {
        arr.push(merge(arr.shift(), arr.shift()))
    }
    return arr[0]
}