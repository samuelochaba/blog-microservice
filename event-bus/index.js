const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
// const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
// app.use(cors());

const commentsByPostId = {};

// app.get("/posts/:id/comments", (req, res) => {
//   res.send(commentsByPostId[req.params.id] || []);
// });

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Listening on 4005"));
