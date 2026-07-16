let arr=[3, 6, 9, 1, 3];
const max=arr.reduce((prev, cur)=>{
    return prev>cur? prev: cur;
});
console.log(max);