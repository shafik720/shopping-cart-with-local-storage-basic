
    let product = document.getElementById('product');
    let productValue = product.value;
    let price = document.getElementById('price');
    let priceValue = price.value;
    let table = document.getElementById('table');


document.getElementById('cartBtn').addEventListener('click', function(){
    validation();
})

let validation = () => {

    if(!product.value){
        alert('You have not added any product');
        return ;
    }else if(!price.value){
        alert('You must provide Price');
        return;
    }else if(price.value<0){
        alert('Minus value is not accepted');
        price.value = '';
        return;
    }else{
        showProductHtml(product.value, price.value);        
        store(product.value, price.value);
        product.value = '';
        price.value = '';
    }
}
const showProductHtml = (firstValue, secondValue) => {
    document.getElementById('table-area').style.display = 'block';
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${firstValue}</td>
    <td>${secondValue}</td>
    `;
    table.appendChild(tr);

}

// Working on local storage

const getCart = () => {
    let cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {} ; 
    }
    return cartObj;
}


let store = (firstValue, secondValue) => {
    let dummy = getCart();
    
    if(dummy[firstValue]){
        dummy[firstValue] = secondValue;
    }else{
        dummy[firstValue] = secondValue;
    }
    let stringifiedValue = JSON.stringify(dummy);
    localStorage.setItem('cart', stringifiedValue);
}

// show product from local storage

let showFromStorage = () => {
    let x = getCart();
    for(let element in x){
        showProductHtml(element, x[element]);
    }
}

showFromStorage();

// clearing data after clicking Place Order button
let orderDone = () =>{
    document.getElementById('table-area').textContent = '';    
    localStorage.removeItem('cart');
}