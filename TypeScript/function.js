// this is Named Function , i.e function having name....
function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log("Result of Named Function :: " + result);
// this is unnamed function
var subtraction = function (x, y) {
    return x - y;
};
var value = subtraction(100, 40);
console.log("Result of UnNamed Function :: " + value);
// function with optional parameter , we can ? for optional parameter
function greeting(msg, name) {
    return msg + " " + name;
}
console.log(greeting("GoodAfternoon", "Ravi"));
console.log(greeting("Hello, what are you doing...."));
// function with default value...
function wish(name, msg) {
    if (msg === void 0) { msg = "Hello..."; }
    return name + "  " + msg;
}
console.log(wish("Ravi", "Hi"));
console.log(wish("Ravi")); // with default value...
// rest parameter in type scrpit is equal to var args in java
function greet(msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return msg + " " + name;
}
console.log("GoodAfterNoon", "Ravi...");
console.log("GoodEvening", "Ravi", "Raju", "Raj");
