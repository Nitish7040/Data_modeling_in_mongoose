import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
    },
    quantity:{
        type: Number,
        required:true
    }
})


const orderSchema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required :true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orderItems:{
        type : [orderItemSchema]

        // type:{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'OrderItem'
        // }
    },
    address:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum :["PENDING","CANCELLED","DELIVERED"] // USED FOR OPTIONS
        // default : "PENDING"   
    }
    





},{
    timestamps:true
})

export const Order = mongoose.model("Order",orderSchema)