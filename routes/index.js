var express = require('express'),
    router = express.Router();


// router.get('/apartments', apartment.getApts);
// router.post('/apartments', apartment.createApt);
// router.delete('/apartments/:id', apartment.deleteApt);


router.get("/", function (req, res) {
    console.log("GREETINGS");
    res.json("gay");
});



module.exports = router;