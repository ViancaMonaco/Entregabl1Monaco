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
            localStorage.setItem("loggedUser", email)
            hideSection("registerError")
            hideSection("registerSection")
            mainMenu()
        }
        else{
            showSection("registerError")
        }
    }
}

function initLogIn(){
    const loginForm = document.getElementById("loginForm")
    const emailInput = document.getElementById("emailLogin")
    const passInput = document.getElementById("passLogin")

    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = emailInput.value
        const pass = passInput.value
        if(login(email,pass)){
            localStorage.setItem("loggedUser", email)
            hideSection("errorLogin")
            hideSection("loginSection")
            mainMenu()
        }
        else{
            showSection("errorLogin")
        }
    }


}

function initProfileComplete(){
    const profileForm = document.getElementById("profileForm")
    const heightInput = document.getElementById("height")
    const weightInput = document.getElementById("weight")
    const sexInput = document.getElementById("sex")
    const yearInput = document.getElementById("birthYear")
    const activityLevelInput = document.getElementById("activityLevel")
    const goalInput = document.getElementById("goal")

    const backBtn = document.getElementById("btnBackMenu")

    backBtn.onclick = () => {
        hideSection("profileSection")
        showSection("mainMenuSection")
        return
    }

    profileForm.onsubmit = (e) =>{
        e.preventDefault()
        const userEmail = localStorage.getItem("loggedUser")
        completeProfile(userEmail, heightInput.value, weightInput.value, sexInput.value, yearInput.value, activityLevelInput.value, goalInput.value)

    }
}

function initMainMenu(){
    const profileBtn = document.getElementById("btnCompleteProfile")
    const recipesBtn = document.getElementById("btnRecipes")
    const exerciesBtn = document.getElementById("btnExercises")
    const progressBtn = document.getElementById("btnProgress")

    profileBtn.onclick = () =>{
        hideSection("mainMenuSection")
        showSection("profileSection")
        initProfileComplete()
    }

    recipesBtn.onclick = () => {
        hideSection("mainMenuSection")
        showSection("recipesSection")
        renderRecipes(recipes)
    }

    exerciesBtn.onclick = () => {
        hideSection("mainMenuSection")
    }

    progressBtn.onclick = () => {
        hideSection("mainMenuSection")
    }
}

function mainMenu(){
    showSection("mainMenuSection")
    initMainMenu()
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
        initLogIn()
    }
}

function main(){
    const loggedUser = localStorage.getItem("loggedUser")
    if (loggedUser) {
        hideSection("homeSection")
        mainMenu()
    } else {
        income()
    }
}

main()