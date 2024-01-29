const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res)=> {
  res.json({ msg: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.Url is http://localhost:${PORT}`);
});

// GET => fetch data from server to client
// POST => create new data (client to server)
// PUT => Update more than 1 data of existing data (client to server)
// PATCH => update 1 data only
// DELETE => remove existing data (server to client)