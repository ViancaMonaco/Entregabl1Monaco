export function renderLogIn(){
    //lamo a welcom para ocultar esta pantalla
    document.getElementById("welcome").style.display = "none"
    //Esto significa deja de mostrar la pantalla anterior
    //luego:
    document.getElementById("loginSection").style.display = "block"
    //Esto dice q muestre la nueva seccion de formulario logIn
}

export function renderRegister(){
    //llamo al welcom para ocultar esa pantalla
    document.getElementById("welcome").style.display = "none"
    //Ahora muestro la seccion para llenar el formulario para registarme
    document.getElementById("registerSection").style.display = "block"
}

export function renderWeight(){
    document.getElementById("menuSection").style.display = "none"
    document.getElementById("weightSection").style.display = "block"
}