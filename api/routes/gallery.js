const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})


const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
}
})

const Photo = require('../models/photo')

router.get('/', (req, res, next) => {
    Photo.find()
        .select('_id image date')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                photos: docs.map(doc => {
                    return {
                        _id: doc._id,
                        image: doc.image,
                        date: doc.date,
                        request: {
                            type: 'GET',
                            url: 'https://ndesignserver.herokuapp.com/gallery/' + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response); 
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.post('/', upload.single('image'),(req, res, next) => {
    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        image: req.file.path,
        date: Date.now()
    });
    photo.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Added photo successfully",
            createdPhoto: {
                _id: result._id,
                date: result.date,
                request: {
                    type: 'GET',
                    url: 'https://ndesignserver.herokuapp.com/gallery/' + result._id
                }
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

router.get('/:photoId', (req, res, next) => {
    const id = req.params.photoId;
    Photo.findById(id)
        .select('_id image')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    photo: doc
                });
            } else {
                res.status(404).json({ message: 'No valid enrty found for provided ID' })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


router.delete('/:photoId', (req, res, next) => {
    const id = req.params.photoId;
    Photo.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Photo deleted"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })

        })
})

module.exports = router;