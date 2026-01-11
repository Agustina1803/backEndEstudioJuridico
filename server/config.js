import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import "../database/config.js";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  middlewares() {
    this.app.use(
      cors({
        origin: [
          "https://apjdestudiojuridic.netlify.app",
          "https://back-end-estudio-juridico-r8jt2ff00-agustinas-projects-e5351869.vercel.app",
          "https://back-end-estudio-juridico.vercel.app"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    console.log(__filename);
    console.log(__dirname);
    this.app.use(express.static(path.join(__dirname, "../public")));

    this.app.get("/", (req, res) => {
      res.send("Backend Estudio Jurídico funcionando");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`server inciiado: http://127.0.0.1:${this.port}`);
    });
  }
}
