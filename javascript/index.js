const showProducts = (array) =>{
    let card = ''
    for(let i = 0 ; i < array.length ; i++){
        let obj = {
            title : array[i].getTitle() ,
            description : array[i].getDescription(),
            price : array[i].getPrice()
        }
        card += `
    <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${array[i].getTitle()}</h5>
            <p class="card-text">${array[i].getDescription()}</p>
            <button  id = ${array[i].getId()} title= ${JSON.stringify(obj)} class="btn btn-primary add-card">Add To Cart</button>
            
    </div>
    </div>
        `
        document.getElementById("warpper").innerHTML = card
    }
}

showProducts(productss)

const buttons = document.getElementsByClassName("add-card")




for(let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click" , () =>{
        arr.push(buttons[i].title)
        localStorage.setItem("new-cart", JSON.stringify(arr));
    })
}




