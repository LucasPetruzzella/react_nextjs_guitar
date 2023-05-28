import Layout from "../components/layout";
import ListadoGuitarras from "../components/listado-guitarras";

/*export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const resultado = await respuesta.json();

 const { data: guitarras } = resultado

  return { props: {
    guitarras
  }};
}*/

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const resultado = await respuesta.json();

 const { data: guitarras } = resultado

  return { props: {
    guitarras
  }};
}

function Tienda({guitarras}) {

  return (
    <Layout
      title={"Tienda de Guitarras"}
      description="GuitarLA - Tienda de música"
    >
     
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      
    </Layout>
  );
}

export default Tienda;
