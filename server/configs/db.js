import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () =>
      console.log('✅ Database connected')
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000 // Optional: increase timeout to avoid early failures
    });
  } catch (error) {
    console.log('❌ MongoDB Connection Error:', error.message);
  }
};

export default connectDB;
