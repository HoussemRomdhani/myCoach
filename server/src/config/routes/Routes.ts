import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import CoachRoutes = require('../routes/CoachRoutes');

var app = express();

class Routes {

    get routes() {

          app.use("/", new HeroRoutes().routes);
          app.use("/", new CoachRoutes().routes);
        
        return app;
    }
}
export = Routes;