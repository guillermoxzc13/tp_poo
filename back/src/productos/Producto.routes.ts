import { Router } from "express";
import {productoServ} from "./Producto.service"


function routerProduct (productoService:productoServ) {

    const ProdRout = Router();

    ProdRout.get("/", async (req, res)=>{
        const listaProduct = await productoService.list()
        return res.status(200).json({
            msg:"los productos son ",
            listaProduct
        })
    })

    ProdRout.post("/", async (req, res)=>{
        const newProduct = await productoService.create(req.body)
        res.status(201).json({
            msg:"producto creado",
            newProduct
        })
    })

    ProdRout.put("/", async (req, res)=>{
        const id = req.body.id;
        const {precio, stock} = req.body
        
        try {
            const ProducActualizado = await productoService.update(id, precio,stock)
            res.status(200).json({
                msg:"producto actualizar",
                ProducActualizado
            })
        } catch (error) {

            return res.status(500).json({
                msg:"Error al actualizar el producto"
            })
        }
    })

    ProdRout.delete('/', async (req, res) => {
        const id = req.body.id;
        try {
            const productoDelete = await productoService.delete(id);
            return res.status(200).json({
                msg:'Producto eliminado',
                productoDelete
            });
        } catch (err) {
            console.log("clg error ",err)
            return res.status(500).json({
                msg: 'Error al eliminar el producto'
            });
        }
    })

    return ProdRout;

}

export {routerProduct}