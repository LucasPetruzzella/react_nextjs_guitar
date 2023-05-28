import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css"
import Image from "next/image"
import Layout from "../../components/layout";

export async function getServerSideProps(data){
    const url = data.query.url
    
    const urlApi = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`;

    const respuesta = await fetch(urlApi);
    const resultado = await respuesta.json();
  
    const post = resultado.data;

    return {
        props: {
            post
        }
    };
}

function PostUrl({post}) {
    const { titulo, contenido, imagen, publishedAt } = post[0].attributes
    return (
      <Layout>
      <article className={`contenedor ${styles.post} ${styles['mt-3']}`}>
           <Image
          className="imagen"
          src={imagen?.data?.attributes.formats.small.url}
          alt={`imagen blog ${titulo}`}
          height={600}
          width={1000}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}> {formatearFecha(publishedAt)}</p>
  
          <p className={styles.texto}> {contenido}</p>
        </div>
          </article>

          </Layout>
    )
}

export default PostUrl