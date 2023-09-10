import express from "express"
import { uniqueValue } from "shared";

const app = express();
const port = Bun.env.PORT ?? 8082;

app.get("/", (req, res) => {
  console.log('uniqueValue', uniqueValue)
  res.send("Hello Worldas! 2");
});

const server = app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})