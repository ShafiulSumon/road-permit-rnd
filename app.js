const express = require("express");
const rootRouter = require("./routes/rootRouter");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const cors = require("cors");
const app = express();

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.json());
app.use("/", rootRouter);
app.all("*", notFoundHandler);
app.use(errorHandler);

module.exports = app;
