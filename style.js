
// //compile error
// try {
//     const a='samir';
// const value=a*b ;
// }
// catch (error) {
//     console.log(error);
//     //code to send text to developer
// }
// finally {
//     console.log('it will always run')
// }

// // run time error
// try {
//     const a='samir';
// // const value=a*b ;
// throw new Error('bd crashed');
// // console.log(a + 'sdf')
// }
// catch (error) {
//     console.log(error.messsage);
//     //code to send text to developer
// }
// finally {
//     console.log('it will always run')
// }

//ES6
// Template literals
// const name ='prem'
// const add='sydney'

// // console.log('my name is ' + name + '.I live in ' + add);

// const info= `
// Hi my name is ${name}.
// I live in ${add}
// `;
// console.log(info);

//arrow function
//create, call, invoke()


// function add(a, b){
//     //   console.log ('adding some data');
//     //   return 66;
//       return a+b;
// }
// const result = add(4, 6);

//es6
// const add =(a) => a*2;
// console.log(add);

//loops
//(assign ; condition ; what you want)
// for(let i=10; i>0; i--) {
//     console.log(i);
// }

//while
//declaration first and condition inside
// let i=0
// while (i <10){
//     console.log(i++);
// }

//do while | do{}while()
// let i = 0;
// do {
//     console.log(i++);

// } while (i<0);


//break out of loop 
// let i=0;
// while (i < 10){
//     console.log(i++);
   
//     // if(i===5){
//     //     break;
//     // }

    
   
// }

//data manipulation
//1. Number
//a. Parseint, float
// safe number -2^53 - 1 to 2^53 -1
// const num= 234_324_322 if its too long 

//downcasting: change string to number
// const num="46.99s";
// const value= +num;
// const value= parseInt(num); if there is string with the number 
// const value = parseFloat(num);
//NaN = not a number
//isNaN 
// if(isNaN(ans)){
//     console.log('invalid amount');
    //stop the execution
// }

// console.log(isNaN(ans));

//string
//escape character (\)

const str= 'i`m "samir"';
// const val= str.toUpperCase();
// console.log(val);

//substring
//both index are counted from zero position (between)
// const val=str.substring(2, 6);
// const val=str.slice(2,8);

//includes
// const val = str.includes("samir");
// const val = str.search("samir");

//charAt
// const val=str.charAt(1);
// const val=str.charCodeAt(1); finds aski code

//split splits the data when it is found
// const val=str.split("i");

//trim : takes the extra space out (front and end)
// const val= str.trim();
// console.log(val);

//array
// const fruits= new Array('apple' ,'mango'); //old way
//new method
const fruits=['apple', 'mango', 'kra']
console.log(fruits);


