import express from "express"
import { uniqueValue } from "shared";

const app = express();
const port = Bun.env.PORT ?? 8081;

app.get("/", (req, res) => {
  console.log('uniqueValue', uniqueValue)
  res.send("Hello World! 1");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});