

const swap = (arr, i , x)=>{
    let temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
}

const selectionSort = (arr)=>{
    let n = arr.length;
    for(let i =0; i < arr.length-1; i++){
        let min = arr[i];
        let min_index = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < min) {
                min = arr[j];
                min_index = j;
            }
        }
        swap(arr, i, min_index);

    }
    return arr;
}

const bubbleSort = (arr)=>{
    let n = arr.length;
    let i = 0;
    while(i < n){
        let j = 0
        while(j < n - i -1){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
            j++
        }
        i++
    }
    return arr;
}

const countingSort = (arr, range) =>{
    let count = Array(range + 1);
    let output = Array(range + 1);
    //count array elements
    for(let i = 0; i < arr.length; i ++){
        if(count[arr[i]] == undefined) count[arr[i]]= 0;
        count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]]= 1;
    }
    //prefix sum
    for( let i = 1; i < count.length; i++){
        if(count[i] == undefined) count[i]= 0;
        if(count[i-1] == undefined) count[i-1] = 0
         count[i] += count[i-1] 
    }
    for( let i = 0; i < arr.length; i ++){
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]] -= 1;
    }
    for( let i = 0; i < arr.length; i ++){
        arr[i] = output[i]
    }
    return arr;
}

const mergeSort = (arr) => {
    if (arr.length > 1) {
        let n = arr.length;
        let m = Math.floor(n / 2);
        let L = arr.slice(0, m);
        let R = arr.slice(m, n);
        mergeSort(L);
        mergeSort(R);
        
        let i = j = k = 0;
        while (i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                arr[k] = L[i];
                i++
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
const quicksort = (arr, left, right) =>{
    if (left < right) {
        let pt = partition(arr, left, right);
        quicksort(arr, left, pt -1);
        quicksort(arr, pt + 1, right);
    }
    

}

const heapify = (arr, n , i) =>{
    let left = (2*i) + 1
    let right = (2*i) + 2;
    let largest = i;
    if(left < n && arr[largest] < arr[left]){
        largest = left;
    }
    if(right < n && arr[largest] < arr[right]){
        largest = right;
    }
    if(largest != i){
        swap(arr, largest, i);
        heapify(arr,n, largest);
    }
}

const heapSort = (arr) =>{
    let n = arr.length;
    for(let i = parseInt(n/2 -1); i >=0; i--){
        heapify(arr, n, i);
    }
    for(let j = n -1; j >0; j --){
        swap(arr, 0, j)
        heapify(arr,j, 0)
    }
    
}

const partition = (arr, left, right) =>{
    let pivot = arr[right];
    let lowestSpot = left - 1;
    for(let j = left; j < right; j ++){
        if(arr[j] < pivot){
            lowestSpot ++;
            swap(arr, lowestSpot, j);
        }
    }
    swap(arr, lowestSpot + 1, right)
    return lowestSpot + 1;
}

// let arr = [3,6,9,1,5,2];
// quicksort(arr, 0, arr.length - 1);

module.exports= { selectionSort, bubbleSort, mergeSort, countingSort, quicksort, heapSort }