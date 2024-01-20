import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { removeByIdFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.wishlist);
  return (
    <div className="container">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className="mt-5 mb-3">
        <h3>Wishlist Table</h3>
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
                    onClick={() => dispatch(removeByIdFromWishlist(item._id))}
                  >
                    Remove
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

export default Wishlist;
