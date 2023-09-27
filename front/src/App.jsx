import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ name: '', marca: '', precio: 0, stock: 0 });

  const fetchProductos = async () => {
    const response = await fetch("http://localhost:3000/");
    const productos = await response.json();
    setProductos(productos);
  };
  
  const deleteProducto = async (id) => {
    console.log(id)
    try {
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE",
      });
      
      if (response.status === 200) {
        // Eliminar el producto eliminado de la lista de productos
        setProductos(productos.filter((productos) => productos._id !== id));
      } else {
        // Manejar el error
        console.error("Error al eliminar producto:", response.statusText);
      }
    } catch (error) {
      // Manejar el error
      console.error("Error al eliminar producto:", error);
    }
  };

  const agregarProducto = async (nuevoProducto)=>{
    try {
      const addProduc = await fetch("http://localhost:3000/",{
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers: {
            'Content-type': 'application/json'
        }})
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProductos();
  }, []);


  return (
    <>
      <div className='container'>
        <h1 style={{margin:10}}>POO - Ejercicio 2</h1>
          <div className='table-responsive'>
            <table>
              <thead style={{backgroundColor: "#ccc"}}>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((productos)=>(
                  <tr key={productos.id}>
                    <td>{productos.name}</td>      
                    <td>{productos.marca}</td>
                    <td>{productos.precio}</td>
                    <td>{productos.stock}</td>
                    <td><button type="button" className="btn btn-danger" onClick={() => deleteProducto(productos._id)}>Eliminar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='botones'>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{margin:'10px'}}>Agregar</button>
          </div>
          </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Agrega un nuevo producto</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="Notebook"
                      onChange={(e) => setNuevoProducto({ ...nuevoProducto, name: e.target.value })}  
                    />
                    <label htmlFor="floatingInput">Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="Red Dragon"
                      onChange={(e) => setNuevoProducto({ ...nuevoProducto, marca: e.target.value })}  
                    />
                    <label htmlFor="floatingPassword">Marca</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                    type="number" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="200000"
                    onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
                  />
                    <label htmlFor="floatingPassword">Precio</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="10000"
                      onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: e.target.value })}
                    />
                    <label htmlFor="floatingPassword">Stock</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Atras</button>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => {
                      agregarProducto(nuevoProducto);
                      setNuevoProducto({ name: '', marca: '', precio: 0, stock: 0 });
                    }}
                  >
                      Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
