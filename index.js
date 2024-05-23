
let buttonDown = document.querySelector('.up')
let buttonUp = document.querySelector('.down')
let restart = document.querySelector('.restart')
let random = document.querySelector('.random')
let number = document.querySelector('.number')




buttonDown.onclick = () => {
        if (number.innerHTML != -10) {
                number.innerHTML -= 1 
        } 
}

buttonUp.onclick = () => {
        if (number.innerHTML != 10) {
                
        } 
}

restart.onclick = () => {
        number.innerText = 0
}

random.onclick = () => {
        number.innerText = Math.floor(Math.random() * 100)
}


