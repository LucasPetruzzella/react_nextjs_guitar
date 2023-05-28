import Link from "next/link";
import Navegacion from "./navegacion";
import imgLogo from "../public/img/logo.svg"
import Image from 'next/image'
import styles from '../styles/layout.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.logo} src={imgLogo.src} alt="imagen logo" width={300} height={40} />
        </Link>
        <div className={styles.logo}></div>
        
          <Navegacion />
      </div>
    </header>
  );
};

export default Header;
