import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MongoDB URI is not defined");

    mongoose.connection.on("connected", () => console.log("✅ Database connected"));
    await mongoose.connect(uri);
  } catch (error) {
    console.log("❌ DB connection error:", error.message);
  }
};

export default connectDB;
