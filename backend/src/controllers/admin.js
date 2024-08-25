import { Admin } from "../models/Admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Register Admin
const registerAdmin = asyncHandler(async (req, res) => {
    const { name, mobile, email, password, access } = req.body;

    // Check if all required fields are provided
    if (!name || !mobile || !email || !password || !access) {
        throw new ApiError(400, "'name', 'mobile', 'email', 'password', 'access' all fields are mandatory.");
    }

    // Check if admin with the same mobile or email already exists
    const existingAdmin = await Admin.findOne({ $or: [{ mobile }, { email }] });
    if (existingAdmin) {
        throw new ApiError(400, "Admin with this mobile number or email already exists.");
    }

    // Create a new admin
    const admin = await Admin.create({
        name,
        mobile,
        email,
        password,
        access,
    });

    if (!admin) {
        throw new ApiError(500, "Something went wrong while saving the data.");
    }

    res.status(201).json(
        new ApiResponse(201, admin, "Admin created successfully.")
    );
});

// Login Admin
const loginAdmin = asyncHandler(async (req, res) => {
    const { mobile, password } = req.body;

    // Check if mobile and password are provided
    if (!mobile || !password) {
        throw new ApiError(400, "'mobile' and 'password' are required.");
    }

    // Find admin by mobile number
    const admin = await Admin.findOne({ mobile });
    if (!admin) {
        throw new ApiError(401, "Invalid mobile number or password.");
    }

    // Check if password is correct
    const isPasswordCorrect = await admin.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid mobile number or password.");
    }

    // Generate JWT token
    const accessToken = admin.generateAccessToken();

    res
    .status(200)
    .json(
        new ApiResponse(200, { accessToken }, "Login successful.")
    );
});

// Update Admin Details
const updateAdmin = asyncHandler(async (req, res) => {
    const { adminId } = req.params; // Admin ID from URL parameters
    const updates = req.body;

    // Find and update admin
    const admin = await Admin.findByIdAndUpdate(adminId, updates, { new: true });
    if (!admin) {
        throw new ApiError(404, "Admin not found.");
    }

    res.status(200).json(
        new ApiResponse(200, admin, "Admin details updated successfully.")
    );
});

// Delete Admin
const deleteAdmin = asyncHandler(async (req, res) => {
    const { adminId } = req.params; // Admin ID from URL parameters

    // Find and delete admin
    const admin = await Admin.findByIdAndDelete(adminId);
    if (!admin) {
        throw new ApiError(404, "Admin not found.");
    }

    res.status(200).json(
        new ApiResponse(200, null, "Admin deleted successfully.")
    );
});

// Get Admin Details
const getAdminDetails = asyncHandler(async (req, res) => {
    const { adminId } = req.params; // Admin ID from URL parameters

    // Find admin by ID
    const admin = await Admin.findById(adminId);
    if (!admin) {
        throw new ApiError(404, "Admin not found.");
    }

    res.status(200).json(
        new ApiResponse(200, admin, "Admin details retrieved successfully.")
    );
});

export { registerAdmin, loginAdmin, updateAdmin, deleteAdmin, getAdminDetails };
