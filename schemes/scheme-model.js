const db = require('../data/db-config')

//resolves to an array of users
module.exports = {
    find,
    findById,
    findSteps,
    add
}

function find() {
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id}).first();
}

function findSteps(id){
    return db('schemes').where({id}).first()
} 

function add(schemeData){
    return db('schemes')
    .insert(schemeData, "id")
    .then(ids => {
        const id= ids[0];
          // all queries return an array,
            // even if it only has one element
            // .first() will extract the first element
            // from the array and return it
            // return db("users").where({ id }).first();
return findById(id);
    })
}

