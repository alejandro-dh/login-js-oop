let CustomerUser = require('./CustomerUser')
let SellerUser = require('./SellerUser')

class RegisterForm {
    constructor() {
        this.data = {}
        this.errors = {}
        this.user = null 
    }

    getUser() {
        return this.user
    }

    register(data) {
        this.validate(data)

        if (this.hasErrors()) {
            return Promise.reject(this.errors)
        }

        let user

        if (data.type == 'customer') {
            user = new CustomerUser
        } else if (data.type == 'seller') {
            user = new SellerUser
        }

        user.setEmail(data.email)
        user.setPassword(data.password)
        
        this.user = user

        return Promise.resolve(this.user)
    }

    hasErrors() {
        return Object.keys(this.errors).length > 0
    }

    getErrors() {
        return this.errors
    }

    validate(data) {
        this.errors = {}

        if (data.email.length == 0) {
            this.errors.email = 'El email es requerido'
        }

        if (data.password.length < 6 || data.password.length > 9) {
            this.errors.password = 'El password debe contener entre 6 y 9 caracteres'
        }

        if (! ['customer', 'seller'].includes(data.type)) {
            this.errors.type = 'El tipo de usuario especificado no es valido'
        }
    }
}

module.exports = RegisterForm