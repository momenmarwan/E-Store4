const buttons = document.getElementsByClassName("add-card") ; 

// buttons.array.forEach(element => {
//     element.addEventListener("click" , () => {
//         console.log("hell")
//     })
    
// });


for(let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click" , () =>{
        console.log("Hello")
        // arr.push(buttons[i].title)
        // localStorage.setItem("new-cart", JSON.stringify(arr));
    })
}

 let products = product.then((response) =>{
    response.map((item) => {
        let card =  createHtmlCard( item.id, item.title , item.image) ;
        document.getElementById("warpper").appendChild(card)

    })
 })
