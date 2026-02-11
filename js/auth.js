class User{
    constructor(name, mail, username, password){
        this.name = name
        this.mail = mail
        this.username = username
        this.password = password
        this.weights = []
    }
}

const usersArry = [ new User("Test", "test@mail.com", "testuser", "1234")]

function userExist(email){
  return usersArry.some(userObj => userObj.mail === email)
}


export function logIn(user, pass){
 const userValidation = usersArry.find(userObj => userObj.username===user && userObj.password===pass)
 if (userValidation){
    return true
 }
 return false
}

export function register(name, email, userName, password){
    if (userExist(email)){
        return false
    }
    const user = new User(name,email,userName,password)
    usersArry.push(user)
    return true
}

export function addWeight(username, weight){
    const user = usersArry.find(user => user.username === username)
    if(user){
        user.weights.push(weight)
        return true
    }
    return false
}

export function calculateIMC(height, username){
    const user = usersArray.find(u => u.username == username)
    if (user && user.weights.length > 0){
        const lastWeight = user.weights.at(-1)
        const imc = lastWeight / ((height / 100) ** 2)
        return imc
    }
    return -1
}