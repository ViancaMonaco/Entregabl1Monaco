const usuarios = []
const contraseñas = []

const ejerciciosTrenSuperiorCasa = [
  "Flexiones de brazos",
  "Flexiones inclinadas",
  "Flexiones declinadas",
  "Flexiones diamante",
  "Flexiones abiertas",
  "Fondos en silla",
  "Plancha alta",
  "Plancha con toque de hombros",
  "Flexiones pica",
  "Flexiones pica asistidas a la pared",
  "Flexiones arqueras",
  "Isométrico de flexión",
  "Rotaciones de hombros",
  "Círculos de brazos",
  "Plancha lateral"
]

const ejerciciosTrenInferiorCasa = [
  "Sentadillas",
  "Sentadillas sumo",
  "Sentadillas con pausa",
  "Zancadas hacia adelante",
  "Zancadas hacia atrás",
  "Zancadas laterales",
  "Puente de glúteos",
  "Puente de glúteos a una pierna",
  "Elevaciones de talones",
  "Sentadilla isométrica en pared",
  "Step-ups en escalón",
  "Desplantes alternados",
  "Buenos días sin peso",
  "Patadas de glúteo",
  "Abducciones de cadera"
]

const ejerciciosCoreCasa = [
  "Plancha frontal",
  "Plancha lateral",
  "Crunch abdominal",
  "Crunch invertido",
  "Abdominales bicicleta",
  "Elevaciones de piernas",
  "Elevaciones de piernas alternadas",
  "Mountain climbers",
  "Dead bug",
  "Hollow body hold",
  "Russian twist sin peso",
  "Toques de talón",
  "Abdominales en V",
  "Planchas con rodillas al pecho",
  "Escaladores cruzados"
]

const ejerciciosCardioCasa = [
  "Jumping jacks",
  "Rodillas al pecho",
  "Burpees",
  "Saltos en el lugar",
  "Mountain climbers",
  "Skipping alto",
  "Skipping bajo",
  "Saltos laterales",
  "High knees",
  "Jump squats",
  "Skaters",
  "Escaladores cruzados",
  "Saltos tijera",
  "Shadow boxing",
  "Carrera en el lugar"
]


function getUserIndex(user){
    return usuarios.indexOf(user)
}

function userExist(user){
    return usuarios.includes(user)
}

function getPasswordUser(user){
    index_user = getUserIndex(user)
    return contraseñas[index_user]
}

function cambioContraseña(user){
    newPassword = prompt("Porfavor Ingrese su nueva contraseña")
    contraseñas[getUserIndex(user)] = newPassword
    alert("Su contraseña ha sido cambidad con exito")
    return newPassword
}

function pedirUsuario(){
    let user = prompt("Por favor ingrese su usuario")

    while(!userExist(user)){
        user = prompt("Error de usuario. Intente nuevamente")
    }

    return user
}

function pedirContraseña(user){
    let contra = prompt("Ingrese su contraseña")

    while(contra !== getPasswordUser(user)){
        let cambiar = parseInt(prompt("Contraseña incorrecta.\n1. Cambiar contraseña\n2. Reintentar"))

        while(cambiar !== 1 && cambiar !== 2){
            cambiar = parseInt(prompt("Opción inválida.\n1. Cambiar contraseña\n2. Reintentar"))
        }

        if(cambiar === 1){
            contra = cambioContraseña(user)
        } else {
            contra = prompt("Ingrese su contraseña")
        }
    }

    return contra
}


function iniciarSesion(){

    if (usuarios.length === 0) {
        alert("Todavía no hay usuarios registrados. Primero creá uno.")
        return false
    }

    const user = pedirUsuario()
    const contra = pedirContraseña(user)

    alert("Inicio de sesión exitoso")
    return true
}


function registrarse(){
    newUser = prompt("porfavor ingrese su nombre de usuario: ")
        while(userExist(newUser)){
            newUser = prompt("Ese usuario ya existe pruebe otro nombre")
        }
    usuarios.push(newUser)

    password = prompt("ingrese su contraseña")
    contraseñas.push(password)
}

function seleccionEjercicio(ejercicios){
    const ejerciciosRealizar = []
    alert("A continuacion se le mostraran, una serie de ejercicios. Usted debe elegir lo que quiera hacer")
    for (const ejercicio of ejercicios){
        let eleccion = prompt( ejercicio + "Desea agregar este ejercicio a su rutina de hoy? Si/No").toLowerCase()
        while(eleccion!= "si" && eleccion!= "no"){
            eleccion = prompt("Ingreso invalido. Desea agregar el ejercicio " + ejercicio + " a su rutina. Si/No").toLowerCase()
        }
        if (eleccion=="si"){
            ejerciciosRealizar.push(ejercicio)
        }
    }
    return ejerciciosRealizar
}

