
document.getElementById('addBtn').addEventListener('click',function(){
    let inputField = document.getElementById('shoppingInput');
    let names = inputField.value;
    if(!names){
        return;
    }

    // show value in html file
    showHtml(names);

    // store value in local storage
    storeCart(names);
    inputField.value = '';
})

let showHtml = (names) => {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    li.innerText = names;
    ul.appendChild(li);
}

let getCart = () => {
    let cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

let storeCart = (names) => {
    let dummy = getCart();
    if(dummy[names]){
        dummy[names] = dummy[names] + 1;        
    }else{
        dummy[names] = 1 ;
    }
    let stringifiedCart = JSON.stringify(dummy);
    localStorage.setItem('cart', stringifiedCart);
}

// showing in html body retrieving from local storage
let showHtmlFromLocal = () => {
    let dummy = getCart();
    for(let element in dummy){
        showHtml(element);
    }
}

showHtmlFromLocal();

// deleting from local storage and html body after clicking place order button
document.getElementById('order').addEventListener('click',function(){
    document.getElementById('ul').textContent = '';
    localStorage.clear('cart');
})