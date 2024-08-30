const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/verify", (req, res) => {
  const { code } = req.body;

  if (code.length !== 6 || code[5] === "7") {
    return res.status(400).json({ error: "Verification failed" });
  }

  res.status(200).json({ message: "Verification successful" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
