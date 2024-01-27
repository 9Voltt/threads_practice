import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    } 
    try {
        await mongoose.connect(process.env.MONGODB_URL,
            {
                dbName: "threads",
            });
        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }

}
