import express from "express";
import * as bellController from "../controllers/bell-controller.js";

const router = express.Router();

router.route("/").get(bellController.all);

export default router;
