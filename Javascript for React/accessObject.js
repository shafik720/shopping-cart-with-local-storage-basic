
let car = {
    audi : 'France',
    color: 'Black',
    cc : [2500, 1400, 2590, 6500],
    catagory : 'A class'
};
console.log(car.color);
console.log(car['catagory']); 
let x = 'cc';
console.log(car[x]);
let {color} = car;
console.log(color);