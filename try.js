function add(a,b) {
    return a+b
}

function tellTruth(param) {
    console.log(param,'dennis is handsome');
}

function tellLie(param) {
    console.log(param, 'dennis is weird');
}

function demoFunc(str, callback) {
    // call ngo gor si wui jo ge yea
    console.log(str);
    callback(str)
}

// add(123, )

// call function
demoFunc('abc',tellTruth)
demoFunc(123, tellLie)
// demoFunc(true)
// demoFunc()


let funcObj = {
    ask:()=>{
        console.log('who are you');
    },
    greet: function(){
        console.log('hi there i am dennis');
    }
}

console.log(funcObj.ask)
funcObj.greet()

let student1 = {
    name:'dennis', age:18
}

let student2 = {
    name:'dennis', age:18
}

class Student {

    constructor(name, age){
        this.nickname = name
        this.age = age
    }

    greet(newName) {
        if (!newName) {
        console.log(`hi there im ${this.nickname}`);
        return
        }
        console.log(`hi there im ${newName}`);
    }
}
let henry = new Student('henry', 18)

console.log(henry);
henry.greet()
henry.greet('dennis')

console.log(henry instanceof Student);
console.log(student2 instanceof Student);


console.log(typeof []);


let teacher = {
    name:'dennis', age:18, skills:['javascript']
}

console.log(teacher.hasOwnProperty('name'));
console.log(teacher.hasOwnProperty('age'));
