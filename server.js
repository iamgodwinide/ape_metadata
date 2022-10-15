const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

require("./db/config");


app.use("/", require("./routes/json"));
app.use("/image", require("./routes/image"));


const PORT = 4566;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))