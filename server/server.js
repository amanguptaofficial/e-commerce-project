import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Health is okay 🚀");
});
app.listen(PORT, () => {
  console.log(`server is listening the port ${PORT}`);
});
