const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/AsyncHandler");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];

  if (!users.length) {
    throw new ApiError(404, "No users found");
  }

  res.status(200).json(new ApiResponse(200, "Users fetched successfully", users));
});

module.exports = {
  getAllUsers
};
