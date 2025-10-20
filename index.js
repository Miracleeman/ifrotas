// index.js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Railways + Node!");
});

// use process.env.PORT para funcionar no Railway
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
