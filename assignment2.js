function Numbercheck(value) {
    if ((value !== null) && (value !== undefined)) {
        return value;
    }
    else {
        return -1;
    }
}
var a = Numbercheck(undefined);
console.log(a);
