import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        
        return app;
    }
}
export = Routes;