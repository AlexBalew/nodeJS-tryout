const {addUser, getUsers} = require('./repository');

exports.usersController = (request, response) => {
    if (request.method === 'POST') {
        addUser('Bob', '3')
        response.write(JSON.stringify({success: true}))
    } else {
        response.write(JSON.stringify(getUsers()))
    }
}