const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL environment variable not set");
    }

    await mongoose.connect('mongodb+srv://divya2581be22:fHnjqhZd2GC3HW80@cluster0.j6snd.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`Error connecting to database: ${error}`.bgRed);
    process.exit(1); 
  }
};

module.exports = connectDb;