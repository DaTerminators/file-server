const express = require("express");
const fileExists = require("file-exists");
const path = require("path");
const uploadDir = path.join(__dirname, "..", "..", "data", "uploads");

// eslint-disable-next-line new-cap
const DocumentRoute = express.Router();

DocumentRoute.get("/:eek", async (req, res) => {
    let file = req.params.eek;
    console.log(uploadDir + file);
    let ISStoredfile = fileExists.sync(uploadDir + "/" + file);
    if(!ISStoredfile) return res.json({success: false, messgage: "File Not Found On Server."});
    res.sendFile(uploadDir + "/" + file);
});

module.exports = DocumentRoute;
