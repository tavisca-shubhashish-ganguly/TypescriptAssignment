function myFullName(name: string, lastName: string, lastName1?: string){

    if(lastName1){console.log(name+" "+lastName+" "+lastName1)}
    else{console.log(name+" "+lastName)}
    
}

myFullName("Shubhashish", "Ganguly")
myFullName("Subhash", "Chandra", "Bose")