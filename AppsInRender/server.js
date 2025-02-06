// const renderApi = require('@api/render-api');

// renderApi.auth('rnd_Y4Syek9jpaEatOR6OwIe3ui8cDj5');
// renderApi.listServices({ includePreviews: 'true', limit: '20' })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

// const express = require("express"); // יבוא Express
// const app = express(); // יצירת מופע של האפליקציה

// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// API של Render
const RENDER_API_URL = "https://api.render.com/v1/services";
const API_KEY = "rnd_Y4Syek9jpaEatOR6OwIe3ui8cDj5";

// נקודת קצה שמחזירה את רשימת האפליקציות
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(RENDER_API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Render API:", error);
    res.status(500).json({ error: "Failed to fetch data from Render API" });
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});