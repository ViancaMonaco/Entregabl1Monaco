const users = [new User("Vianca", "viancamonaco16@gmail.com", "vianca", "1234")]

function userExist(email){
    return users.some(u => u.email===email)
}

function getUser(email){
    return users.find(u=>u.email === email)
}

function register(name, email, username, password){
    if(userExist(email)) return false
    
    const newUser = new User(name,email,username,password)
    users.push(newUser)
    return true
}

function login(email, pass){
    if(!userExist(email)) return false
    
    const user = getUser(email)
    return user.password === pass
}

function completeProfile(userEmail, height, weight, sex, birthYear, activityLevel, goal){
    const user = getUser(userEmail)
    if (!user) return false

    user.profile.heightCm = height
    user.profile.weights.push(weight)
    user.profile.sex = sex
    user.profile.brithYear = birthYear
    user.profile.activityLevel = activityLevel
    user.profile.goal = goal
    return true
}

function getRecipeById(recipeId){
    if(!recipeId) return -1
    const recipe = recipes.find(r => r.id==recipeId)
    if(!recipe) return -1
    return recipe
}

function saveDailyRecepi(recepi) {
    dailyRecipes = JSON.parse(localStorage.getItem("dailymenu")) || []
    dailyRecipes.push(recepi)

    localStorage.setItem("dailymenu", JSON.stringify(dailyRecipes))
    console.log("Menú actualizado en disco y memoria")
}