
const btn1=()=>{
  location.href="../Login/login.html"
}

  async function getdata(index_data){
    try{

      const url= ` https://fakestoreapi.com/products/${index_data}`
      const id=`img-${index_data}`
      const fetchdata=await fetch(url);
      const jsdata=await fetchdata.json();
      

      const imgdata=jsdata.image;
      const ID=document.getElementById(id);
      const img=document.createElement('img');
      img.src=imgdata;
      ID.appendChild(img);

      
      
      const title=`title-${index_data}`
      const category=`category-${index_data}`
      const price=`price-${index_data}`
      const rating=`rating-${index_data}`
      
      document.getElementById(title).innerText=jsdata.title
      document.getElementById(category).innerText=jsdata.category
      document.getElementById(price).innerText="$"+jsdata.price
      document.getElementById(rating).innerText="rating:" + jsdata.rating.rate;

    }catch(error){
      console.log( `The Error is: ${error}`)
    }
    
    
}

getdata(15);
getdata(16);
getdata(17);
getdata(18);
getdata(19);
getdata(20);



//Making function
function setItem(jsdata){
  cartItems={
      [jsdata.tag]:jsdata
  }   
 
  if(localStorage.getItem('productInCart')==null){
      localStorage.setItem('productInCart','[]');
  }

  var old_data=JSON.parse(localStorage.getItem('productInCart'));
  old_data.push(cartItems);

  localStorage.setItem("productInCart",JSON.stringify(old_data));
  
  location.reload();
}