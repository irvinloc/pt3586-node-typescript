import express, { Router } from "express";
import { getZipUsers, deleteZipUsers } from "../../controllers/zip/zip";
const router: Router = express.Router();

router.get("/zip/:id", getZipUsers);
router.delete("/zip/:id", deleteZipUsers);
export default router;
