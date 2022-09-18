let dummy = [
    {brand: 'Iphone', price: 95000, country: "California", ram: 2},
    {brand: 'Blackberry', price: 65000, country: "England", ram: 3},
    {brand: 'Xiaomi', price: 25000, country: "China", ram: 6},
    {brand: 'Huwaei', price: 45000, country: "China", ram: 5},    
]
let snow = {brand: 'Walton', price: 35000, country: "Bangladesh", ram: 16};

let x = [...dummy, snow];
console.log(x);