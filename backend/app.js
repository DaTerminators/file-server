const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const { port } = require("../config");
const APIRouter = require("./Routes/APIRoute");
const DocumentRoute = require("./Routes/DocumentRoute");
const path = require("path");
const homeDIR = path.join(__dirname , ".." , "frontend" , "index.html");

/* Initialize Middlewares */
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

/* Routes */
app.use("/api", APIRouter);
app.use("/document", DocumentRoute);

app.get("/" , (req, res) => {
    res.sendFile(homeDIR);
});

app.listen(port, () => console.log(`The Connection was established at port ${port}`));
