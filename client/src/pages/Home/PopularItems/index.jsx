import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { GetAll } from "../../../store/watch/api_actions";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";
import { addToBasket } from "../../../store/basket/basketSlice";

const PopularItems = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.watch);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return data.filter((item) =>
        item.name?.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    });
  }, [data, searchValue]);
  return (
    <div className="popularItems mt-5 mb-5">
      <div className="container pt-5 mb-5">
        <div className="section-header mt-5 mb-2">
          <h2 className="">Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className="row remove-margin">
          {loading ? (
            <p>Loading</p>
          ) : data ? (
            filteredData?.map((item) => (
              <div className="col-12 col-md-6 col-lg-4">
                <div className="item-card mt-5">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Link to={`/detail/${item._id}`}>
                    <h3 className="title text-center mt-4">
                      Thermo Ball Etip Gloves
                    </h3>
                  </Link>
                  <p className="price text-center text-danger">$ 43.12</p>
                  <div className="actions text-center">
                    <button className="btn btn-outline-dark" onClick={()=>dispatch(addToWishlist(item))}>
                      Add to wishlist
                    </button>{" "}
                    <button className="btn btn-dark" onClick={()=>dispatch(addToBasket(item))}>Add to basket</button>
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <p>error</p>
          ) : (
            <p>not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
