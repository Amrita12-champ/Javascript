let n=prompt("enter a number ");
let arr=[];
for(let i=0; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res, cur)=>{
    return res+cur;

});
console.log(sum);

let product=arr.reduce((res, cur)=>{
    return res*cur;
});
console.log(product);