const showProducts = (array) =>{
    let card = ''
    for(let i = 0 ; i < array.length ; i++){
        card += `
    <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${array[i].title}</h5>
            <p class="card-text">${array[i].description}</p>
            <button  id = ${array[i].id} class="btn btn-primary add-card">Add To Cart</button>
            
    </div>
    </div>
        `
        document.getElementById("warpper").innerHTML = card
    }
}

showProducts(productOfObjects)

const buttons = document.getElementsByClassName("add-card")




for(let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click" , () =>{
        arr.push(buttons[i].id)
        localStorage.setItem("cart", JSON.stringify(arr));
        console.log(arr)
    })
}




