const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

const User = require("../modules/user/user.model");

dotenv.config();

const users = Array.from({ length: 50 }).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: "$2b$10$wCNmuo9N4wYPSnW/u8dNF.dIn0d2az6V7QivnqbmwCVfM7JRib4Uu", // hashed version of '12345678'
  role: "user",
  status: "active",
}));

const seedUsers = async () => {
  try {
    // 1 MongoDB connect
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected");

    // 2 Old users delete (optional)
    await User.deleteMany();

    // 3 Password hash
    // const hashedUsers = await Promise.all(
    //   users.map(async (user) => ({
    //     ...user,
    //     password: await bcrypt.hash(user.password, 10),
    //   }))
    // );

    // 4 Insert fake users
    await User.insertMany(users);

    console.log(" 50 Fake users inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error(" Seeder error:", error);
    process.exit(1);
  }
};

seedUsers();
