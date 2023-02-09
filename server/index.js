"use strict";
const express = require("express");
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const courseRoutes = require("./routes/courseRoutes");
const examRoutes = require("./routes/examRoutes");
const questionRoutes = require("./routes/questionRoutes");
const chapterRoutes = require("./routes/chapterRoutes");
const examQuestionRoutes = require("./routes/examQuestionRoutes");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api", courseRoutes.routes);
app.use("/api", examRoutes.routes);
app.use("/api", questionRoutes.routes);
app.use("/api", chapterRoutes.routes);
app.use("/api", examQuestionRoutes.routes);

app.listen(config.port, () =>
    console.log("Server listening on port: http://localhost:" + config.port)
);
