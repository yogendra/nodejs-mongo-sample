import { default as  dataRoute } from './routes/data.js';
import express from 'express';
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/data", dataRoute );

app.listen(port, async () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Click here http://localhost:${port}
  `);
});
