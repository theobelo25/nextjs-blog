import PostsGrid from "../posts/posts-grid";

import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.latest} aria-labelledby="featured-title">
      <h2 id="featured-title">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
