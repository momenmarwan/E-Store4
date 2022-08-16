// class Products {
//     constructor(id , title , price,description , category , imageUrl , count){
//         this.id = id ;
//         this.title = title ;
//         this.price = price ;
//         this.description = description ;
//         this.category = category ;
//         this.imageUrl = imageUrl ;
//         this.count = count ;
//     }
//     getId(){
//         return this.id ;
//     }
//     getTitle(){
//         return this.title
//     }
//     getPrice(){
//         return this.price ; 
//     }
//     getDescription(){
//         return this.description ;
//     }
//     getCategory(){
//         return this.description ;
//     }
//     getImageUrl(){
//         return this.imageUrl ;
//     }
//     getCategory(){
//         return this.category
//     }
//     getCount(){
//         return this.count
//     }
// }

// let product1 = new Products("7725" , "ipone" , "3000" , "iphone mobile" , "electirnk" , "/assets/images/ipone.jpg" , 20)
// let product2 = new Products("7726" , "sumsung" , "1200" , "sumsung mobile" , "electirnk" , "/assets/images/sumsung.jpg" , 21)
// let product3 = new Products("7727" , "LapTap" , "3500" , "Asus Labtop " , "electirnk" , "/assets/images/labtop.jpg" , 15)
// let product4 = new Products("7728" , "macpok" , "5000" , "Apple Labtop" , "electirnk" , "/assets/images/apple.jpg" , 11)
// let product5 = new Products("7729" , "desk" , "500" , "desk for work" , "electirnk" , "/assets/images/desk.jpg" , 24)
// let product6 = new Products("7730" , "carmara" , "2600" , "canon carmara" , "electirnk" , "/assets/images/carmara.jpg" , 18)
// let product7 = new Products("7731" , "closthes" , "450" , "colsthe from nike" , "electirnk" , "/assets/images/clothes.jpg" , 26)
// let product8 = new Products("7732" , "shoes" , "120" , "shoes from nike" , "electirnk" , "/assets/images/shoes.jpg" , 30)
// let product9 = new Products("7733" , "phone" , "500" , "the kind of phone sumsung" , "electirnk" , "/assets/images/ipone.jpg" , 28)
// let product0 = new Products("7734" ,"phone"  , "500" , "the kind of phone sumsung" , "" , "/assets/images/ipone.jpg" , 60)


// let productss = [product1 , product2 , product3 , product4 , product5 , product6 , product7 , product8 , product9 , product0]

let arr =  [];

if(getProductFromLocalStorage("new-cart")){
    arr = getProductFromLocalStorage("new-cart")
}


let productOfObjects =  []

if(getProductFromLocalStorage("product")){
    productOfObjects = getProductFromLocalStorage("product");
}

function getProductFromLocalStorage(key){
    let products = window.localStorage.getItem(key) ;
    if(products){
        let arrayProduct = JSON.parse(products)   
        return arrayProduct ;
    }
}





