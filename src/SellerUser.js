let User = require('./User')

class SellerUser extends User {
    constructor() {
        super()

        this.permissions = [
            'publish-products',
            'list-customers',
        ]
    }
}

export default SellerUser