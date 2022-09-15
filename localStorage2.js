
document.getElementById('addBtn').addEventListener('click', function(){
    let inputValue = document.getElementById('shoppingInput');
    let inputValues = inputValue.value;

    addCart(inputValues);

    inputValue.value = '';
})

const getCart = () => {
    let cart  = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {}
    }
    return cartObj;
}

const addCart = (names) => {
    let dummy = getCart();
    dummy[names] = 1;
    console.log(dummy);
    let stringifiedCart = JSON.stringify(dummy);
    localStorage.setItem('cart', stringifiedCart);
    
}