function initRegister(){
    const registerForm = document.getElementById("registerForm")
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const usernameInput = document.getElementById("username")
    const passwordInput = document.getElementById("password")

    registerForm.onsubmit = (e) =>{
        e.preventDefault()
        const name = nameInput.value
        const email = emailInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        if(register(name, email, username, password)){
            console.log("entre al if")
            localStorage.setItem("loggedUser", username)
            hideSection("registerError")
        }
        else{
            showSection("registerError")
        }
    }
}

function income(){
    const registerBtn = document.getElementById("registerBtn")
    const loginBtn = document.getElementById("loginBtn")

    registerBtn.onclick = () =>{
        hideSection("homeSection")
        showSection("registerSection")
        initRegister()
    }

    loginBtn.onclick = () =>{
        hideSection("homeSection")
        showSection("loginSection")
    }
}

income()