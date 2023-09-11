import express from "express";
import { handler } from "./handler";

const app = express();
const port = Bun.env.PORT ?? 8081;

app.get("/", handler);

const server = app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});


process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})