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


const createFormGroup  = (labelText) =>{
   const div = createHTMLElement("div" , "form-group") ;
   const label = createHTMLLabel(labelText)
   const input = createHTMLInput("form-control" , labelText , "text") ;
   div.appendChild(label);
   div.appendChild(input)
   return div
}