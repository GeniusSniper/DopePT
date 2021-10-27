const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the uploadimages route" }));

router.post('/exercises', (req, res) => {
    console.log(req.body, req.files, req.file);
    return res.status(200).json({ data: req.files});
})

module.exports = router;
