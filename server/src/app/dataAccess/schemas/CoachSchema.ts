import DataAccess = require('../DataAccess');
import ICoachModel = require("./../../model/interfaces/CoachModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CoachSchema {
    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            profession : {
                type: String,
                required: true
            },
            description : {
                type: String,
                required: false
            },
             category : {
                type: String,
                required: false
            },
              adress : {
                type: String,
                required: false
            },
            telephone : {
                type: String,
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<ICoachModel>("Coachs", CoachSchema.schema);
export = schema;""