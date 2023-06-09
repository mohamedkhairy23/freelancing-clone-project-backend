import express from "express";
import {
  createNewGig,
  deleteGig,
  getGig,
  getGigs,
  deleteGigDashboard,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", verifyToken, createNewGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);
router.delete("/:id", verifyToken, deleteGig);

router.get("/dashboard", getGigs);
router.delete("/dashboard/:id", deleteGigDashboard);

export default router;
