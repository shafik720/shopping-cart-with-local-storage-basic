let dummy = [
    {brand: 'Iphone', price: 95000, country: "California", ram: 2},
    {brand: 'Blackberry', price: 65000, country: "England", ram: 3},
    {brand: 'Xiaomi', price: 2500, country: "China", ram: 6},
    {brand: 'Huwaei', price: 4500, country: "China", ram: 5},
    {brand: 'Samsung', price: 7500, country: "Korea", ram: 5},
    {brand: 'Realme', price: 2500, country: "India", ram: 8},
    {brand: 'Walton', price: 35000, country: "Bangladesh", ram: 16}

]

// let result = dummy.filter(element=> element.price<5000);
let x = dummy.map(element=> element.price );
console.log(x);

dummy.forEach(product=> console.log(product.price) );