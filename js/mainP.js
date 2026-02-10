import { renderLogIn } from "./ui.js"

function initLogIn(){
    const loginForm = document.getElementById("loginForm")
    const userInput = document.getElementById("user")
    const passInput = document.getElementById("pass")

    loginForm.onsubmit = (e) => {
        e.preventDefault()

        const usuario = userInput.value
        const password = passInput.value
        const errorMsg = document.getElementById("loginError")
        if (!logIn(usuario, password)){
            errorMsg.style.display = "block"
            return
        }
        errorMsg.style.display = "none"
    }
}

function main(){
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

main()