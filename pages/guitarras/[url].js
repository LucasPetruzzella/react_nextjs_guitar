import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export async function getServerSideProps(datos) {
  const url = datos.query.url;

  const urlApi = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`;
  const respuesta = await fetch(urlApi);
  const resultado = await respuesta.json();
  const { data: guitarra } = resultado;
  console.log(guitarra)

  if(guitarra.length === 0){
    return {
      notFound: true
    }
  }

  return {
    props: {
      guitarra,
    },
  };
}

function GuitarrasUrl({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debe seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada)
  };

  return (
    <Layout title={`Guitarra ${nombre}`} description={`Detalles de guitarra ${nombre} en la tienda`}>
      <main className={`contenedor ${styles.guitarra}`}>
        <img
          className={styles.imagen}
          src={imagen.data.attributes.url}
          alt={`imagen ${nombre}`}
        />
        <div className="contenido">
          <h3>{nombre}</h3>
          <p className={styles.texto}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            >
              <option value="0">Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Anañir al carrito"></input>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default GuitarrasUrl;
