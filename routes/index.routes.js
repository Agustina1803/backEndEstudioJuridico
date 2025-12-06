import { Router } from "express";
import citaRoutes from "./cita.routes.js";

const router = Router();

router.use("/citas", citaRoutes )

export default router;