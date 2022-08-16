const showCard = () =>{
    cart = ''
    let totalPrice = 0;
for(let i = 0 ; i <arr.length ; i++){
    cart +=`
    <div class="product">
                   <img src="${arr[i].id}" alt="">
                   <div class="product-info">
                       <h3 class="product-name">${arr[i].title}</h3>
                       <h2 class="product-price">${arr[i].description}</h2>
                       <h2 class="product-offer">50%</h2>
                       <p class="product-quantity">Qnt : <input value = "${arr[i].count}" name=""></p>
                       <p class="product-remove">
                           <i class="fa fa-trash" aria-hidden="true"></i>
                           <button class="remove btn btn-danger" onclick=" deleteCard(${i})">Remove</button>
                       </p>
                   </div>
               </div>
    
    `    
    totalPrice += +arr[i].price
    const totalPriceElement =  document.getElementById("total-price")
    totalPriceElement.innerHTML = totalPrice
    document.getElementById("number-items").innerHTML = arr.length

    document.getElementById("root").innerHTML = cart;
}

}
showCard()

function deleteCard(i){
    arr.splice(i,1)
    localStorage.setItem("cart" , JSON.stringify(arr))
    showCard()
}


