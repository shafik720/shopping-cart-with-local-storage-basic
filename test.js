


document.getElementById('btn1').addEventListener('click',promts);

function promts(){
    let x = prompt('Input a number');
    if(x==null || x==''){
        alert('Your typed nothing');
        return promts();
    }else if(isNaN(x)){
        alert('Input Only Number'); 
        return promts();
    }else if(x<0){
        alert('Minus value is not accepted');
        return promts();
    }else{
        let parsedValue = parseInt(x);
        alert(parsedValue+200);
    }
}

let showLocation = () => {
    let x = confirm('Do you want to see your location ?');
    if(x){
        alert(location.href);
    }
}