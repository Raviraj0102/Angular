var patName = 'dog';
function setpatName() {
    var patName = 'cat';
    console.log("inside the function :: " + patName);
}
setpatName();
console.log("out sidw the function :: " + patName);
var index = 0;
for (var index = 0; index <= 5; index++) {
    console.log("index value inside for loop :: " + index);
}
console.log("index value outside for loop ::  " + index);
