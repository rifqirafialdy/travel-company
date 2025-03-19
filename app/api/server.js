const jsonServer = require("json-server")
const server = jsonServer.create()
const path = require('path')
const fs = require('fs')

const middlewares = jsonServer.defaults()
server.use(middlewares)

const filePath = path.join(process.cwd(), 'db.json')
let db = {}

try {
    const data = fs.readFileSync(filePath, 'utf-8')
    db = JSON.parse(data)
} catch (error) {
    console.error("Failed to read db.json:", error)
}

const router = jsonServer.router(db)
server.use('/api', router)

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000')
})

// Export the Server API
module.exports = server
