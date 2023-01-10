const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb+srv://sosso:abc@cluster0.yhbijru.mongodb.net/Utilisateur")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const bookRoute = require("./routes/mes.routes");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Static directory path
app.use(
  express.static(path.join(__dirname, "dist/angular-mean-crud-tutorial"))
);

// API root
app.use("/api", bookRoute);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
/* app.use((req, res, next) => {
  //next(createError(404));
}); */

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

/* app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/angular-mean-crud-tutorial/index.html")
  );
}); */


