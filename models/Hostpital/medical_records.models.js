import mongoose from "mongoose"

const  medicalRecordsSchema = new mongoose.Schema({
    

},{timestamps:true})

export const Medicalrecords = mongoose.model("medicalrecords",medicalRecordsSchema)