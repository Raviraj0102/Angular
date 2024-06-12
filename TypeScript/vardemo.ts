var patName:string='dog';

function setpatName(){
    var patName:string ='cat';
    console.log("inside the function :: " + patName)

}
setpatName();

console.log("out sidw the function :: " + patName);


var index= 0;
for(var index =0 ; index <= 5; index++){
    console.log("index value inside for loop :: "+index);
}

console.log("index value outside for loop ::  "+index);