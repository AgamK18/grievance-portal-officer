import express from "express";
import {
    getOfficer,
    getOfficerComplaints,
    solveComplaint
} from "../controllers/officer.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*READ*/
router.get("/:id", verifyToken, getOfficer);
router.post("/:officerId/officerComplaints", verifyToken, getOfficerComplaints);

/*UPDATE*/
router.patch("/:id/solveComplaint", verifyToken, solveComplaint);

export default router;