function showEjercicios(ejercicios){
    alert("A continuacion se le mostraran los ejercicios que debe realizar")
    for (const ejercicio of ejercicios){
        alert(ejercicio)
    }
}

function realizarEjercicio(strEjer, tipoEjer){
    alert("Usted a elegido: " + strEjer)
    const ejerciciosSeleccionados = seleccionEjercicio(tipoEjer)
    showEjercicios(ejerciciosSeleccionados)
}

function ejercitarse(){
    let eleccion = parseInt(prompt("Seleccione: 1.Para trabajar tren superior 2. Para trabajr tren inferior 3.Para trabajar core(abs) 4.Para cardio 5.Salir"))
    while(eleccion!=5){
        switch(eleccion){
            case 1:
                realizarEjercicio("Tren Superior", ejerciciosTrenSuperiorCasa)
                eleccion = parseInt(prompt("Seleccione: 1.Para trabajar tren superior 2. Para trabajr tren inferior 3.Para trabajar core(abs) 4.Para cardio 5.Salir"))
                break
            case 2: 
                realizarEjercicio("Tren inferior", ejerciciosTrenInferiorCasa)
                eleccion = parseInt(prompt("Seleccione: 1.Para trabajar tren superior 2. Para trabajr tren inferior 3.Para trabajar core(abs) 4.Para cardio 5.Salir"))
                break
            case 3:
                realizarEjercicio("Core(abs)", ejerciciosCoreCasa)
                eleccion = parseInt(prompt("Seleccione: 1.Para trabajar tren superior 2. Para trabajr tren inferior 3.Para trabajar core(abs) 4.Para cardio 5.Salir"))
                break
            case 4:
                realizarEjercicio("Cardio", ejerciciosCardioCasa)
                eleccion = parseInt(prompt("Seleccione: 1.Para trabajar tren superior 2. Para trabajr tren inferior 3.Para trabajar core(abs) 4.Para cardio 5.Salir"))
                break
            default:
                alert("Error de ingreso, porfavor volver a intentar")

        }
    }
}


function IMC() {
    const peso = parseFloat(prompt("Ingrese su peso en kg"))
    const altura = parseFloat(prompt("Ingrese su altura en metros"))

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert("Datos inválidos")
        return
    }

    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        alert("Usted tiene bajo peso. IMC: " + imc.toFixed(2))
    }
    else if (imc < 25) {
        alert("Usted posee un peso saludable. IMC: " + imc.toFixed(2))
    }
    else {
        alert("Usted posee sobrepeso. IMC: " + imc.toFixed(2))
    }

}

function pesoActual(){
    const peso = parseFloat(prompt("Ingrese su peso en kg"))

    if(isNaN(peso) || peso <= 0) {
        alert("Datos inválidos")
        return
    }

    alert("Su peso actual es: " + peso)
    return
}

function menu(){
    let seleccion = parseInt(prompt("Menu de opciones: 1. Ingresar peso. 2.Calcular IMC 3.Ejercicios diarios. 4.Cerrar Sesion"))
    
    while(seleccion!==4){
        switch(seleccion){
            case 1:
                pesoActual() //La idea es que a futuro el usuario pueda tener un registro de su peso a lo largo del tiempo
                seleccion = parseInt(prompt("Menu de opciones: 1. Ingresar peso. 2.Calcular IMC 3.Ejercicios diarios. 4.Cerrar Sesion"))
                break
            case 2: 
                IMC()
                seleccion = parseInt(prompt("Menu de opciones: 1. Ingresar peso. 2.Calcular IMC 3.Ejercicios diarios. 4.Cerrar Sesion"))
                break
            case 3:
                ejercitarse()
                seleccion = parseInt(prompt("Menu de opciones: 1. Ingresar peso. 2.Calcular IMC 3.Ejercicios diarios. 4.Cerrar Sesion"))
                break
            default:
                alert("Error de ingreso, reintentar")
                seleccion = parseInt(prompt("Menu de opciones: 1. Ingresar peso. 2.Calcular IMC 3.Ejercicios diarios. 4.Cerrar Sesion"))
        }
    }
}

function nutriCom(){
    alert("Bienvenido a Nutri-Monaco")
    let ingreso;

    do {
        ingreso = parseInt(prompt(
            "Ingrese:\n1. Para iniciar sesión\n2. Para crear un usuario\n3. Salir"
        ));

        if (ingreso === 1) {
            if(!iniciarSesion()){
                alert("Por favor, cree un usuario.")
                registrarse()
            }
            menu()
        } 
        else if (ingreso === 2) {
            registrarse();
            menu()
        } 
        else if (ingreso !== 3) {
            alert("Error, intente de nuevo");
        }
        

    } while (ingreso !== 3);
    
}

nutriCom()