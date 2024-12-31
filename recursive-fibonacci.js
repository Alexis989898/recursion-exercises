function fibs(n) {
    let n1 = 0;
    let n2 = 1;
    let n3;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(n1)
        n1 = n2;
        n2 = n2 + n1;
    }
    return arr;
}

function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibsRec(n - 1);
    const next = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(next);

    return arr;
}

console.log(fibs(10));
console.log(fibsRec(10));