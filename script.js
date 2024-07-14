 //  <program 1> min and max number 
 let x1 = prompt('what is the first number?')
let x2 = prompt('what is the secound number?')
let x3 = prompt('what is the third number?')
console.log(x1,x2,x3)
if((x1 > x2) && (x1 > x3)){
console.log('the max element: ',x1)
}
else if((x2 > x3) && (x2 > x1)){
    console.log('the max element: ',x2)
    }
else{
    console.log('the max element: ',x3)
}
if((x1 < x2) && (x1 < x3)){
    console.log('the min element: ',x1)
}
else if((x2 < x3) && (x2 < x1)){
console.log('the min element: ',x2)
}
else{
console.log('the min element: ',x3)
}            

// <program 2> type char
let char = prompt('what is the char?')
if((char == "a") || (char == "o") || (char == "i") || (char == "i") || (char == "u")){
    console.log('the char is vowel: ', char)
    }
    else{
        console.log('the char is consonant: ', char) 
    }
// <program 3> multiplication
let number = prompt('what is the number?')
function multiplication (x){
    console.log(x);
    console.log(1 * x);
    console.log(2 * x);
    console.log(3 * x);
    console.log(4 * x);
    console.log(5 * x);
    console.log(6 * x);
    console.log(7 * x);
    console.log(8 * x);
    console.log(9 * x);
    console.log(10 * x);
    console.log(11 * x);
    console.log(12 * x);
}
multiplication(number)


// <program 4> even function
let number2 = prompt('what is the number?')
    const even = (evenNumber) => {
        console.log(number2)
    for (let i = 2 ; i < number2 ; i += 2 ){
        console.log(i)
    }
}
even(number2)


// <program 5> function to add five mark 
const a = prompt ('input the one mark')
const b = prompt ('input the two mark')
const c = prompt ('input the three mark')
const d = prompt ('input the four mark')
const e = prompt ('input the five mark')

const num1 = parseInt(a)
const num2 = parseInt(b)
const num3 = parseInt(c)
const num4 = parseInt(d)
const num5 = parseInt(e)
const sumn = [num1,num2,num3,num4,num5];

const five = (max) =>{
    let sum = 0;
for (let item = 0 ; item < 5 ; item++){
    sum = sum + sumn[item] ;
};
console.log('Total marks =  ',sum );
console.log('Average Marks =  ', sum / 5);
console.log('Percentage =  ', sum / 5);
}
five(sumn)

// طريقة-ثانية
// 
// function sumAllNumber(max) {
//     let sum = 0;
//     for (let i = 0; i < sumn.length; i++) {
//         sum += sumn[i];
        
//     }
//     return sum;
// }
// const total = sumAllNumber(sumn)
// console.log(total)



// <program 6> 
const a2 = prompt ('input the one mark')
const b2 = prompt ('input the two mark')
const c2 = prompt ('input the three mark')
const d2 = prompt ('input the four mark')
const e2 = prompt ('input the five mark')

const numb1 = parseInt(a2)
const numb2 = parseInt(b2)
const numb3 = parseInt(c2)
const numb4 = parseInt(d2)
const numb5 = parseInt(e2)
const sumn2 = [numb1,numb2,numb3,numb4,numb5];
let sum2 = numb1 + numb2 + numb3 + numb4 + numb5;
console.log(sum2)
let avg = sum2/5;
console.log(avg)

   if((avg > 90) || (avg <= 100)){
    console.log('Percentage :', '90%' ,'Grad A')
   }
   else if((avg > 80) || (avg <=90)){
    console.log('Percentage :', '80%' ,'Grad B')
   }
   else if((avg > 70) || (avg <= 80)){
    console.log('Percentage :', '70%' ,'Grad C')
   }
   else if((avg > 60) || (avg <= 70)){
    console.log('Percentage :', '60%' ,'Grad D')
   }
   else if((avg > 40) || (avg <= 60)){
    console.log('Percentage :', '40%' ,'Grad E')
   }
   else{
    console.log('Percentage :', '40%' ,'Grad F')
   }
