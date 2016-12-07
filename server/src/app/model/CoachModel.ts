import ICoachModel = require('./interfaces/CoachModel');

class CoachModel {

    private _coachModel: ICoachModel;

    constructor(coachModel: ICoachModel) {
        this._coachModel = coachModel;
    }
    get name (): string {
        return this._coachModel.name;
    }

     get profession (): string {
        return this._coachModel.profession;
    }
     get description (): string {
        return this._coachModel.description;
    }
     get category (): string {
        return this._coachModel.category;
    }
     get adress (): string {
        return this._coachModel.adress;
    }
      get telephone (): string {
        return this._coachModel.telephone;
    }
}
Object.seal(CoachModel);
export =  CoachModel;