import React from "react";
import { useDispatch } from "react-redux";
import { useCreatePostMutation } from "../Store/api/postApi";

import { postPosts } from "../Store/posts/postsReducer";

const PostPosts = () => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    title: "",
    description: "",
    images: "",
    price: 0,
    categoryId: 1,
  });
  const data = useCreatePostMutation(values);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPosts(values));
    setValues({
      ...values,
      title: "",
      description: "",
      images: "",
      price: 0,
      categoryId: 1,
    });
  };

  return (
    <section className="">
      <form className="">
        <div className="mt-10 p-10 flex flex-col justify-center">
          <div className="m-1 p-1 flex gap-3 justify-center items-center ">
            <p>Your title</p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={values.title}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="m-1 p-1 flex gap-3 justify-center items-center">
            <p>Your description</p>

            <input
              type="text"
              name="description"
              placeholder="description"
              value={values.description}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="m-1 p-1 flex gap-3 justify-center items-center">
            <p>Your image</p>
            <input
              type="text"
              name="images"
              placeholder="images"
              value={values.images}
              autoComplete="off"
              onChange={(e) => {
                setValues({ ...values, images: [`${e.target.value}`] });
              }}
              required
            />
          </div>
          <div className="m-1 p-1 flex gap-3 justify-center items-center">
            <p>price</p>
            <input
              type="text"
              name="price"
              placeholder="price"
              value={values.price}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="m-1 p-1 flex gap-3 justify-center items-center">
            <button onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PostPosts;
