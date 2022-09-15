
let counter = 30 ; 
let x = setInterval(()=>{    
    console.log(counter);
    counter--;
    if(counter<=0){
        clearInterval(x);
    }
},500)
