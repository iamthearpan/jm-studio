import { asyncHandler } from "../utils/asyncHandler.js";

const registerAdmin = asyncHandler( async (req, res) => {
    res.json({
        type: "Post",
        action: true
    })
})

export {
    registerAdmin
}