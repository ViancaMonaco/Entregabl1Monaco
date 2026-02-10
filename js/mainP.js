import { renderLogIn } from "./ui.js"
import { logIn } from "./auth.js"


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

function ingreso(){
    const loginBtn = document.getElementById("login")
    const registroBtn = document.getElementById("registro")

    loginBtn.onclick = () =>{
        renderLogIn() // UI: mostrar pantalla login
        initLogIn() // Eventos: enganchar submit del formulario
    }

    registroBtn.onclick = () => {
        //llamo a ui.js
    }
}

function main(){
    const loggedUser = localStorage.getItem("loggedUser")

    if (loggedUser) {
    // mostrar pantalla principal directamente
    } else {
    ingreso()
    }
}

main()
