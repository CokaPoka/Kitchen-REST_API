const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './blogimages');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})


const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 5
    }
})

const Blog = require('../models/blog')

router.get('/', (req, res, next) => {
    Blog.find()
        .select('_id picture date title desc')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                blog: docs.map(doc => {
                    return {
                        _id: doc._id,
                        picture: doc.picture,
                        date: doc.date,
                        title: doc.title,
                        desc: doc.desc,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:4000/blog/' + doc._id
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


router.post('/', upload.single('picture'), (req, res, next) => {
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        picture: req.file.path,
        date: Date.now(),
        title: req.body.title,
        desc: req.body.desc
    });
    blog.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Added blog successfully",
            createdBlog: {
                _id: result._id,
                date: result.date,
                title: result.title,
                desc: result.desc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:4000/blog/' + result._id
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

router.get('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    Blog.findById(id)
        .select('_id picture title desc')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    blog: doc
                });
            } else {
                res.status(404).json({ message: 'No valid enrty found for provided ID' })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


router.delete('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    Blog.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Blog deleted"
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