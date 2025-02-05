import mongoose from "mongoose";

export const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.info({
      message: "cannot connect to database",
      errors: error.message,
    });
    process.exit(1); // 1 means exit with failures, 0 means success
  }
};
