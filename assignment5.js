function IncrementByOne(arr) {
    return arr.map(function (a) { return a + 1; });
}
var arr;
arr = [1, 2, 3, 4, 5, 6];
console.log("Original array " + arr);
arr = IncrementByOne(arr);
console.log("incremented array " + arr);
