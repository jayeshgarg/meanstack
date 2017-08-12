//DB tables representation file

//need mongoose to create schema and map it to mondodb
const mongoose = require('mongoose');

//schema ojbect that will help in creating the schema
const Schema = mongoose.Schema;

//schema of video player as follows
const videoSchema = new Schema({
    title: String,
    description: String,
    url: String
});

//export the models to external(app-wide) use
//arg1 = name by which it will be known in app
//arg2 = variable name from the  schema defined above
//arg3 = name of the table in mongodb
module.exports = mongoose.model('video', videoSchema, 'videos');