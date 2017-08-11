
const express = require('express');
//use express object to create more module segregated routes for better code management
const router = express.Router();

//try to connect to the db
const mongoose = require('mongoose');

const db_url = "mongodb://localhost/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db_url, function(err){
    if(err){
        console.error('Cannot connect to the mongodb');
        console.error(err);
    }
});

router.get('/', function (req, res) {
    res.send('api works');
});

module.exports = router;