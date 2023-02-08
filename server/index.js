"use strict";
const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api", courseRoutes.routes);

app.listen(config.port, () =>
    console.log("Server listening on port: http://localhost:" + config.port)
);
