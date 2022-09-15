let text = document.getElementById('text');

let counter = 10;
let x = setInterval(()=>{
    console.log(counter);
    text.innerText = counter;
    counter--;
    if(counter<0){
        text.style.color = 'red';
        text.innerText = 'Finished';
        clearInterval(x);
    }
},1000)