import { Producto } from "./Producto.entity";

//molde de productos
export interface productoServ {
    list():Promise<Producto[]> //este metodo list devolver una promesa con todos los productos(get)
    find(id:string): Promise<Producto | null> //este metodo busca por id y si encuentra devuelve una promosa con el resultado. Sino no encuentra devuelve un null
    create(product:Producto): Promise<Producto> //este metodo crea un nuevo producto segun las propiedades definidas y deuelve una promesa
    update(id:string,precio:number,stock:number):Promise<Producto | null> //este metodo actualiza el producto y el id, devuelve una promesa con el resultado o null
    delete(id:string): Promise<Producto | null> //este metodo elimina un producto desde su id y si no encuentra nada devuelve null
};