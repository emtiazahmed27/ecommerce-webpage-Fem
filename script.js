const cart=document.querySelector(".cart img"),
cartDrpdwn=document.querySelector(".cart-drpdwn"),
cartDrpdwnWrap=document.querySelector(".cart-drpdwn-wrapper"),
plus=document.querySelector(".plus"),
minus=document.querySelector(".minus"),
click_count=document.querySelector(".click-count"),
clickRes=document.querySelector(".click-res"),
finalPrice=document.querySelector(".final-sneeker-price"),
addCart=document.querySelector(".add-cart-btn"),
del=document.querySelector(".drpdwn-img-2"),
cartCount=document.querySelector(".cart-count"),
sidebar=document.querySelector(".sidebar-container"),
crossBtn=document.querySelector(".cross-btn"),
ham=document.querySelector(".hamburger");


let click=0;
let sneekerPrice=125;
let finalRes=1;

cart.addEventListener("click",()=>{
    cartDrpdwn.classList.toggle("block");
    if(click==0||click<0){
        cartDrpdwnWrap.classList.add("none");
    }
    else {
        cartDrpdwnWrap.style.display="flex";
        cartDrpdwnWrap.classList.replace("none","block");
    };
})



plus.addEventListener("click",()=>{
    click+=1;
    click_count.innerText=click;
    finalRes=sneekerPrice*click;
})

minus.addEventListener("click",()=>{
    click-=1;
    if(click>=0){
        click_count.innerText=click;
        finalRes=sneekerPrice*click;
    }
    else{
        click=0;
    }
})

addCart.addEventListener("click",()=>{
    clickRes.innerText=click;
    finalPrice.innerText="$"+finalRes;
    cartCount.style.display="block";
    cartCount.innerText=click;
})

del.addEventListener("click",()=>{
    cartDrpdwnWrap.style.display="none";
    cartCount.style.display="none";
    click=0;
    click_count.innerText=click; 
})

ham.addEventListener("click",()=>{
    sidebar.classList.replace("none","block");
})

crossBtn.addEventListener("click",()=>{
    sidebar.classList.replace("block","none");
})