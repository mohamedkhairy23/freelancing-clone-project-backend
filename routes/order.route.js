import express from "express";
import {
  getOrders,
  intent,
  confirm,
  getOrdersDashboard,
  deleteOrderById,
} from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);
router.get("/", verifyToken, getOrders);
router.get("/dashboard", getOrdersDashboard);
router.delete("/dashboard/:id", deleteOrderById);
export default router;
