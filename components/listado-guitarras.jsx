import Guitarra from "./guitarra";
import styles from "../styles/grid.module.css"

function ListadoGuitarras({ guitarras }) {
  return (
    <div>
      <h2 className="heading">Nuestra Colección</h2>

<div className={styles.grid}>
      {guitarras && guitarras.length && (
          guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra?.attributes} />
          ))
      )}
              </div>

    </div>
  );
}

export default ListadoGuitarras;
