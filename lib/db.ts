import mongoose from 'mongoose'
export const connect=async()=>{
    if(mongoose.connection.readyState===1)return;
    await mongoose.connect(`${process.env.MONGO_URL}/paytm`);
}