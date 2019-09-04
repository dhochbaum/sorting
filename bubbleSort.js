let swapCounter = 0;

const bubbleSort = (arr, callback = (a,b) => a > b) => {
    if(arr.length <= 1) return arr;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (callback(arr[j], arr[j+1])) {
                swap(arr, j);
            }
        }
    }
    // console.log(swapCounter);
    // swapCounter = 0;
    return arr;

};

const swap = (array, index) => {
    // array[index] <---- array [index + 1]
    // arrau[index + 1] <---- array [index]
    let placeholder = array[index];
    array[index] = array[index + 1];
    array[index + 1 ] = placeholder;
    // swapCounter++;
};
