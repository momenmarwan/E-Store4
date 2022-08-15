const idInput1 = createFormGroup("id");
const titleInput1 = createFormGroup("title");
const descriptionInput1 = createFormGroup("description");
const PriceInput1 = createFormGroup("Price");
const imgInput1 = createFormGroup("image-url");
const countInput1 = createFormGroup("Count");
const categoryInput1 = createFormGroup("category");


const btn = createHTMLButton("submit" , "submit" , "submit" , "click" ,)


const root = document.getElementById("root-one")

let inputs = [idInput1 , titleInput1 , descriptionInput1 , PriceInput1 , imgInput1, countInput1 ,categoryInput1 , btn]

inputs.forEach((element) => {
    root.appendChild(element)
})


btn.addEventListener("click" , () => {
    let objectProduct = {
        id : idInput1.childNodes[1].value,
        title :  titleInput1.childNodes[1].value,
        description : descriptionInput1.childNodes[1].value,
        price : PriceInput1.childNodes[1].value, 
        img :  imgInput1.childNodes[1].value,
        count :  countInput1.childNodes[1].value,
        category :  categoryInput1.childNodes[1].value ,
    }

    productOfObjects.push(objectProduct)
    addToLocalStorage(productOfObjects) 
})

function addToLocalStorage (arrayOfProduct) {
      window.localStorage.setItem("product" , JSON.stringify(arrayOfProduct))
}



