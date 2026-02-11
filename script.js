import { hideSection, showSection } from "./ui2.js"

function income(){
    const registerBtn = document.getElementById("registerBtn")
    const loginBtn = document.getElementById("loginBtn")

    registerBtn.onclick = () =>{
        hideSection("homeSection")
        showSection("registerSection")
    }

    loginBtn.onclick = () =>{}
}

income()