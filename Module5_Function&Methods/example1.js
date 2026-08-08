//filter out the mark of Students that scored 90.
let marks=[56, 93, 23, 98, 56, 89];
let max=marks. filter((val)=>{
    return val>=90;
});
console.log(max);
