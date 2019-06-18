const path = require('path');
const express = require('express'); // import the express framework | importación del framework express

class Server { // server class to initialize the server | clase Server para inicializar el servidor

    constructor() { // constructor
        this.app = express(); // initialize express | inicializar express
        this.config(); // initialize method | inicializar método
    }

    config() { // method config
        this.app.set('port', process.env.PORT || 3001); // setting port | ajustando puerto

        this.app.use(express.static(__dirname + '/dist/www-gamescode-net-co'));
        this.app.get('/*', (req, res) => {
        	res.sendFile(path.join(__dirname + '/dist/www-gamescode-net-co/index.html'));
        });
    }

    start() { // method start to execute the listen | método start para ejecutar el listen
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port')); // show port
        });
    }

}

const server = new Server(); // instantiate server class | instanciar la clase server
server.start(); // initialize start from server | inicializar el método start desde la clase server