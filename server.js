const dotenv = require("dotenv").config();
const app = require("./app");
const ConnectDB = require("./config/db");

ConnectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}/api/v1`);
});
