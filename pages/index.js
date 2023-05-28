import Layout from '../components/layout';
import ListadoGuitarras from '../components/listado-guitarras';
import ListadoPosts from '../components/listado-posts';
import Curso from '../components/curso';

async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const resultado = await respuesta.json();
  
  return resultado.data;
}

async function getPost(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const resultado = await respuesta.json();
  const posts = resultado.data;

 return posts
}

async function getGuitarras(){
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const resultado = await respuesta.json();

 const { data: guitarras } = resultado

 return guitarras
}

export async function getServerSideProps(){
  const [posts,guitarras,curso] = await Promise.all([getPost(),getGuitarras(),getCurso()])

  return {
    props: {
      posts,
      guitarras,
      curso
    }
  }
}

export default function Home({posts, guitarras, curso}) {
  
  return (
    <>
    <Layout
      title={'Inicio'}
      description='Tienda de guitarras'>
      <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
     
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
      
    </Layout>
      
    </>
  );
}
