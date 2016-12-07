import CoachRepository = require("./../repository/CoachRepository");
import ICoachBusiness = require("./interfaces/CoachBusiness");
import ICoachModel = require("./../model/interfaces/CoachModel");
import CoachModel = require("./../model/CoachModel");


class CoachBusiness implements ICoachBusiness {
    private _coachRepository: CoachRepository;

    constructor () {
        this._coachRepository = new CoachRepository();
    }

    create (item: ICoachModel, callback: (error: any, result: any) => void) {
        this._coachRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._coachRepository.retrieve(callback);
    }

    update (_id: string, item: ICoachModel, callback: (error: any, result: any) => void) {

        this._coachRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._coachRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._coachRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ICoachModel) => void) {
        this._coachRepository.findById(_id, callback);
    }
}

Object.seal(CoachBusiness);
export = CoachBusiness;