import { Router } from "express";
import { 
    registerAdmin, 
    loginAdmin, 
    updateAdmin, 
    deleteAdmin, 
    getAdminDetails 
} from "../controllers/admin.js";

const router = Router();

// Route to register a new admin
router.route("/register").post(registerAdmin);

// Route to login an admin
router.route("/login").post(loginAdmin);

// Route to update admin details (adminId is a URL parameter)
router.route("/:adminId").put(updateAdmin);

// Route to delete an admin (adminId is a URL parameter)
router.route("/:adminId").delete(deleteAdmin);

// Route to get admin details (adminId is a URL parameter)
router.route("/:adminId").get(getAdminDetails);

export default router;
