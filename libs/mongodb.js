import mongoose from "mongoose";
const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};
export default connectMongoDB;