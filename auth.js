const users = [new User("Vianca", "viancamonaco16@gmail.com", "vianca", "1234")]

function userExist(email){
    return users.some(u => u.email===email)
}

function register(name, email, username, password){
    if(userExist(email)){
        return false
    }
    const newUser = new User(name,email,username,password)
    users.push(newUser)
    return true
}