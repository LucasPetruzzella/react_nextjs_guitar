import Link from "next/link";
import { useRouter } from "next/router"
import imagen from "../public/img/carrito.png";
import styles from "../styles/layout.module.css"

function Navegacion() {
  const location = useRouter();
  return (
    <nav className={styles.navegacion}>
      <Link href="/" className={location.pathname === "/" ? styles.active : ""}>
        Inicio{" "}
      </Link>
      <Link
        href="/nosotros"
        className={location.pathname === "/nosotros" ? styles.active : ""}
      >
        Nosotros{" "}
      </Link>
      <Link
        href="/tienda"
        className={location.pathname === "/tienda" ? styles.active : ""}
      >
        Tienda{" "}
      </Link>

      <Link
        href="/blog"
        className={location.pathname === "/blog" ? styles.active : ""}
      >
        Blog{" "}
      </Link>

      <Link href="/carrito">
        <img src={imagen.src} />
      </Link>
    </nav>
  );
}

export default Navegacion;
