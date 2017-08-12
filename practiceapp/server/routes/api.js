
const express = require('express');
//use express object to create more module segregated routes for better code management
const router = express.Router();

//try to connect to the db
const mongoose = require('mongoose');

// loading the video player model to further use in apis
const Video = require('../models/video');

const db_url = "mongodb://localhost/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db_url, function(err){
    if(err){
        console.error('Cannot connect to the mongodb');
        console.error(err);
    }
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if(err){
            res.send("Error retrieving videos");
            console.error(err);
        }else{
            res.json(videos);
        }
    })
})

module.exports = router;