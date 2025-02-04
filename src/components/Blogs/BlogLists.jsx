import React, { useEffect, useState } from "react";
import '../../assets/css/Blogs/BlogLists.css'

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://koadai.com/blogs/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-list">
      <h2>Latest Blogs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
