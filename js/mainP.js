import { renderIMC, renderIMCResult, renderLogIn } from "./ui.js"
import { renderRegister } from "./ui.js"
import { addWeight, logIn } from "./auth.js"
import { register } from "./auth.js"
import {renderMainMenu} from "./ui.js"
import {renderIMC} from "./ui.js"
import { calculateIMC } from "./auth.js"


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
            renderMainMenu()
            initMainMenu()
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

function initWeight(){
  const weightForm = document.getElementById("weightForm")
  const weightInput = document.getElementById("weight")

  weightForm.onsubmit = (e) => {
    e.preventDefault()
    const weight = parseFloat(weightInput.value)
    const loggedUser = localStorage.getItem("loggedUser")
    addWeight(loggedUser, weight)
  }
}

function initIMC(){
    const imcForm = document.getElementById("imcForm")
    const heightInput = document.getElementById("height")

    imcForm.onsubmit = (e) => {
        e.preventDefault()
        const height = parseFloat(heightInput.value)
        const loggedUser = localStorage.getItem("loggedUser")
        const imc = calculateIMC(height, loggedUser)
        renderIMCResult(imc)
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

function initMainMenu(){
    const pesoBtn = document.getElementById("option1")
    const imcBtn = document.getElementById("option2")
    const ejerBtn = document.getElementById("option3")
    const exitBtn = document.getElementById("option4")

    pesoBtn.onclick = () =>{
        renderWeight()
        initWeight()
    }
    imcBtn.onclick = () =>{
        renderIMC()
        initIMC()
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
        initMainMenu()
    } else {
    ingreso()
    initMainMenu()
    }
}

main()