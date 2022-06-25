


var carticon=document.querySelector('h2');
var button=document.getElementsByTagName('button');
//number of add items 
for(but of button){
    but.addEventListener('click',()=>{
        var add=Number(carticon.getAttribute('data-count')|| 0);
        carticon.setAttribute('data-count',add+1);
        carticon.classList.add('zero');
      })  
}






let select=document.querySelector('.cart')
let closeCart=document.querySelector('#close-cart')
//Open Cart
carticon.onclick=()=>{1
    select.classList.add("active");
}
//Close Cart
closeCart.onclick=()=>{
    select.classList.remove("active");
}





