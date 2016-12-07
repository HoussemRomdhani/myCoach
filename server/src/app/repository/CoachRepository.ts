import CoachModel = require("./../model/CoachModel");
import ICoachModel = require("./../model/interfaces/CoachModel");
import CoachSchema = require("./../dataAccess/schemas/CoachSchema");
import RepositoryBase = require("./BaseRepository");

class CoachRepository  extends RepositoryBase<ICoachModel> {
    constructor () {
        super(CoachSchema);
    }
}

Object.seal(CoachRepository);
export = CoachRepository;