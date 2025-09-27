import express from "express";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const THE_SECRET = process.env.THE_SECRET || "No_Secret";

// my secret key is "123456789"

app.get("/", (_req, res) => res.json({ok: true, secret: THE_SECRET}));
app.listen(PORT, () => console.log(`listening on port ${PORT}`));   