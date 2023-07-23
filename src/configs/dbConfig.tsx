import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const conn = mongoose.connection;

    conn.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    conn.on("error", (error) => {
      console.error(
        "MongoDB connection error. Please make sure mongoDb is running. " +
          error
      );
      process.exit();
    });
  } catch (error: any) {
    console.error("Something went wrong!" + error);
  }
}
