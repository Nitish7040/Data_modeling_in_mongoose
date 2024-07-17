// structure of mongoose

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    // {
    //     username: String,
    //     email : String,
    //     isActive : Boolean
    // }

    //2nd way to crete field
    {
      usernname :{
        type : String,
        required : true,
        unique : true,
        lowercase :true
      },
      email: {
        type : String,
        required :true,
        unique : true,
        lowercase : true
      },
        password : {
            type : String,
            required : true, // [true,"password is required"]
        }
      

    },
    {timestamps:true} //used for to store time of created 

)

export const User = mongoose.model("User",userSchema)


 