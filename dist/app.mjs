import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
console.log(`App name: ${process.env.APP_NAME}`); // print environment variable
// connect to a MongoDB database
const MongoDB_Connection_String = 'mongodb://localhost';
async function connectToMongoDB(connectionString) {
    mongoose.connect(connectionString);
    console.log('MongoDB database successfully connected!');
}
try {
    await connectToMongoDB(MongoDB_Connection_String);
}
catch (e) {
    console.log('Error occured while connecting to MongoDB: ', e);
}
const PORT = process.env.PORT || 8000;
const app = express();
import { router as studentRouter } from "./mongodb/routes/student.router.mjs";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // allow cross-origin resource sharing
app.use(cookieParser());
app.use('/api', studentRouter);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=app.mjs.map