const express = require("express");
const cors = require("cors");
const app =express();

const db_connect = require("./db_connect");
require("dotenv").config();
db_connect();
app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/mobile", require("./routes/mobile"));
app.use("/mac", require("./routes/mac"));
app.use("/order", require("./routes/order"));


app.listen(process.env.PORT, (err)=> err ? console.log(err): console.log("server is running"));
