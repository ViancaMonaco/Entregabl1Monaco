class User{
    constructor(name, email, username, password){
        this.name = name
        this.email = email
        this.username = username
        this.password = password

        this.profile = {
            heightCm: null,
            sex: null,
            brithYear: null,
            activityLevel: null,
            goal: null,
            weights: []
        }
    }

    addWeight(value){
        this.profile.weights.push({
            date: new Date().toISOString().split("T")[0],
            value
        })
    }
    
    setHeight(height){
        this.profile.heightCm = height
    }
}