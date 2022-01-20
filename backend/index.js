let http = require('http')
let {usersController} = require('./usersController')

const server = http.createServer((request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET')
    response.setHeader('Access-Control-Max-Age', 2592000)
    response.setHeader('Access-Control-Allow-Headers', '*')
    /** add other headers as per requirement */
    if (request.method === 'OPTIONS') {
        response.writeHead(200);
        response.end();
        return;
    }

    switch (request.url) {
        case '/users':
            usersController(request, response)
                .then()
            break
        case '/tasks':
            response.write(`tasks`)
            break
        default:
            response.write(`page not found`)
    }
    response.end()
})

server.listen(4848)