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

function initAddMenu(){
    let addbutton = document.querySelectorAll(".btn-add")
    addbutton.forEach(button => {
        button.onclick = (e) => {
            const recipeID = e.currentTarget.id
            let selectRecepi = getRecipeById(recipeID)
            saveDailyRecepi(selectRecepi)
            localStorage.setItem("dailymenu", JSON.stringify(dailyRecipes))
        }
    })
}

function recipesMenu(){
    hideSection("mainMenuSection")
    showSection("recipesSection")
        
    let mealFilter = document.getElementById("mealFilter")
    mealFilter.value = "all" 
        
    renderRecipes(recipes)
    initAddMenu()
    mealFilter.onchange = (e) => {
        const selectedType = e.target.value
        let filteredRecipes

        if (selectedType === "all") {
            filteredRecipes = recipes
        } else {
            filteredRecipes = recipes.filter(r => r.mealType.toLowerCase() === selectedType.toLowerCase())
        }

        renderRecipes(filteredRecipes)
        initAddMenu()
    }
    let backBtn = document.getElementById("btnBackFromRecipes")
    backBtn.onclick = () => {
        hideSection("recipesSection")
        showSection("mainMenuSection")
    }
}

function initCartButtons() {
    const btnBack = document.getElementById("btnBackToRecipes")
    const btnConfirm = document.getElementById("btnConfirmMenu")

    btnBack.onclick = () => {
        hideSection("cartSection")
        recipesMenu()
    };

    btnConfirm.onclick = () => {
        const messageElement = document.getElementById("cartMessage")
        if (dailyRecipes.length === 0){
            messageElement.textContent = "Por favor, agrega al menos una receta para confirmar."
            messageElement.style.color = "red"
            return
        }
        messageElement.innerHTML = "¡Menú confirmado!"
        hideSection("cartSection")
        showSection("mainMenuSection")
    }
}

function removeFromMenu(id) {
    // 1. Filtramos el array global para quitar la receta seleccionada
    dailyRecipes = dailyRecipes.filter(recipe => recipe.id != id);

    // 2. Actualizamos el LocalStorage para que el cambio no se pierda al refrescar
    localStorage.setItem("dailymenu", JSON.stringify(dailyRecipes));

    // 3. Volvemos a renderizar el carrito para que desaparezca de la vista
    renderCart(dailyRecipes);
}
// Definir la función globalmente para que el HTML pueda verla
window.removeFromCart = function(id) {
    // 1. Filtrar el array global (usando el nombre de tu variable global)
    dailyRecipes = dailyRecipes.filter(recipe => recipe.id != id)

    // 2. Actualizar LocalStorage
    localStorage.setItem("dailymenu", JSON.stringify(dailyRecipes))

    // 3. Re-renderizar la vista del carrito
    renderCart(dailyRecipes)
}
function initMainMenu(){
    const profileBtn = document.getElementById("btnCompleteProfile")
    const recipesBtn = document.getElementById("btnRecipes")
    const dailyMenuBtn = document.getElementById("btnDailyMenu")
    const closeSessionBtn = document.getElementById("btnCloseSession")

    profileBtn.onclick = () =>{
        hideSection("mainMenuSection")
        showSection("profileSection")
        initProfileComplete()
    }

    recipesBtn.onclick = () => {
        recipesMenu()
    }

    dailyMenuBtn.onclick = () => {
        hideSection("mainMenuSection")
        const recipes = JSON.parse(localStorage.getItem("dailymenu")) || []
        showSection("cartSection")
        renderCart(recipes)
        initCartButtons()
    }

    closeSessionBtn.onclick = () => {
        hideSection("mainMenuSection")
        localStorage.removeItem("loggedUser")
        showSection("homeSection")
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