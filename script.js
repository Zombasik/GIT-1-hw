const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




const nameID = document.getElementById('nameID')
const emailID = document.getElementById('emailID')
const passwordID = document.getElementById('passwordID')
const passwordID2 = document.getElementById('passwordID2')

const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')

let data = []

function signUp() {


    if(nameID.value === "" || emailID.value === "" || passwordID.value === "" || passwordID2.value === "") {
        document.getElementById('mainSpan').innerHTML = `<span id="mainSpan">Вы не дописали</span>`
    } else if(nameID.value > 0 || emailID.value > 0 || passwordID.value.length >= 8 && passwordID2.value === passwordID.value) {
        data.push({
            name: nameID.value,
            email: emailID.value,
            password: passwordID.value
        })
    } else if(passwordID.value.length <= 8 && passwordID2.value === passwordID.value) {
        document.getElementById('passwordSpan').innerHTML = `<span id="mainSpan">Пароль меньше 8 символов</span>`
    } else {
        document.getElementById('mainSpan').innerHTML = `<span id="mainSpan">Ошибка</span>`
    }


    localStorage.setItem('user', JSON.stringify(data))
}

function submit() {
    const userData = JSON.parse((localStorage.getItem('user'))) 
    if(userData.some(item => item.email === userEmail.value && item.password === userPassword.value)) {
        window.open('/main.html', '_self')
    } else {
        alert('Пользователь не найден')
    }

}



let btnPass = document.querySelector('.js-btn-password'),
    inputPass = document.querySelector('.js-password-input')

btnPass.onclick = function() {
    if(inputPass.getAttribute('type') === 'password') {
       inputPass.setAttribute(('type'), 'text')
    } else {
        inputPass.setAttribute(('type'), 'password')
    }
}