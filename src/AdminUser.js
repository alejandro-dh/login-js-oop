let User = require('./User')

class AdminUser extends User {
    constructor() {
        super()
    }

    can() {
        return true
    }
}

module.exports = AdminUser