import express = require("express");
import CoachController = require("./../../controllers/CoachController");

var router = express.Router();
class CoachRoutes {
    private _coachController: CoachController;

    constructor () {
        this._coachController = new CoachController();
    }
    get routes () {
        var controller = this._coachController;

        router.get("/coachs", controller.retrieve);
        router.post("/coachs", controller.create);
        router.put("/coachs/:_id", controller.update);
        router.get("/coachs/:_id", controller.findById);
        router.delete("/coachs/:_id", controller.delete);

        return router;
    }
}

Object.seal(CoachRoutes);
export = CoachRoutes;