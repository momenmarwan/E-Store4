const createHTMLElement = (element , className , id) =>{
    let el = document.createElement(element);
    el.className = className;
    el.id = id ;
    return el ; 
}
const createHTMLInput = ( className , id , type) => {
    const input = createHTMLElement("input" , className , id) ;
    input.type = type
    return input ;
}
const createHTMLButton = (id , value , type , event , cb) => {
    let btn = createHTMLElement("button" , "btn btn-primary" , id) ;
    btn.value = value ;
    btn.type = type ;
    btn.addEventListener(event , cb) ;
    return btn

}
const createHTMLLabel = (labelText) => {
    const label = createHTMLElement("label") ;
    label.innerHTML = labelText ;
    return label
}
const appendChildFromMe = (main , ...ele) =>{
    ele.forEach((el) => main.appendChild(el))
    return main
 }

const createFormGroup  = (labelText) =>{
   const div = createHTMLElement("div" , "form-group") ;
   const label = createHTMLLabel(labelText)
   const input = createHTMLInput("form-control" , labelText , "text") ;
   appendChildFromMe(div , label , input)
   return div
}


const createHtmlCard = (id , title ,imageUrl, obj) =>{
    const div = createHTMLElement("div" , "card") ;
    div.setAttribute("style" , "width: 18rem;")
    const image = createHTMLElement("img" , "card-img-top");
    image.setAttribute("src" , imageUrl)
    const cardBody = createHTMLElement("div" , "card-body") ;
    const h5 = createHTMLElement("h5" , "card-title") ;
    h5.textContent = id
    const p = createHTMLElement("p" , "card-text") ;
    p.textContent = title
    const btn = createHTMLElement("button" , "btn btn-primary add-card" , id)
    btn.textContent = "Add To Card"
    btn.setAttribute("title" , obj)
    appendChildFromMe( cardBody , h5 , p , btn) ;
    appendChildFromMe(div ,image , cardBody)
    return div
}