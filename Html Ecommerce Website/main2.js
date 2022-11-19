//Cart
let carticon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

//Open Cart
carticon.onclick = () => {
    cart.classList.add("active"); 
};
//Close Cart
closecart.onclick = () => {
    cart.classList.remove("active"); 
}  
//Cart Working JS
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

//Making Function
function ready(){
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-delete");
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Ouantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    } 
    //Add to cart
    var addcart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addcart.length; i++){
        var button = addcart[i]
        button.addEventListener("click", addCartClicked);
       
    } 
    // Buy Button work
    document
    .getElementsByClassName("buy-btn")[0]
   // .addEventListener("click", buttonClicked);
} 

//Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Ouantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1; 
    }
    //updatetotal();
}    

// Add to cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElememtsByClassName("cart-product-title")[0].innerText;
    var price = shopProducts.getElememtsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElememtsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal(); 
}

//Update Total
function updatetotal(){
   // var cartContent = document.getElememtsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElememtsByClassName("cart-box");

    var total = 0;
    for (var i = 0; i < cartBoxes; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElememtsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElememtsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$","")); 
    var quantity = quantityElement.value;
    total= total + (price * quantity);
    //If Price Contain Cents Value
    total= Math.round(total *100) / 100;


    document.getElementsByClassName("total-price")[0].innerText = "$" + total;    

    }

}