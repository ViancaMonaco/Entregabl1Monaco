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

loginbtn.onclick = () =>{
    renderLogIn()
}

registrobtn.onclick = () =>{
    renderRegistration
}