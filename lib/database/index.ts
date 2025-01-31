import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('⚠️ MONGODB_URI is missing. Set it in your .env file.');
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  try {
    console.log('⏳ Connecting to MongoDB...');
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URI, {
        dbName: 'GatherEase',
        bufferCommands: false,
      });

    cached.conn = await cached.promise;
    console.log('✅ Connected to MongoDB');

    return cached.conn;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    throw new Error('Database connection failed');
  }
};
