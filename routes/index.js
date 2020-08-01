const express = require("express");
const request = require("request");
const base64 = require("base-64");
const router = express.Router();

/* GET home page. */
router.post("/200/charge", (req, res) => {
  console.log(process.env.sandbox);
  console.log(req.body);
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
        // console.log(body);
        let result = {
          token: body.token,
          redirect_url: `https://pacific-reaches-42192.herokuapp.com/${body.token}`
          // redirect_url: `http://localhost:4000/vtweb/${body.token}`
        }
        console.log(result);
        // res.status(201).send(result);
        res.status(200).send(result);
      }
    }
  );
});

router.post("/201/charge", (req, res) => {
  console.log(process.env.sandbox);
  console.log(req.body);
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
        // console.log(body);
        let result = {
          token: body.token,
          redirect_url: `https://pacific-reaches-42192.herokuapp.com/${body.token}`
          // redirect_url: `http://localhost:4000/vtweb/${body.token}`
        }
        console.log(result);
        // res.status(201).send(result);
        res.status(201).send(result);
      }
    }
  );
});

router.get("/", (req, res) => {
  res.send('index');
});

router.get("/vtweb/:token", (req, res) => {
  let result = {
    body: req.body,
    params: req.params
  };
  console.log(result);
  var token = req.params.token;
  res.send(result);
});

module.exports = router;
