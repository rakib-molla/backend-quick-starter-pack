const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/AsyncHandler");
const { createUserSchemaValidation } = require("./user.validation");
const { createUserService, getAllUserService } = require("./user.service");


const getAllUsersController = asyncHandler(async (req, res) => {

  const users = await getAllUserService();

  if (!users.length) {
    throw new ApiError(404, "No users found");
  }

  res.status(200).json(new ApiResponse(200, "Users fetched successfully", users));
});

const createUserController = asyncHandler(async(req, res)=>{
  const { error } = createUserSchemaValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const result = await createUserService(req.body);

  if (!result) {
    throw new ApiError(500, "User creation failed");
  }

  res.status(201).json(new ApiResponse(201, "User created successfully", result));
})

module.exports = {
  getAllUsersController,
  createUserController
};
