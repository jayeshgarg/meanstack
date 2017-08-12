
const express = require('express');
//use express object to create more module segregated routes for better code management
const router = express.Router();

//try to connect to the db
const mongoose = require('mongoose');

// loading the video player model to further use in apis
const Video = require('../models/video');

const db_url = "mongodb://localhost/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db_url, function (err) {
    if (err) {
        console.error('Cannot connect to the mongodb');
        console.error(err);
    }
});

router.get('/videos', function (req, res) {
    console.log('Get request for all videos');
    Video.find({})
        .exec(function (err, videos) {
            if (err) {
                res.send("Error retrieving videos");
                console.error(err);
            } else {
                res.json(videos);
            }
        })
});

router.get('/videos/:id', function (req, res) {
    console.log('Get request for all videos');
    Video.findById(req.params.id)
        .exec(function (err, video) {
            if (err) {
                res.send("Error retrieving video");
                console.error(err);
            } else {
                res.json(video);
            }
        })
});

router.post('/video', function (req, res) {
    console.log("Posting a video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.description = req.body.description;
    newVideo.url = req.body.url;
    newVideo.save(function (err, insertedVideo) {
        if (err) {
            res.send("Error saving video");
            console.error(err);
        } else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function (req, res) {
    console.log('updating a video');
    Video.findOne({ _id: req.params.id },
        function (err, video) {
            if (err) {
                res.send("Error in finding video for update");
                console.error(err);
            } else {
                console.log("Video is being updated!! " + video);
                if (video != null) {
                    if (req.body.title != undefined) {
                        video.title = req.body.title;
                    }
                    if (req.body.description != undefined) {
                        video.description = req.body.description;
                    }
                    if (req.body.url != undefined) {
                        video.url = req.body.url;
                    }
                    Video.update(
                        { _id: req.params.id },
                        video,
                        {
                            new: true
                            //this new is to be used with findByIdAndUpdate
                            //new = true gives updated video in below function
                            //new = false gives pre-updated video
                        },
                        function (err, updatedVideo) {
                            if (err) {
                                res.send("Error updating video");
                                console.error(err);
                            } else {
                                res.json(updatedVideo);
                            }
                        });
                } else {
                    //res.render('404', { status: 404, url: req.url });
                    res.send('404', { status: 404, url: req.url });
                }
            }
        });

});

router.delete('/video/:id', function (req, res) {
    console.log('Deleting video');
    Video.findByIdAndRemove(
        req.params.id,
        function (err, deletedVideo) {
            if (err) {
                res.send("Error deleting video");
                console.error(err);
            } else {
                res.json(deletedVideo);
            }
        });
});

module.exports = router;