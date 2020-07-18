let User = require('./User')

class CustomerUser extends User {
    constructor() {
        super()

        this.permissions = [
            'list-orders',
            'list-products',
        ]
    }
}

export default CustomerUser