
// const car = 'toyota';

// if(car.toLowerCase()!=='bmw'){
//     console.log('I will not go');
// }else{
//     console.log('Yay lets go'); 
// }
// // doing it in shortcut with ternary operator.
// // let result = car.toLowerCase() !== 'bmw' ? 'I will not go' : 'Yay lets go';
// // console.log(result);

// const x = '560';
// let result = +x;
// console.log(result);

let isActive = false;
let showGreen = () => console.log('Show Green Light');
let showRed = () => console.log('Show Red light');

isActive ? showGreen() : showRed();