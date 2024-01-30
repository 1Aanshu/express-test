const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());

// (READ)
app.get("/", (req, res) => {
  // logic => db
  res.json({ msg: "all blogs list" });
});

// (CREATE)
app.post("/", (req, res) => {
  const data = req.body;
  // logic => send this data to db
  res.json({ msg: `New blog added with data: ${data}` });
});

// (UPDATE)
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // logic => send this data to db
  res.json({ msg: `Blog Id ${id} put with data: ${data}` });
});

// (UPDATE)
app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // logic => send this data to db
  res.json({ msg: `Blog Id ${id} patched with data: ${data}` });
});

//(DELETE)
app.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Blog Id ${id} deleted` });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.Url is http://localhost:${PORT}`);
});


// GET => fetch data from server to client
// POST => create new data (client to server)
// PUT => Update more than 1 data of existing data (client to server)
// PATCH => update 1 data only
// DELETE => remove existing data (server to client)
