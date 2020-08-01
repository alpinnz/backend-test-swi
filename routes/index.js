const express = require("express");
const request = require("request");
const base64 = require("base-64");
const router = express.Router();

/* GET home page. */
router.post("/charge", (req, res) => {
  request.post(
    {
      method: "POST",
      url: process.env.sandbox,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Basic " + base64.encode("SB-Mid-server-Haihn7kg79cbbOdxj0c4voxX"),
      },
      json: true,
      body: req.body,
    },
    (err, response, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log(body);
        res.status(200).send(body);
      }
    }
  );
});

router.get("/", (req, res) => {
  res.send('index');
});

module.exports = router;
