
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sheet from "./sheetsService.mjs";
const app = express();
const PORT = process.env.PORT || 4444;

app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
const timestamp = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
});
app.post("/api/register", async (req, res) => {
  const { name, department, year, college, number, email } = req.body;

  await sheet({
    values: [[name, department, year, college, number, email, timestamp]],
  });
  res.status(200);
});

app.post("/api/postRegister", async (req, res) => {
  const { name, department, year, college, number, email } = req.body;

  await sheet({
    values: [[name, department, year, college, number, email, timestamp]],
    postRegister: true,
  });
  res.status(200);
});

app.post("/api/verify", async (req, res) => {
  const { id, name, event, authBy } = req.body;
  await sheet({ values: [[id, name, event, authBy, timestamp]], log: true });
  res.status(200);
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
