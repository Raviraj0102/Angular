var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
    }
    return User;
}());
var user = new User(101, "Jhon");
console.log("UserId :: " + user.userId);
console.log("UserName :: " + user.userName);
