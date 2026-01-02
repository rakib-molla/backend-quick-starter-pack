const bcrypt = require('bcrypt');
const userModel = require('./user.model');

const createUserService = async (data) => {

  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  return await userModel.create({
    ...data,
    password: hashedPassword,
  });
};

const getAllUserService = async()=>{
    return await userModel.find({}).select("-password -role");
};


module.exports = { createUserService, getAllUserService };