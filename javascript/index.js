// const showProducts = (array) =>{
//     for(let i = 0 ; i < array.length ; i++){
//         let obj = {
//             id : array[i].id,
//             title :  array[i].title,
//             description : array[i].description,
//             price : array[i].price, 
//             img :  array[i].img,
//             count :  array[i].count,
//             category :  array[i].category,
//         }
//         let card =  createHtmlCard(array[i].id , array[i].title , JSON.stringify(obj)) ;
//         document.getElementById("warpper").appendChild(card)
        
    
//     }
// }

// showProducts(productOfObjects)

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
