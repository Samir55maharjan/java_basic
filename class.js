class Person {
    #salary
    constructor (name, MyAge, salary) {
        this.name = name;
        this.age=MyAge;
        this.#salary= 30000;
    }
readBio() {
    console.log ("this is my name" , this.name,"and my age is", this.age, this.#getsalary())

;}

#getsalary() {
    console.log("my salary is", this.#salary);
}
   }

   //inherits
   class Student extends Person{
    constructor (fullname, myage) {
        super(fullname, myage);
        this.type ="student";
    }
    
    }
    const student1=new Student("student Shyam", 20);
    student1.readBio();


const person1 = new Person("Ram", 20);
// person1.readBio();
const person2 = new Person("Rahul", 21);
// person2.readBio();

const person5 ={
    name: "samie",
    age: 40,
    readBio: function() {
        console.log("This is my name", this.name, "and my age is", this.age);
        return "not undefined"
    },
    readName: () => {
        console.log("This is my name", person5.name, "and my age is", person5.age);
    }
}

// console.log(person5.readBio())
// console.log(person5.readName())
        
    