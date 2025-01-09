import express from "express";
import cors from "cors";
import testRoute from "./routes/testRoute";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", testRoute);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
