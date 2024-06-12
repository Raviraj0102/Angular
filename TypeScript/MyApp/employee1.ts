class Person{
    private id : number;
    private  name : string;

     constructor(id:number,name:string){
            this.id = id;
            this.name = name;
     }
     getId():number{
        return this.id ;
     }

     getName():string{
         return this.name;
     }

}
class Employee2 extends Person{
    salary : number;

    constructor(id: number,name : string,salary:number){
        super(id,name);
        

    }

    public displayInformation1():void{
        console.log("EId : " +super.getId);
        console.log("Ename :" +super.getName);
        console.log("Esalary :"+ this.salary);

    }

}

   const employee3 = new Employee2(101,"Ravi",3000);
   employee3.displayInformation1();

   export{}

