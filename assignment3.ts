function NameAndAge(name: string, age: number, isAutomatedBefore: boolean){
    console.log("My name is "+name)
    console.log("My age is "+ age)
    if(isAutomatedBefore){
        console.log("I have done automation before")
    }
    else{
        console.log("I have not done automation before")
    }
}

NameAndAge("Shubhashish", 25, true)