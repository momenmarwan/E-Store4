let arr =  [];

if(getProductFromLocalStorage("new-cart")){
    arr = getProductFromLocalStorage("new-cart")
}
//First successful request i made in my life think you devStm
let  product  = fetch('https://fakestoreapi.com/products')
.then(res => res.json())




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





