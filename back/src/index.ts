import express from "express";
import dotenv from "dotenv"
import cors from 'cors';
import { connectDB } from "./database/Conect";
import { productoServiceMongo } from "./productos/service/produc.mongo.service";
import {routerProduct} from "./productos/Producto.routes"
dotenv.config()
connectDB()

const app = express()

app.use(express.json())
const port = 3000

app.use(cors())
app.use('/', routerProduct(new productoServiceMongo()));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});