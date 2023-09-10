import express from "express"
import { uniqueValue } from "shared";
import { cerbos } from "./cerbos";

const app = express();
const port = Bun.env.PORT ?? 8081;

app.get("/", async (req, res) => {
  console.log('uniqueValue', uniqueValue)
  console.log(await cerbos.isAllowed({
    principal: {
      id: "user@example.com",
      roles: ["USER"],
    },
    resource: {
      kind: "user",
      id: "1"
    },
    action: "view",
  }))
  console.log('hell')
  res.send("Hello World! 1");
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