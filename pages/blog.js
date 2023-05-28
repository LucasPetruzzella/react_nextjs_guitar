import Layout from "../components/layout";
import ListadoPosts from "../components/listado-posts";

export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const resultado = await respuesta.json();
  const posts = resultado.data;
  
  return {
    props: {
      posts
    }
  }

}


function Blog({posts}) {
  return (
    <Layout title={"Blog"} description="Blog GuitarLA tienda de música">
      {" "}
      <main className="contenedor">
        <ListadoPosts posts={posts} />
      </main>
    </Layout>
  );
}

export default Blog;
