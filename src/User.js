class User {
    constructor() {
        this.email = ''
        this.password = ''
        this.createdAt = new Date
        this.permissions = []
    }

    can(action) {
        return this.permissions.includes(action)
    }

    setEmail(email) {
        this.email = email 
    }

    setPassword(pwd) {
        this.password = pwd.split('').reverse().join('')
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }
}

module.exports = User