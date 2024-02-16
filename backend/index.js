const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
// const bodyParser = require("body-parser");
const rootRouter = require("./routes/index");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`App is listeing on port: ${port}`);
});
