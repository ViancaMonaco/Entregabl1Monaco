import { renderLogIn } from "./ui.js"
import { renderRegister } from "./ui.js"
import { logIn } from "./auth.js"
import { register } from "./auth.js"


function initLogIn(){
    const loginForm = document.getElementById("loginForm")
    const userInput = document.getElementById("user")
    const passInput = document.getElementById("pass")

    loginForm.onsubmit = (e) => {
        e.preventDefault()

        const usuario = userInput.value
        const password = passInput.value
        const errorMsg = document.getElementById("loginError")
        if (logIn(usuario, password)){
            errorMsg.style.display = "none"
            localStorage.setItem("loggedUser", usuario)
        }
        else{
            errorMsg.style.display = "block"
            return
        }
        
    }
}

function initRegister(){
    const registerForm = document.getElementById("registerForm")
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const userNameInput = document.getElementById("username")
    const passwordInput = document.getElementById("password")

    registerForm.onsubmit = (e) => {
        e.preventDefault()
        const name = nameInput.value
        const email = emailInput.value
        const userName = userNameInput.value
        const password = passwordInput.value

        const errorRegister = document.getElementById("registerError")

        if(register(name, email, userName, password)){
            errorRegister.style.display = "none"
            localStorage.setItem("loggedUser", userName)
        }
        else{
            errorRegister.style.display = "block"
        }
    }
}

function ingreso(){
    const loginBtn = document.getElementById("login")
    const registroBtn = document.getElementById("registro")

    loginBtn.onclick = () =>{
        renderLogIn() // UI: mostrar pantalla login
        initLogIn() // Eventos: enganchar submit del formulario
    }

    registroBtn.onclick = () => {
        renderRegister() // UI: mostrar en pantalla el formulario para que el usuario inicie sesion
        initRegister()
        console.log("Se registro correctamente")
    }
}

function mainMenu(){
    const pesoBtn = document.getElementById("option1")
    const imcBtn = document.getElementById("option2")
    const ejerBtn = document.getElementById("option3")
    const exitBtn = document.getElementById("option4")

    pesoBtn.onclick = () =>{
        renderWeight()
    }
    imcBtn.onclick = () =>{

    }
    ejerBtn.onclick = () => {

    }
    exitBtn.onclick = () =>{

    }
}

function main(){
    const loggedUser = localStorage.getItem("loggedUser")
    console.log("Estoy en el main")
    if (loggedUser) {
    // mostrar pantalla principal directamente
    } else {
    ingreso()
    }
}

main()