var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.smarks >= 75) {
            return 'A';
        }
        else if (this.smarks >= 65 && this.smarks < 75) {
            return 'B';
        }
        else {
            return 'C';
        }
    };
    return Student;
}());
var s1 = new Student(); // object creation..
s1.sname = "John";
s1.smarks = 79;
s1.srank = 3;
var s2 = new Student(); // object creation..
s2.sname = "Jui";
s2.smarks = 55;
s2.srank = 20;
var s3 = new Student(); // object creation..
s3.sname = "Aliya";
s3.smarks = 70;
s3.srank = 7;
console.log(s1.getStudentGrade());
console.log(s2.getStudentGrade());
console.log(s3.getStudentGrade());
