const {selectionSort, bubbleSort, mergeSort, countingSort, quicksort, heapSort } = require('./sorting');


test('Selection Sort Algorithm', () => {
  let arr = [3,6,9,1,5,2];
  expect(bubbleSort(arr)).toEqual([1, 2, 3, 5, 6, 9]);
})

test('Merge Sort Algorithm', () => {
    let arr = [3, 6, 9, 1, 5, 2];
    mergeSort(arr);
    expect(arr).toEqual([1, 2, 3, 5, 6, 9]);
})

test('Counting Sort Algorithm', () => {
    let arr = [3, 6, 9, 1, 5, 2];
    expect(countingSort(arr, 9)).toEqual([1, 2, 3, 5, 6, 9]);
})

test('Quick  Sort Algorithm', () => {
    let arr = [3, 6, 9, 1, 5, 2];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([1, 2, 3, 5, 6, 9]);
})

test('Heap Sort Algorithm', () => {
    let arr = [3, 6, 9, 1, 5, 2];
    heapSort(arr);
    expect(arr).toEqual([1, 2, 3, 5, 6, 9]);
})

