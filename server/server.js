import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import rateLimit from "express-rate-limit";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN, "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
