const express = require('express');
const path = require("path");
const app = express();

// const bootstrap = require('bootstrap');


app.use(express.static("office"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "kitchen", "index.html"));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "kitchen", "headers.css"));
// });


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});







