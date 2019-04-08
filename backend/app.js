const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const { port } = require("../config");
const APIRouter = require("./Routes/APIRoute");

/* Initialize Middlewares */
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

/* Routes */
app.use("/api", APIRouter);

app.listen(port, () => console.log(`The Connection was established at port ${port}`));
