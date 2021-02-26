const express = require("express");
const path = require("path");

const app = express();

app.use("/src/js", express.static(path.resolve(__dirname, "src", "js")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));
