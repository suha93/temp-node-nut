const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    //console.log(req)
    res.end('welcome to our home page')
    }

    if(req.url === '/about'){
    res.end('here is a short history for about')
    }
    res.end(`
    <h1> Ooops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href = "/">back</a>
    `)
    
    
})


server.listen(5000)