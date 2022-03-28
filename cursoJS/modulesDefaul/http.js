const http = require('http');

//http.createServer([options][, requestListener]) 
const handleServer = (request,response)=>{
    //TEXTO HTML
    
    response.writeHead(200, {'Content-type':'text/html'}); //Respuesta
    response.write('<h1>Hola mundo</h1>');
    
    //TEXTO PLANO
    /*
    response.writeHead(200, {'Content-type':'text/plain'}); //Respuesta
    response.write('esto es un texto simple');
    */
    //PARA ERROR 404
    /*
    response.writeHead(404, {'Content-type':'text/plain'}); //Respuesta
    response.write('Pagina no encontrada');
    */
    response.end();
};
const server = http.createServer(handleServer);
server.listen(3000,()=>{
    console.log("server in port: 3000");
});