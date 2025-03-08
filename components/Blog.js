const Blog = ({ post }) => {
    return (
      <div className="blog-post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    );
  };
  
  export default Blog;
  