var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, title, company) {
        this.name = name;
        this.age = age;
        this.title = title;
        this.company = company;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.setTitle = function (title) {
        this.title = title;
        console.log("Overriden title:" + this.title);
    };
    return Employee;
}(Person));
var aPerson = new Person("Shubhashish", 25, "Associate", "Tavisca");
console.log(aPerson.name + " is of age " + aPerson.getAge() + " years and works in " + aPerson.company);
//aPerson.name="Ganguly" throws error
var aEmployee = new Employee("Shubhashish", 25, "Associate", "Tavisca");
aEmployee.setTitle("Software QA");
