console.log("Welcome to Famous Page")

// import http module 
const http = require("http")

// import file reader
const { readFileSync } = require('fs');

// get pages
const homePage = readFileSync("./pages/home.html");
const aboutPage = readFileSync("./pages/about.html");
const contactPage = readFileSync("./pages/contact.html");

const server = http.createServer((req, res) => {

    const url = req.url

    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()

        return;
    }

    //about page
    if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(aboutPage)
        res.end()

        return;
    }

    //contact page
    if (url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(contactPage)
        res.end()

        return;
    }
})

// start server to listen
server.listen(3000)