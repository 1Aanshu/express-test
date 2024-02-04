require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes");
const morgan = require("morgan");

const app = express();
const PORT = Number(process.env.PORT);

app.use(morgan("dev"));
app.use(express.json());
app.use("/assets", express.static("public"));

app.use((req, res, next) => {
  req.body.currency = "NPR";
  next();
});

app.use((req, res, next) => {
  req.body.country = "NEPAL";
  next();
});

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.Url is http://localhost:${PORT}`);
});

// GET => fetch data from server to client
// POST => create new data (client to server)
// PUT => Update more than 1 data of existing data (client to server)
// PATCH => update 1 data only
// DELETE => remove existing data (server to client)
