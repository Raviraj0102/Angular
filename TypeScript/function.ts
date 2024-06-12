// this is Named Function , i.e function having name....

function add(x : number,y : number) : number{    // this Named function
    return x+y;
}

let result =add(10,20);
console.log("Result of Named Function :: " +result);



// this is unnamed function

let subtraction =function(x:number,y :number) : number{
    return x-y;
}

   let value= subtraction(100, 40);

 console.log("Result of UnNamed Function :: " +value);


 // function with optional parameter , we can ? for optional parameter


 function greeting(msg:string ,name?: string):string{  // using ? in name parameter (name?)
    return msg+ " " + name;
 }

 console.log(greeting("GoodAfternoon","Ravi"));
 console.log(greeting("Hello, what are you doing...."));


 // function with default value...


 function wish(name:string , msg:string ="Hello..."){
    return name + "  "+ msg;

 }

 console.log(wish("Ravi","Hi"));
 console.log(wish("Ravi")); // with default value...

 // Rest parameter in type scrpit is equal to var args in java

 function  greet(msg:string,...name:string[]){
    return msg + " "+ name;
 }

 console.log("GoodAfterNoon","Ravi...");
 console.log("GoodEvening","Ravi","Raju","Raj");