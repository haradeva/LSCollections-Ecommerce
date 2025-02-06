const app = require(".");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
