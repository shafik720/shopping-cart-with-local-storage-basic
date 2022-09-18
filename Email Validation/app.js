

const showEmail = () => {
    let inputValue = document.getElementById('emailField');

    let validation = /\S+@\S+\.\S+/;
    if(inputValue.value.match(validation)){
        showMsg('true');
    }else if(!(inputValue.value)) {
        showMsg('empty');
    }else{
        showMsg('false');
    }

    
    inputValue.value = '';
}

let showMsg = (isTrue) => {
    let msgId = document.getElementById('showMsg');
    if(isTrue.toLowerCase()==='true'){
        msgId.innerText = 'Email is Valid';
        msgId.style.color = '#009CBD';
    }else if(isTrue.toLowerCase()==='false'){
        msgId.innerText = 'Wrong Email';
        msgId.style.color = 'red';
    }else if(isTrue.toLowerCase()==='empty'){
        msgId.innerText = 'Field empty. Write Your email !';
        msgId.style.color = 'red';
    }
}