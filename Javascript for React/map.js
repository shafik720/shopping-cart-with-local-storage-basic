let dummy = [
    {brand: 'Iphone', price: 95000, country: "California", ram: 2},
    {brand: 'Blackberry', price: 65000, country: "England", ram: 3},
    {brand: 'Xiaomi', price: 25000, country: "China", ram: 6},
    {brand: 'Huwaei', price: 45000, country: "China", ram: 5},
    {brand: 'Samsung', price: 75000, country: "Korea", ram: 5},
    {brand: 'Realme', price: 25000, country: "India", ram: 8},
    {brand: 'Walton', price: 35000, country: "Bangladesh", ram: 16}

]
let x = dummy.map(element=>element.brand);
console.log(x);