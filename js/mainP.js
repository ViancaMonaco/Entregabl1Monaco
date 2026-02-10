import { renderLogIn } from "./ui.js"

function initLogIN(){
    const loginForm = document.getElementById("loginForm")
    const userInput = document.getElementById("user")
    const passInput = document.getElementById("pass")

    loginForm.onsubmit = (e) => {
        e.preventDeFaul()
        const usuario = userInput.value
        const password = passInput.value
        LogIn(usuario, password)
    }
}
function main(){
    const loginBtn = document.getElementById("login")
    const registroBtn = document.getElementById("registro")

    loginBtn.onclick = () =>{
        renderLogIn() // UI: mostrar pantalla login
        initLogIN() // Eventos: enganchar submit del formulario
    }

    registroBtn.onclick = () => {
        //llamo a ui.js
    }
}

main()