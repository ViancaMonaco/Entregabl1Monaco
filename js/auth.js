class User{
    constructor(name, mail, username, password){
        this.name = name
        this.mail = mail
        this.username = username
        this.password = password
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