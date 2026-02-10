class User{
    constructor(name, mail, username, password){
        this.name = name
        this.mail = mail
        this.username = username
        this.password = password
    }
}

const usersArry = []


export function logIn(user, pass){
 const userValidation = usersArry.find(userObj => userObj.username===user && userObj.password===pass)
 if (userValidation){
    return true
 }
 return false
}