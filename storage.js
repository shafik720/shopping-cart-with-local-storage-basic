
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
        showProductHtml();        
        store(product.value);
        product.value = '';
        price.value = '';
    }
}
const showProductHtml = () => {
    document.getElementById('table-area').style.display = 'block';
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${product.value}</td>
    <td>${price.value}</td>
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
console.log(getCart());
let store = (firstValue) => {
    let dummy = getCart();
    
    if(dummy[firstValue]){
        dummy[firstValue] = dummy[firstValue] + 1;
    }else{
        dummy[firstValue] = 1;
    }
    let stringifiedValue = JSON.stringify(dummy);
    localStorage.setItem('cart', stringifiedValue);
}