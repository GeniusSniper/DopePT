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

router.post('/exercises', (req, res, next) => {

    return res.status(200).json({ data: req.files});
})

module.exports = router;
