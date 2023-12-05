
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

// const str= 'i`m "samir"';
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
// const fruits=['apple', 'mango', 'kra','orange','grapes']
// console.log(fruits);
// //access
// console.log(fruits);
// console.log(fruits[1])

//length
// console.log(fruits.length)

//adding elements
// fruits[3] = 'pineapple';
// fruits [5] = 'kiwi';

//array method
// fruits.push('cherry') :: add in for last element

// //remove elements
// fruits.pop('cherry'); ;; remove last element
// console.log(fruits)


//splice: remove the items between
// fruits.splice(2, 2) // first is starting and 2nd is how many to delete)
// fruits.splice(1,2, 'passionfruit')

//first element remove :: 
// fruits.shift();

// //first element add ::
// fruits.unshift('potato','tomato');

//index of :: to knoe the index of the element

// console.log(fruits.indexOf('qpple'))

// const veges= ['garlic','potato','pasta'];
// const vegesAndFruits = fruits.concat(veges)
// console.log(fruits, veges, vegesAndFruits)

// console.log(fruits)

//mutating arrays:: change from reference to premitive
// console.log(fruits)
// console.log(...fruits)

// const newFruits =[...fruits];
//  newFruits.push('berries');
//  newFruits.shift();

//  console.log(newFruits);





// //reference data type
// const newFruits = fruits;

// newFruits.push('berries');

// console.log(newFruits)
// console.log(fruits)

// //premitive
// const addres='rockdale';
// let myAddress = addres;
// myAddress= 'hurstville';
// console.log(myAddress, addres);
// //


//for loop to convert all into capital
// let uppercaseFruits=[];
// for(let i=0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());
//     uppercaseFruits.push(fruits[i].toUpperCase())
// }
// console.log(uppercaseFruits);

// //for each :: only for array

// // fruits.forEach(element => {
// //     // console.log(element)
// // });

// //map:: it returns array
// const mappedFruits=fruits.map(fruit => {
//     console.log('this is printed from the map', fruit);
//     return fruit.toUpperCase();
// });
// console.log(mappedFruits)

// //includes:: check something is there or not

// console.log(fruits.includes('mango'));

// //every:: 
// console.log(fruits.every (element =>element.length>5))

// //some:: if only one is true its true
// console.log(fruits.some (element => element.includes('a')))


// //filter:: 
// const filteredFruits=fruits.filter(element =>element.length > 5);
// console.log(filteredFruits)

//slice vs splice


//calculate sum for/foreach [2,4,6,8]
// let num=[2,4,6,8];
// sum=0;
// for(let i=0; i<num.length; i++ ) {
//     // console.log(i);
//     sum= sum+ num[i];
//     console.log(sum);
// }


//for each
let num=[2,4,6,8];
let sum=0

num.forEach = (numb1 => {
    sum =sum + numb1;
    console.log("sum of number ",sum)
});


//reduce
// 
const result=num.reduce ((previousValue, currentValue) => 

    previousValue + currentValue
    , 0
    );
    console.log(result);

    const result1=num.reduce ((previousNumber, currentNumber)=>
    previousNumber * currentNumber
    ,1
    );
    console.log(result1);


    // create an array of 50 random numbers range between 1 to 100
    
    //creating array
    //create loop- 50 times
    // console.log ()
    //use console.log (math.random)-but generates 2 digits
    //array.push(random)

    let randomNumArray=[];
    
    while(randomNumArray.length<50){
        const randomNum= Math.floor(Math.random() * 99 +1);
        if (!randomNumArray.includes(randomNum)) {
            randomNumArray.push(randomNum);
           
        }
    }
    randomNumArray.sort();
    randomNumArray.reverse();
    // for(let i=0; i<50; i++){
    //     const randomNum= Math.floor(Math.random() * 99 +1);
    //     if (!randomNumArray.includes(randomNum)) {
    //         randomNumArray.push(randomNum);
    //     }
        
    // }

    console.log(randomNumArray);

    //sort descending order
const fruits= ['apple', 'orange', 'mango', 'guava'];
fruits.sort();
fruits.reverse();
console.log(fruits);
    
