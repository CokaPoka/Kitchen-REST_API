const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);

    }
});
var upload = multer({ storage: storage });


var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "cokapokajelena@gmail.com",
        pass: "Malicokac123"
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', upload.any(), function (req, res, next) {
    console.log(req.files);
    res.send(req.files[0]);

    var mailOptions = {
        from: 'cokapokajelena@gmail.com',
        replyto: 'nikolakikovic@gmail.com',
        to: 'nikolakikovic@gmail.com',
        subject: 'Nikola Kikovic upitnik-fotke',
        text: 'Fotke iz upitnika:',
        attachments: [
            {
                filename: 'izgled kuhinje',
                contentType: 'image/jpeg',
                path: `./image/${req.files[0].originalname}`,
            },
            {
                filename: 'plan1',
                contentType: 'image/jpeg',
                path: `./image/${req.files[1].originalname}`,
            },
            {
                filename: 'plan2',
                contentType: 'image/jpeg',
                path: `./image/${req.files[2].originalname}`,
            },
            {
                filename: 'plan3',
                contentType: 'image/jpeg',
                path: `./image/${req.files[3].originalname}`,
            }
        ]
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
            console.log("whatever")
            res.send(error);
        } else {
            console.log("Message sent: " + response.response);
            res.send('Worked');
        }
    });
});

module.exports = router;