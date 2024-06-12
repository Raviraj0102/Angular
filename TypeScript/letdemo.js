var index = 0;
for (var index_1 = 0; index_1 <= 5; index_1++) {
    console.log("Index value inside the for loop :: " + index_1);
}
console.log("Index value outside the for loop :: " + index);
console.log("======================================================");
function display() {
    var msg = "welcome to RaviIt";
    {
        var msg_1 = "Welcome to Angular ";
        console.log("Inside the block msg value :: " + msg_1);
    }
    console.log("OutSide  the  block msg value :: " + msg);
}
var msg = "Good Afternoon";
console.log("Outside the function ::" + msg);
display();
