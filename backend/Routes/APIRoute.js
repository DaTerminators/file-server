const express = require("express");
const Uploads = require("../controllers/Uploads");

// eslint-disable-next-line new-cap
const APIRoute = express.Router();

APIRoute.post("/upload", Uploads.upload);

module.exports = APIRoute;
