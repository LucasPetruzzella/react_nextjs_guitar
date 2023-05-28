import Link from "next/link";
import styles from "../styles/guitarras.module.css"
import Image from "next/image"

function Guitarra({ guitarra }) {
  const { nombre, descripcion, imagen, precio, url } = guitarra;
  const urlImagen = imagen.data.attributes.formats.medium.url

  return (
    <div className={styles.guitarra}>
        <Image src={urlImagen} alt={`imagen guitarra ${nombre}`} width={450} height={250}></Image>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}> {descripcion}</p>
        <p className={styles.precio}> ${precio}</p>

        <Link 
            href={`/guitarras/${url}`}
            className={styles.enlace}
        >Ver producto</Link>
      </div>
    </div>
  );
}

export default Guitarra;
