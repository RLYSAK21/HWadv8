class User {
    constructor(name, university, course){
        this.university = university;
        this.course = course;
        this.name = name;
        this.grade = [];
    }
    getInfo() {
        return 'Студент '+ this.course+'го курсу ' + this.university + ' - ' + this.name;
    }
    get marks() { 
        return this.grade;
    }
    set marks(grade) {
        if( grade > 0 && grade <= 5 ){
            this.grade.push(grade);
        } else {
            "У студента немає оцінок або введене не коректне число";
        }
    }
    getAverageMark(){ 
        return Math.round(this.grade.reduce((a,b)=> a + b)/this.grade.length);
    }
    dismiss() {
        this.grade = null;
        return "Студента виключено"
    };
    recover() {
        if (this.grade === null) {
          this.grade =[]; 
          return "Студента відновлено"; 
        } 
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

console.log(firstStudent.dismiss());

// Тask-7

console.log(firstStudent.recover());