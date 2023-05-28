import {useState, useEffect} from 'react'
import styles from "../styles/carrito.module.css"
import Layout from '../components/layout'
import Image from "next/image"

function Carrito({carrito, eliminarCarrito, actualizarCantidad}) {    
    const [precioTotal,setPrecioTotal] = useState(0)

    useEffect(() => {
        const subTotalCarrito = carrito.reduce((total, producto) => {
          return total + producto.cantidad * producto.precio;
        }, 0);
    
        setPrecioTotal(subTotalCarrito);
      }, [carrito]);

    const handleOnChange = (cantidad, guitarra) => {
        guitarra.cantidad = cantidad;
        actualizarCantidad(guitarra);
      };
  return (
    <Layout>
    <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>
          <div className={styles.contenido}>
            <div className={styles.carrito}>
              <h2>Articulos</h2>

              {carrito?.length === 0
                ? "Sin Productos"
                : carrito?.map((producto) => (
                    <div key={producto.id} className={styles.producto}>
                      <div>
                        <Image
                          src={producto.imagen}
                          alt={`imagen producto ${producto.nombre}`}
                          width={400}
                          height={600}
                        />
                      </div>
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                        <p className={styles.cantidad}>Cantidad</p>
                        <select
                          id="cantidad"
                          className={styles.select}
                          value={producto.cantidad}
                          onChange={(e) =>
                            handleOnChange(+e.target.value, producto)
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className={styles.precio}>${producto.precio}</p>
                        <p className={styles.subtotal}>
                          Subtotal: $ {""}
                          <span>{producto.cantidad * producto.precio}</span>
                        </p>
                      </div>

                      <button
                        type="button"
                        className={styles.btn_eliminar}
                        onClick={() => {
                          eliminarCarrito(producto);
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className={styles.resumen}>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: $ {precioTotal}</p>
            </aside>
          </div>
        </main>
        </Layout>
  )
}

export default Carrito