var index = 0;


for(let index = 0 ; index <= 5; index ++){
    console.log("Index value inside the for loop :: " +index)
}

console.log("Index value outside the for loop :: " +index)
console.log("======================================================");
function display(){
let msg:string="welcome to RaviIt";
{
    let msg:string="Welcome to Angular ";
    console.log("Inside the block msg value :: " +msg);

}
    console.log("OutSide  the  block msg value :: "+msg);

}

var msg:string="Good Afternoon";
console.log("Outside the function ::" +msg);
display();