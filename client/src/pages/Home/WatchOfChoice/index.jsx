import React from "react";
import "./styles.scss";
const WatchOfChoice = () => {
  return (
    <div className="watch-choice">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="choice-text">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button className="btn choice-btn">Show Watches</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="choice-text p-3">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button className="btn choice-btn">Show Watches</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOfChoice;
