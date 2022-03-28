function generic<T>(arg: T): T {
    return arg

}

var a: any

a=generic(1)
console.log(a)
a=generic("Hello")
console.log(a)