const fs = require('fs')

/*let users = [
    {'id': '1', 'name': 'Alex'},
    {'id': '2', 'name': 'Kate'},
]*/

const getUsers = () => {
    return new Promise((resolve, rej) => {
        fs.readFile("users.json", function (err, buf) {
            resolve(buf.toString())
        })
    })
}

const addUser = (name, id) => {
    users.push({name, id})
}

exports.getUsers = getUsers
exports.addUser = addUser