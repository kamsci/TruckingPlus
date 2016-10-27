var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var jobSchema = new Schema({
    title: { type: String, required: true },
    referenceId: { type: String, required: true, unique: true },
    jobComplete: { type: Date },
    stops: [{
        stopType: { type: String },
        cargoDescription: { type: String },
        arrivalTime: { type: Date },
        address: { type: String },
        picture: { type: String },
        ladingReceived: { type: Date },
        ladingSigned: { type: Date }
    }]
});

jobSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Job', jobSchema);