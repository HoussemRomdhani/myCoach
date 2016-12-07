import mongoose = require("mongoose");

interface CoachModel extends mongoose.Document {
    name: string;
    profession: string;
    description: string;
    category: string;
    adress: string;
    telephone: string;
}

export = CoachModel;