let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("bt1 is clicked !");
    let a=25;
    a++;
    console.log(a);//26
    let box=document.querySelector("div");
    box.onmouseover=()=>{
        console.log("you are inside the box")
    };
}