// import mongoose from "mongoose";

// const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect("mongodb://localhost:27017", {
// 			// To avoid warnings in the console
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});

// 		console.log(`MongoDB Connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(`Error: ${error.message}`);
// 		process.exit(1);
// 	}
// };

// export default connectDB;

import mongoose from "mongoose";
mongoose.set("strictQuery", true);
async function connectDB(url) {
  return mongoose.connect(url);
}

export default connectDB;