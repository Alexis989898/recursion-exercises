function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let middle = Math.floor(arr.length / 2)
    let leftHalf = mergeSort(arr.slice(0, middle));
    let rightHalf = mergeSort(arr.slice(middle));

    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }
    mergedArray = mergedArray.concat(left.slice(i));
    mergedArray = mergedArray.concat(right.slice(j));

    return mergedArray;
}

console.log(mergeSort([1, 3, 2, 6, 7, 9, 4, 7]));