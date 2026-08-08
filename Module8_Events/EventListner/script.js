let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", (evt)=>{
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
});
