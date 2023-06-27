import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  const { posts } = props;
  return (
    <section className={classes.posts} aria-labelledby="all-posts-title">
      <h1 id="all-posts-title">All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
