class Addition{
     add(a:string, b:string)
     add(a:number, b:number) 

     add(a: any,b:any){
        console.log(a+b)
        
    }
}

var o = new Addition()
o.add(1,2)
o.add("Hello","World")