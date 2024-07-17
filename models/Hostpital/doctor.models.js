import mongoose from "mongoose"

const  doctorSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualifications:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        defaut : 0
    },
    worksinhospitals:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    




},{timestamps:true})

export const doctor = mongoose.model("doctor",doctorSchema)