const express = require("express");
const db = require("../db");
const router = express.Router();

/// set with GET -- 	Returns an array of all the post objects contained in the database.

router.get("/", (req, res) => {
  db.find(req.query)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Could not get the posts",
      });
    });
}); // working!!

// get---- /api/posts/:id -- Returns the post object with the specified id.

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          message: "post not found",
        });
      }
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).json({
        message: "Could not get the post ",
      });
    });
}); // working!!

// GET ----	/api/posts/:id/comments	----- Returns an array of all the comment objects associated with the post with the specified id.

router.get("/:id/comments", (req, res) => {
  db.findCommentById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          message: "post not found",
        });
      }
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).json({
        message: "could not find post",
      });
    });
}); // working!! AHHH

//POST ----- 	/api/posts -----	Creates a post using the information sent inside the request body.

router.post("/", (req, res) => {
  db.insert(req.body)
    .then((post) => {
      console.log({ post });
      res.status(201).json(post);
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).json({
        message: "Error adding post",
      });
    });
});

// doNT FORGET!!!! this little peice of code!!!

module.exports = router;
