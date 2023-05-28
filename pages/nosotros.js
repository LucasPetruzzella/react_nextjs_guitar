import imagen from "../public/img/nosotros.jpg";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"
import Image from "next/image"

function Nosotros() {
  return (
    <Layout title={"Nosotros"} description="Sobre nosotros GuitarLA tienda de música">
      <main className={`contenedor`}>
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src={imagen} alt="imagen nosotros" />

          <div>
            Cras vel interdum tellus. Aliquam ullamcorper gravida ornare.
            Curabitur eget luctus nibh. Suspendisse gravida arcu in augue
            viverra tempus. Integer magna urna, accumsan eget interdum sit amet,
            luctus et nibh. Phasellus malesuada augue sed risus varius sagittis.
            Donec convallis dolor eget pharetra eleifend. Aliquam sollicitudin
            pretium odio, eget lobortis orci auctor a. Nulla luctus ex et nisi
            accumsan bibendum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>

      </main>
    </Layout>
  );
}
export default Nosotros;
