import mongoose from "mongoose"

const  paitentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedwith :{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
      type:String,
      enum :["M","F","O"],
      required:true
    },
    admittedIn :{
        type: mongoose.Schema.Types.ObjectId,
        ref :"Hospital"
    },
    

},{timestamps:true})

export const Paitent = mongoose.model("paitent",paitentSchema)