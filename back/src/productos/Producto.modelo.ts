import { uuid } from "uuidv4"
import { Schema, model } from "mongoose"
import { Producto } from "./Producto.entity"

const ProduSchema = new Schema<Producto>({
    name:{
        type:String,
        
    },
    marca:{
        type:String,
        
    },
    precio:{
        type:Number,
       
    },
    stock:{
        type:Number,
        
    }
}, {
        timestamps:true,
        id: true
});

const ProductModel = model<Producto>('Producto', ProduSchema);

export {ProductModel} 
