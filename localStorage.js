
let ul = document.getElementById('ul');

document.getElementById('addBtn').addEventListener('click', function(){
    let inputValue = document.getElementById('shoppingInput');
    let inputValues = inputValue.value;
    addOrder(inputValues);

    setCart(inputValues);
    inputValue.value = '';
})

const addOrder = (element) => {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

const getCart = () =>{
    let cart = localStorage.getItem('cart');
    let cartObject;
    if (cart){
        cartObject = JSON.parse(cart);
    }else{
        cartObject = {};
    }
    return cartObject;
}

const setCart = (elements) => {
    let cart = getCart();
    cart[elements] = 1;
    
    let stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart',stringifiedCart);
}