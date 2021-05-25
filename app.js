const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(3200, () => console.log("le serveur est allume"));
