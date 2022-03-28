class Person{
    readonly name
    private age
    protected title
    public company
    constructor(name: string, age: number, title: string, company: string){
        this.name=name
        this.age=age
        this.title=title
        this.company=company
    }
     public getAge(): number{
         return this.age
     }
}



class Employee extends Person{
    public setTitle(title){
        

        this.title=title
        console.log("Overriden title:"+this.title)
    }
}

var aPerson = new Person("Shubhashish",25,"Associate","Tavisca")
console.log(aPerson.name+" is of age "+aPerson.getAge()+" years and works in "+ aPerson.company)
//aPerson.name="Ganguly" throws error
var aEmployee = new Employee("Shubhashish",25,"Associate","Tavisca")
aEmployee.setTitle("Software QA")

