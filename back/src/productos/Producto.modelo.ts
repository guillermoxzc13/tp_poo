import { uuid } from "uuidv4"
import { Schema, model } from "mongoose"
import { Producto } from "./Producto.entity"

const ProduSchema = new Schema<Producto>({
    name:{
        type:String,
        require:true
    },
    marcaa:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
}, {
        timestamps:true,
        id: true
});

const ProductModel = model<Producto>('Producto', ProduSchema);

export {ProductModel} 
