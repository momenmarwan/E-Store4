 let products = product.then((response) =>{
    response.map((item) => {
        let card =  createHtmlCard( item.id, item.title , item.image) ;
        document.getElementById("warpper").appendChild(card)

    })
 })

const addToCardButtons =  createHtmlCard.ch ;
console.log(addToCardButtons)

