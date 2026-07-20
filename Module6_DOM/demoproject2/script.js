let divs=document.querySelectorAll(".box");
// divs[0].innerText="1st box of the list";
// divs[1].innerText="2nd box of the list";
// divs[2].innerText="3rd box of the list";
// divs[3].innerText="4th box of the list";
let idx=1;
for(div of divs){
    div.innerText=`${idx} box of the list`;
    idx++;
}