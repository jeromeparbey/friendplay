import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://friendplay.vercel.app"],
    credentials: true,
  })
);

// 🔹 Route de test
app.get("/", (_req, res) => {
  res.send("🚀 FriendPlay Backend API is running!");
});

// 🔹 Port et URI Mongo
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

// 🔹 Connexion à MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connecté avec succès !");
    // Démarrage du serveur après connexion DB
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
    process.exit(1); // Arrête le serveur si la DB ne se connecte pas
  });

// 🔹 Événements Mongoose pour suivi
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️  MongoDB déconnecté !");
});

mongoose.connection.on("reconnected", () => {
  console.log("🔄 MongoDB reconnecté !");
});
