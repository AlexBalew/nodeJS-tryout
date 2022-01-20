const {addUser, getUsers} = require('./repository');

exports.usersController = async (request, response) => {
    if (request.method === 'POST') {
        addUser('Bob', '3')
        response.write(JSON.stringify({success: true}))
        response.end()
    } else {
        //response.write(JSON.stringify(getUsers()))
        let users = await getUsers()
        response.write(JSON.stringify(users))
        response.end()
    }
}