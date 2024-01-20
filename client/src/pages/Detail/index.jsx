import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { DeleteById, GetById } from "../../store/watch/api_actions";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";
import { addToBasket } from "../../store/basket/basketSlice";

const Detail = () => {
  const { id } = useParams();
  const { currentData, loading, error } = useSelector((state) => state.watch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetById(id));
  }, [id]);
  return (
    <StyledWrapper>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="container">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        ) : currentData ? (
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src={currentData.image}
                alt="item-img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                  className="btn btn-light mt-3"
                  onClick={() => {
                    dispatch(DeleteById(currentData._id));
                    navigate("/")
                  }}
                >{" "}
                  Delete item <i class="fa-light fa-trash-can"></i>
                </button>{" "}
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-4">
              <h3>{currentData.name}</h3>
              <p>Description: {currentData.desc}</p>
              <p>Type: {currentData.type}</p>
              <p>Country: {currentData.country}</p>
              <p>Year: {currentData.year}</p>
              <p>Price: ${currentData.price}</p>
              <div className="actions">
                
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    dispatch(addToWishlist(currentData))
                  }}
                >
                  Add to wishlist
                </button>
                {" "}
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    dispatch(addToBasket(currentData))
                  }}
                >
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        ) : error ? (
          <div class="alert alert-danger" role="alert">
            {error.message}
          </div>
        ) : (
          <div class="alert alert-light" role="alert">
            Not Found
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  padding-top: 20px;
`;

export default Detail;
