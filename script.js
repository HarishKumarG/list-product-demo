//open popup overlay, popup box
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-book")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//close popup overlay, popup box
var closebutton = document.getElementById("cancel-popup")

closebutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//add product list, select list-index, product-name, product-description, add-button-product
var listindex = document.querySelector(".list-index")
var productname = document.getElementById("product-name")
var productdescription = document.getElementById("product-description")
var addproductbutton = document.getElementById("add-button-product")

addproductbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","product-list")
    div.innerHTML = `<h2>${productname.value}</h2>
    <p>${productdescription.value}</p>
    <button id="deletelist">Delete</button>`
    listindex.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select deletelist
var deletelist = document.getElementById("deletelist")
deletelist.addEventListener("click",function deleteitem(event){
    event.target.parentElement.remove()
})