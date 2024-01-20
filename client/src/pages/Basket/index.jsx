import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount, removeFromBasket } from "../../store/basket/basketSlice";
import { Link } from "react-router-dom";

const Basket = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.basket);
  return (
    <div className="container">
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="mt-5 mb-3">
        <h3>Basket Items</h3>
      </div>
      <table class="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Total Price</th>
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
                <td>${item.price}</td>
                <td>
                  <div className="bg-light text-center" style={{width: "max-content"}}>
                    <button className="btn btn-light" onClick={()=>dispatch(decreaseAmount(item._id))}>-</button>
                    <span className="bg-light" style={{ padding: "0 12px" }}>
                      {item.count}
                    </span>
                    <button className="btn btn-light" onClick={()=>dispatch(increaseAmount(item._id))}>+</button>
                  </div>
                </td>
                <td>${item.totalPrice}</td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(removeFromBasket(item._id))}
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

export default Basket;
