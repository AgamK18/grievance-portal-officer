import express from "express";
import {
    getUser,
    getUserComplaints,
    trackComplaint, 
    registerComplaint,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*READ*/
router.get("/:id", verifyToken, getUser);
router.get("/:userId/userComplaints", verifyToken, getUserComplaints);
router.get("/trackComplaint/:id", verifyToken, trackComplaint);

/*CREATE*/
router.post("/:id/registerComplaint", verifyToken, registerComplaint);

export default router;