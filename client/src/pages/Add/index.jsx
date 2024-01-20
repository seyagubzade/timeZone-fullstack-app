import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, DeleteById, GetAll } from "../../store/watch/api_actions";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Add = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.watch);
  const navigate = useNavigate();
  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="container">
      <Helmet>
        <title>Add New</title>
      </Helmet>
      <h2>Add new</h2>
      <Formik
        initialValues={{
          name: "",
          desc: "",
          price: 0,
          model: "",
          image: "",
        }}
        onSubmit={async (values) => {
          dispatch(AddNew(values));
          navigate("/");
        }}
      >
        <Form>
          <div class="form-group mb-3">
            <label htmlFor="name">Name</label>
            <Field
              class="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="desc">Description</label>
            <Field
              class="form-control"
              id="desc"
              name="desc"
              placeholder="Description"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="price">Price</label>
            <Field
              class="form-control"
              id="price"
              name="price"
              placeholder="Price"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="model">Model</label>
            <Field
              class="form-control"
              id="model"
              name="model"
              placeholder="Model"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="image">Image URL</label>
            <Field
              class="form-control"
              id="image"
              name="image"
              placeholder="Image"
            />
            <small class="form-text text-muted">
              Paste URL here, example:
              https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png
            </small>
          </div>

          <button className="btn btn-dark" type="submit">
            Add new
          </button>
        </Form>
      </Formik>

      <div className="mt-5">
        <h3>Full Table</h3>
      </div>
      <table class="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p>Loading...</p>
          ) : data ? (
            data.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.model}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(DeleteById(item._id))}
                  >
                    Delete
                  </button>{" "}
                  {"  "}
                  <Link className="btn btn-dark" to={`/detail/${item._id}`}>
                    Detail
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <p>Not found</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Add;
