let a = '';  // 1 stroka
let b = '';  //2 stroka
let sign = '';
let finish = false;

const  digit = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = [ '-', '+', '*', '/'];


// window
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
        a+=key;
       
        out.textContent = a;
    }
    else if (a!=='' && b!=='' && finish) {
        
    }
    else {
        b += key;
        out.textContent = b;
    }
    console.log(a, b, sign);
    return
}
    if (action.includes(key)) {
        sign =key;
        out.textContent = sign;
        console.log(sign);
        return;
        
    }


    if (key === '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
};