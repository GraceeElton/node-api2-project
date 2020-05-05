const express = require("express");
const server = express();

const postRouter = require("./data/seeds/db-router");

server.get("/", (req, res) => {
  res.send("HEllo GRacee");
});

// set up router stuff!!

// 1st - import your ROUTER

// 2nd set up base url!

server.use("/api/posts", postRouter);

server.use(express.json());

server.listen(5000, () => {
  console.log("\n*** Server Running on http://localhost:5000 ***\n");
});
