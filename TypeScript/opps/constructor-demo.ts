class User{
    
    userId:number;
    userName:string;


    constructor(userId:number ,userName:string){
        this.userId = userId;
        this.userName = userName;
    }

}

let user = new User(101,"Jhon");
console.log("UserId :: " + user.userId);
console.log("UserName :: "+user.userName);
