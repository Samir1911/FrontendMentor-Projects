const menu=document.getElementById("menu");
const links=document.getElementById("links");
const a=document.querySelector(".links");;
if(menu.style.display=="none"||menu.style.display==""){
        a.style.display="none";
        console.log("hello");
}
menu.addEventListener("click",function(){

    if(a.style.display=="none"||a.style.display=="")
       a.style.display="grid";
    else
        a.style.display="none";

});