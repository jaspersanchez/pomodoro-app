const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
