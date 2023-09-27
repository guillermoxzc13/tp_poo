import mongoose from "mongoose";
 

export const connectDB = async()=>{

    try {
        // @ts-ignore
       await  mongoose.connect(process.env.MONGODB_URI);
        console.log("conectado a la db")
    } catch (error) {
        console.log(error);
        console.log("no se puedo conectar a la bd")
    }

}
