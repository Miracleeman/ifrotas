import express from "express";
import serverless from 'serverless-http'

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Railway + Node!");
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

