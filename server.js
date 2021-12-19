// Import Express & Path Packages
const express = require("express");

// Initialize express
const app = express();

// Serve static build files from the "dist" directory
app.use(express.static("./dist/to-plant"));

// Route incoming server requests to the correct files
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/to-plant/" })
);

// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
