let price=[250, 645, 300, 900, 50];
console.log("The price of thr product are :", price);

console.log("After discount of 10 % the price of item becomes: ");
for(let val=0; val<price.length; val++){
    let originalPrice=price[val];

   let discount=originalPrice/10;
   let finalPrice=originalPrice-discount;
    console.log(finalPrice+ " ");
}
