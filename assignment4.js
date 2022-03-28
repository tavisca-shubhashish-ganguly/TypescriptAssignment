function FirstNNumbers(n) {
    var temp = 0;
    for (var i = 1; i <= n; i++) {
        temp = temp + i;
    }
    return temp;
}
var num = FirstNNumbers(5);
console.log(num);
