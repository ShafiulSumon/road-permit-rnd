const express = require("express");
const rootRouter = require("./routes/rootRouter");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const app = express();

app.use(express.json());
app.use("/", rootRouter);
app.all("*", notFoundHandler);
app.use(errorHandler);

module.exports = app;
