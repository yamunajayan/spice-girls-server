import express from "express";
import * as bellEventController from "../controllers/bell-event-controller.js";

const router = express.Router();

router.route("/").get(bellEventController.all);
router.route("/mental_health").get(bellEventController.mentalHealthEvents);
router.route("/community").get(bellEventController.communityEvents);
router.route("/volunteer").get(bellEventController.volunteerEvents);
router.route("/workplace").get(bellEventController.workplaceEvents);

router.route("/register").post(bellEventController.registerUserForEvent);

export default router;
