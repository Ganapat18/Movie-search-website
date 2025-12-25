const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const API_KEY = "8688f58e";

app.get("/movies/:name", async (req, res) => {
  const movieName = req.params.name;

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=184b690f`
    );
    res.json(response.data);
  } catch (error) {
    res.json({ error: "Error fetching movies" });
  }
});

app.listen(PORT, () => {
  console.log("Server running ");
});
