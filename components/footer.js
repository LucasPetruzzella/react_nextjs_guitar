import Navegacion from "./navegacion"
import styles from "../styles/layout.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <Navegacion />

            <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer