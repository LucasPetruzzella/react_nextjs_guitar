import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [paginaLista,setPaginaLista] = useState(false)

  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) || []
      : [];
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    setPaginaLista(true)
  }, []);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoFiltrado = carrito.filter((c) => c.id !== guitarra.id);
      setCarrito([...carritoFiltrado, guitarra]);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState = guitarra;
      }

      return guitarraState;
    });

    setCarrito(carritoActualizado);
  };

  const eliminarCarrito = (guitarra) => {
    const carritoFiltrado = carrito.filter((c) => c.id !== guitarra.id);
    setCarrito(carritoFiltrado);
  };

  return (
     paginaLista ? (
    <Component
      {...pageProps}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarCarrito={eliminarCarrito}
      carrito={carrito}
    />) : null
  );
}

export default MyApp;
