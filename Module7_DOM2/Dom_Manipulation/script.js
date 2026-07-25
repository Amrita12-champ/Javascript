let newbtn=document.createElement("button");
newbtn.innerText="Click me!"
console.log(newbtn);
let div=document.querySelector('div');
div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
div.after(newbtn);
let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hiii, i am Amrita</i>"
document.querySelector("body").prepend(newheading);
//newheading.remove();

