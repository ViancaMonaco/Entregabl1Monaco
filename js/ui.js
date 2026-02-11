export function renderLogIn(){
    document.getElementById("welcome").style.display = "none"
    document.getElementById("loginSection").style.display = "block"
}

export function renderRegister(){
    document.getElementById("welcome").style.display = "none"
    document.getElementById("registerSection").style.display = "block"
}

export function renderMainMenu(){
    document.getElementById("loginSection").style.display = "none"
    document.getElementById("menuSection").style.display = "block"
}

export function renderWeight(){
    document.getElementById("menuSection").style.display = "none"
    document.getElementById("weightSection").style.display = "block"
}

export function renderIMC(){
    document.getElementById("menuSection").style.display="none"
    document.getElementById("imcSection").style.display="block"
}

export function renderIMCResult(imc){
    const resultDiv = document.getElementById("imcResult")

    if (imc==-1){
        resultDiv.innerHTML = `
        <p>No se pudo calcular el IMC. </p>
        `
        return
    }
    let label = ""

    if (imc < 18.5) label = "Bajo peso"
    else if (imc < 25) label = "Peso saludable"
    else if (imc < 30) label = "Sobrepeso"
    else label = "Obesidad"

    resultDiv.innerHTML = `
    <h3>IMC Result</h3>
    <p>Your IMC is: <strong>${imc.toFixed(2)}</strong></p>
    <p>Status: <strong>${label}</strong></p>
    `

}