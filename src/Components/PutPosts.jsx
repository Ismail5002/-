import React from "react";
import { useDispatch } from "react-redux";

import { putPosts } from "../Store/posts/postsReducer";

const PutPosts = ({ id }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    title: "",
    description: "",
    images: "",
    price: 0,
    categoryId: 1,
    id: id,
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putPosts(values));
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <button onClick={handleSubmit} className="">
          Update
        </button>
      </form>
    </section>
  );
};

export default PutPosts;
