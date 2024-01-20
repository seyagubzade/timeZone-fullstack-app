import React from "react";
import "./styles.scss"
const NewArrivals = () => {
  return (
    <div className="newArrivals mt-5 mb-5">
      <div className="container pt-5 mb-5">
        <h2 className="mt-5 mb-5">New Arrivals</h2>
        <div className="row remove-margin">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="arrival-card">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                alt=""
                style={{width:"100%", height:"auto"}}
              />
              <h3 className="title text-center mt-4">
                Thermo Ball Etip Gloves
              </h3>
              <p className="price text-center text-danger">$ 43.12</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="arrival-card ">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                alt=""
                style={{width:"100%", height:"auto"}}
              />
              <h3 className="title text-center mt-4">
                Thermo Ball Etip Gloves
              </h3>
              <p className="price text-center text-danger">$ 43.12</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="arrival-card ">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                alt=""
                style={{width:"100%", height:"auto"}}
              />
              <h3 className="title text-center mt-4">
                Thermo Ball Etip Gloves
              </h3>
              <p className="price text-center text-danger">$ 43.12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
