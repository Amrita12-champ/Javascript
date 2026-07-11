let Marks=[45, 67, 98, 50, 44];
let sum=0;
// for(let i=0; i<Marks.length; i++){
//     sum+=Marks[i];
// }

for(let val of Marks){
    sum+=val;
}
console.log(sum);
let average =sum/Marks.length;
console.log(`avg marks of the class= ${average}`);
