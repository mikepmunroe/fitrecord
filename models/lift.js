var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Lift = new Schema({
    name: String,
    date: { type: Date, default: Date.now },
    repScheme: Number,
    load: Number,
    notes: String
});

mongoose.model( 'Lift', Lift );