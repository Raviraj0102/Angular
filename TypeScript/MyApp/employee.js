var Address = /** @class */ (function () {
    function Address(stree, city, state) {
        this.stree = stree;
        this.city = city;
        this.state = state;
    }
    return Address;
}());
var Employee = /** @class */ (function () {
    // constructor in Type Script we can write only 1 constructor
    function Employee(id, name, email, phone, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    // method
    Employee.prototype.displayEmpInformation = function () {
        console.log('Id : ' + this.id);
        console.log('Name : ' + this.name);
        console.log('Email : ' + this.email);
        console.log('Phone : ' + this.phone);
        console.log("==============");
        console.log("------ Address Details --------");
        console.log("stree :" + this.address.stree);
        console.log("city :" + this.address.city);
        console.log("state :" + this.address.state);
    };
    return Employee;
}());
// create the instance for the class Employee
var address = new Address("amirphet", "hyd", "tl");
var address1 = new Address("wogholi", "pune", "mh");
var employee1 = new Employee(101, "ravi", "ravi@123", 909090, address);
var employee2 = new Employee(102, "abhi", "abhi@123", 20220, address1);
//console.log(employee1);  // little difference between this below two line
//console.log(employee2); 
employee1.displayEmpInformation();
employee2.displayEmpInformation();
console.log(employee1.displayEmpInformation);
