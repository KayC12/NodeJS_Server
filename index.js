// import a http module to create server
const http = require("http")

// create the actual server with HTTP
const server = http.createServer((req, res) => {
    console.log("server is created")
})

// initial the port that'll be used
const PORT = 5000;

// running and listening to the server
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))