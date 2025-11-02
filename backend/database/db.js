import mongoose from 'mongoose';
import dotenv from 'dotenv';


const Connection = async () => {
  dotenv.config();
  const URL = process.env.DB_URL; // replace with your actual MongoDB URI

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected!");
  } catch (error) {
    console.log("❌ Error while connecting to database:", error);
  }
};

export default Connection;
