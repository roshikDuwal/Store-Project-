
//Add Cart
let addcartbtn=document.querySelectorAll('.add-cart');

for (let i=0;i<addcartbtn.length;i++){
    addcartbtn[i].addEventListener('click',function(){
        getdata(i+6); 
        
    })
}

async function getdata(index_data) {
    try {
        const url = ` https://fakestoreapi.com/products/${index_data}`;
        const fetchdata = await fetch(url);
        const jsdata = await fetchdata.json();
        setItem(jsdata)   
    } catch (error) {
        console.log(`The Error is: ${error}`);
    } 
}


//Making function
function setItem(jsdata){
    cartItems={
        [jsdata.tag]:jsdata
    }   
   
    if(localStorage.getItem('accesoriesproductcart')==null){
        localStorage.setItem('accesoriesproductcart','[]');
    }
  
    var old_data=JSON.parse(localStorage.getItem('accesoriesproductcart'));
    old_data.push(cartItems);
  
    localStorage.setItem("accesoriesproductcart",JSON.stringify(old_data));
    
    location.reload();
  }
  

//Displaying items
function DisplayItems(){
    let displayitem=localStorage.getItem("accesoriesproductcart");
    displayitem=JSON.parse(displayitem);

    let productContainer=document.querySelector(".product-container")

    if(displayitem && productContainer){
        productContainer.innerHTML=""
        Object.values(displayitem).map(item=>{
            
            productContainer.innerHTML +=`
            <div class="product">

                <img src="${item.undefined.image}">
                <span class="clothes_title" >${item.undefined.title}</span>

                <span class="price">${item.undefined.price}</span>

                <span><button class="Del_btn" onclick="remove_btn()"><i class='bx bxs-trash-alt'></i></button></span>
            
                <span><button class="addcart_btn">Buy now</button></span>

             </div>
            ` ;

         
        })   
       
    }
   
}

DisplayItems();
 

// function remove_btn(){
// let delbtn=document.querySelectorAll('.Del_btn');
//     for (let i=1;i<delbtn.length;i++){
//         delbtn[i].addEventListener('click',function(){
//             let displayitem=localStorage.getItem("productInCart");
//     })


//     // var elem=document.querySelector(".product");
//     // elem.remove();
//     } 
// }