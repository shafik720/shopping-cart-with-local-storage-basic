
const car = {
    brand : 'Audi',
    color : ['Black', 'White', "Yellow", "Nardo Gray"],
    cc : 2500,
    showroom: {
        asia: {southAsia:'Dhaka', northAsia:'Korea', midAsia:'Dubai'},
        africa: 'Johanesburg',
        europe:'Every Where'
    },
    year: 2015
}
let x = Object.keys(car);
let y = Object.values(car);
console.log(y);