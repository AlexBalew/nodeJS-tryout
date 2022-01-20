let users = [
    {'id': '1', 'name': 'Aleks'},
    {'id': '2', 'name': 'Kate'},
]

const getUsers = () => {
    return users
}

const addUser = (name, id) => {
    users.push({name, id})
}

exports.getUsers = getUsers
exports.addUser = addUser