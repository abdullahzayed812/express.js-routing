const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/home(.html)?", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

router.get("/old(.html)?", (request, response) => {
  response.redirect(301, path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
