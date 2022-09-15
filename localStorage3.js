let showProduct = () => {
    let dummy = cartObj();
    for(let element in dummy){
        showProductHtml(element);
        console.log(element);
    }
}

document.getElementById('addBtn').addEventListener('click', function(){
    let inputField = document.getElementById('shoppingInput');
    let names = inputField.value;

    if(!names){
        return ;
    }
    addToCart(names);
    showProductHtml(names);
})

let showProductHtml = (elements) => {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    li.innerText = elements;
    ul.appendChild(li);
}

let cartObj = () => {
    let cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

let addToCart = (elements) => {
    let dummy = cartObj();
    if(dummy[elements]){
        dummy[elements] = dummy[elements] + 1 ;
    }else{
        dummy[elements] = 1;
    }
    
    let stringiFied = JSON.stringify(dummy);
    localStorage.setItem('cart',stringiFied);
}

showProduct();