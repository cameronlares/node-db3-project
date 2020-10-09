const db = require('../data/db-config')

//resolves to an array of users
module.exports = {
    find,
}

function find() {
    return db('schemes')
}

