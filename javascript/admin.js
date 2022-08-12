const createHTMLElement = (element , className , id) =>{
    let el = document.createElement(element);
    el.className = className;
    el.id = id ;
    // el.setAttribute("id" , id)
    return el ; 
}

const createHTMLInput = ( className , id , type) => {
    const input = createHTMLElement("input" , className , id) ;
    input.type = type
    return input ;
}

const createHTMLButton = (id , value , type , event , callBackFucntion) => {
    let btn = createHTMLElement("button" , "btn btn-primary" , id) ;
    btn.value = value ;
    btn.type = type ;
    btn.addEventListener(event , callBackFucntion) ;
    return btn

}

const creatFormGroup  = (labelText) =>{
   const div = createHTMLElement("div" , "form-group") ;
   const label = createHTMLElement("label") ;
   label.innerHTML = labelText ;
   const input = createHTMLInput("form-control" , labelText , "text") ;
   div.appendChild(label) ; 
   div.appendChild(input) ;
   return div
   
}



const idInput1 = creatFormGroup("ID");
const titleInput1 = creatFormGroup("title");
const DesctpationInput1 = creatFormGroup("Desctpation");
const PriceInput1 = creatFormGroup("Price");
const imgInput1 = creatFormGroup("Image URL");
const countInput1 = creatFormGroup("Count");
const catgoryInput1 = creatFormGroup("catgory");
const btn = createHTMLButton("submit" , "submit" , "submit" , "click")


const root = document.getElementById("root-one")


let inputs = [idInput1 , titleInput1 , DesctpationInput1 , PriceInput1 , imgInput1, countInput1 ,catgoryInput1 , btn]



inputs.forEach((element) => {
    root.appendChild(element)

})

// const submit = document.getElementById("submit")
const idInput = document.getElementById("ID")
const titleInput = document.getElementById("title")
const DesctpationInput = document.getElementById("Desctpation")
const PriceInput = document.getElementById("Price")
const imgInput = document.getElementById("Image URL")
const countInput = document.getElementById("count")
const catgoryInput = document.getElementById("catgory")



// const fildes = document.querySelectorAll(".form-group");
// console.log(fildes)





btn.addEventListener("click" , () => {
    let objectProduct = {
        ID : idInput.value,
        title :  titleInput.value,
        Desctpation : DesctpationInput.value,
        Price : PriceInput.value, 
        img :  imgInput.value,
        count :  idInput.value,
        catgory :  idInput.value ,
    }

    productOfObjects.push(objectProduct)
    localStorage.setItem("objects" , JSON.stringify(objectProduct))
    // console.log(objectProduct)
    
})

// function getInputValues() {
//     let objectProduct = {
//         ID : idInput.value ,
//         title : titleInput.value,
//         Desctpation : DesctpationInput.value,
//         Price : PriceInput.value ,
//         img : imgInput.value ,
//         count : countInput.value ,
//         catgory : catgoryInput.value ,
//     }

//     productOfObjects.push(objectProduct)
//     localStorage.setItem("objects" , JSON.stringify(objectProduct))
//     console.log(productOfObjects)
// }


