import mongoose from 'mongoose'

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
     email:{
        type:String,
        unique:true,
        required:true
    },
})
export const User=mongoose.models.User ||  mongoose.model('User',UserSchema)