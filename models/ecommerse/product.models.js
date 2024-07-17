import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    description:{
      type : String,
      required : true,

    },
    name:{
        required:true,
        type:String,
    },
    productimage:{
        type:String
    },
    price:{
       type : Number,
       default :0
    },
    stock:{
        type:Number,
        defult :0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required: true,
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,

    }
},{timestamps:true}
)

export const product = mongoose.model("product",productSchema)