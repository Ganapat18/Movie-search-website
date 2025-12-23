const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_KEY = "8688f58e";

app.get("/movies/:name", async (req, res) => {
  const movieName = req.params.name;

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.json({ error: "Error fetching movies" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
