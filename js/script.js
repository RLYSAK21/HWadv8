class User {
    constructor(name, university, course){
        this.university = university;
        this.course = course;
        this.name = name;
        this.grade = [];
        this.studentStatus = true;
    }
    getInfo() {
        return 'Студент '+ this.course+'го курсу ' + this.university + ' - ' + this.name;
    }
    get marks() { 
        return this.studentStatus ? this.grade : null;
    }
    set marks(grade) {
        if(this.studentStatus){
            this.grade.push(grade);
        }
    }
    getAverageMark(){ 
        return Math.round(this.grade.reduce((a,b)=> a + b)/this.grade.length);
    }
    dismiss() {
        this.studentStatus = false;
    };
    recover() {
        this.studentStatus = true;
        };
}

// Тask - 1

let firstStudent = new User ('Бендер Остап Родоманський','Вищої Школи Психотерапії м.Одеса', 1 );

// Тask-2

console.log(firstStudent.getInfo());

// Тask-3, 4

firstStudent.marks = 2;

firstStudent.marks = 5;

firstStudent.marks = 3;

firstStudent.marks = 4;

console.log(firstStudent.marks);

// Тask-5

console.log(firstStudent.getAverageMark());

// Тask-6
firstStudent.dismiss();

console.log(firstStudent.marks);

// Тask-7

firstStudent.recover();
console.log(firstStudent.getInfo());