import React from "react";
import { useDispatch } from "react-redux";
import { deletePosts, getPosts } from "../Store/posts/postsReducer";
import { Link } from "react-router-dom";

const GetPosts = ({ posts }) => {
  const dispatch = useDispatch();
  console.log(posts);
  const getPost = () => {
    dispatch(getPosts());
  };
  const deletePost = (id) => {
    console.log(id);
    dispatch(deletePosts(id));
  };
  return (
    <div>
      <button className="ownbtn" onClick={getPost}>
        GET
      </button>
      <div className="">
        {posts.map((p) => {
          return (
            <div key={p.id}>
              <div>{p.title}</div>
              <Link to={`/GET/products/${p.id}`}>
                {p.id}
                <img src={p.images[0]} alt={p.title} />
              </Link>
              <div>
                <button
                  style={{ width: 200, height: 100 }}
                  onClick={() => {
                    deletePost(p.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetPosts;
