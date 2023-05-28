import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css"
import Image from "next/image"

function Post({ post }) {
  const { titulo, contenido, url, imagen, publishedAt } = post.attributes;
  return (
    <article className={styles.post}>
      <Image
        className="imagen"
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`imagen blog ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}> {formatearFecha(publishedAt)}</p>

        <p className={styles.resumen}> {contenido}</p>
        <Link href={`/posts/${url}`} className="enlace">Leer Post</Link>
      </div>
    </article>
  );
}

export default Post;