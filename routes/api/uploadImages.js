const express = require("express");
const router = express.Router();

const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');

const keys = require('../../config/keys');

const s3 = new aws.S3({
    accessKeyId: keys.S3_ACCESS_KEY,
    secretAccessKey: keys.S3_SECRET_ACCESS_KEY,
    region: keys.S3_BUCKET_REGION
})

router.get("/test", (req, res) => res.json({ msg: "This is the uploadimages route" }));

const upload = bucketName => multer({
    storage: multers3({
        s3,
        bucket: bucketName,
        metadata: (req, file, cb) =>{
            cb(null, { fieldName: file.fieldname });
        },    
        key: (req, file, cb) =>{
            cb(null, `image-${Date.now()}.jpeg`);
        },
    })
})

router.post('/exercises', (req, res, next) => {
    const uploadSingle = upload('dope-pt-image-upload').single('croppedImage');

    return res.status(200).json({ data: req.files});
})

module.exports = router;
