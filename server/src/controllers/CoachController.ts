import express = require("express");
import CoachBusiness = require("./../app/business/CoachBusiness");
import IBaseController = require("./BaseController");
import ICoachModel = require("./../app/model/interfaces/CoachModel");

class CoachController implements IBaseController <CoachBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var coach: ICoachModel = <ICoachModel>req.body;
            var coachBusiness = new CoachBusiness();
            coachBusiness.create(coach, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var coach: ICoachModel = <ICoachModel>req.body;
            var _id: string = req.params._id;
            var coachBusiness = new CoachBusiness();
            coachBusiness.update(_id, coach, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var coachBusiness = new CoachBusiness();
            coachBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var coachBusiness = new CoachBusiness();
            coachBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var coachBusiness = new CoachBusiness();
            coachBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = CoachController;