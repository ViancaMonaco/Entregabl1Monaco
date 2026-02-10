// lo primero que deberia hacer es crear una clase usuario

class User{
    constructor(name, mail, password){
        this.name = name
        this.mail = mail
        this.password = password
    }
}
const users = []


function renderRegistration(){
    none
}

const loginbtn = document.getElementById("logIn")
const registrobtn = document.getElementById("registro")

function renderLogIn(){
    //lamo a welcom para ocultar esta pantalla
    document.getElementById("welcome").style.display = "none"
    //Esto significa deja de mostrar la pantalla anterior
    //luego:
    document.getElementById("loginSection").style.display = "block"
    //Esto dice q muestre la nueva seccion de formulario logIn
}

function iniciarSesion(user, pass){

    if (usuarios.length === 0) {
        return false
    }

    const user = pedirUsuario()
    const contra = pedirContraseña(user)

    alert("Inicio de sesión exitoso")
    return true
}

function initLogIN(){
    const loginForm = document.getElementById("loginForm")
    const userInput = document.getElementById("user")
    const passInput = document.getElementById("pass")

    loginForm.onsubmit = (e) => {
        e.preventDeFaul()
        const usuario = userInput.value
        const password = passInput.value
        iniciarSesion(usuario, password)
    }
}


loginbtn.onclick = () =>{
    renderLogIn()
}

registrobtn.onclick = () =>{
    renderRegistration
}