import express from "express";
import { config } from "dotenv";
import router from "./routes/bell-event-routes.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/events", router);

app.get("/", (_req, res) => {
  res.send("Hello spice girls");
});

app.listen(PORT, () => {
  console.log(`Sever runnting at http://localhost:${PORT}`);
});
