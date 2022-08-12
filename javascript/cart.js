const showCard = () =>{
    cart = ''
    let totalPrice = 0;
for(let i = 0 ; i <arr.length ; i++){
    for(let j = 0 ; j < productss.length ; j++){
        if(arr[i] === productss[j].id){
            // console.log(productss[i].id)
            cart +=`
            <div class="product">
                           <img src="${productss[i].getImageUrl()}" alt="">
                           <div class="product-info">
                               <h3 class="product-name">${productss[i].getTitle()}</h3>
                               <h2 class="product-price">${productss[i].getPrice()}</h2>
                               <h2 class="product-offer">50%</h2>
                               <p class="product-quantity">Qnt : <input value = "${productss[i].getCount()}" name=""></p>
                               <p class="product-remove">
                                   <i class="fa fa-trash" aria-hidden="true"></i>
                                   <button class="remove btn btn-danger" onclick=" deleteCard(${i})">Remove</button>
                               </p>
                           </div>
                       </div>
            
            `    
            totalPrice += +productss[i].getPrice()
            const totalPriceElement =  document.getElementById("total-price")
            totalPriceElement.innerHTML = totalPrice
            document.getElementById("number-items").innerHTML = arr.length

            document.getElementById("root").innerHTML = cart;
            
        }
    }
}

}
showCard()
console.log(arr)

function deleteCard(i){
    arr.splice(i,1)
    localStorage.setItem("cart" , JSON.stringify(arr))
    showCard()
}


