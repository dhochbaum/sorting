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
    let arr = [input]
    //  [1,2,4,6,3,7]
    while(arr[[0].length > 1]) {
        // let temp = split(arr)
        // for(let i = 0; i < arr.length; i++){
        //     temp.concat(split(arr[i]))
        // }
        // arr = temp

        arr.concat(split(arr.shift()))
    }
    console.log(arr)
}