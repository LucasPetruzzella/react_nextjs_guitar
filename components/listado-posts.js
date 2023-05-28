import Post from "./post";
import style from "../styles/blog.module.css"

function ListadoPosts({ posts }) {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className={style.blog}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default ListadoPosts;
