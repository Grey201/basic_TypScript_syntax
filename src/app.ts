let firstName:string ='Vasy';
let age: number= 34;
let student= true;
let grades:null= null;
let gender:undefined=undefined;
let mounths : string[]=['December', 'January', 'February'];

console.log(firstName, age, student, grades, gender, mounths);

firstName= 'Bill';
age=25;
mounths['1']='April';

console.log(firstName, age, student, grades, gender, mounths);

let numbers:number[]= [12, 3, 4,]
numbers.push(1);
console.log(numbers.length);
numbers.pop();
numbers.sort((a,b)=>a-b);
console.log(numbers);