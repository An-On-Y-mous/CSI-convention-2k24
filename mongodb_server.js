// server.js
// const express = require('express');
import express from "express";
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";
// const cors = require('cors');
import cors from "cors";
import sheet from "./sheetsService.mjs";
const app = express();
const PORT = process.env.PORT || 4444;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post("/api/register", async (req, res) => {
  
  const { name, department, year, college, number, email } = req.body;
  await sheet([[name,department, year, college, number, email]])
  res.status(200).json({ message: "Form submitted successfully!" });
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
