import React from "react";
import "../../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "./home.css";
import { Link } from "react-router-dom";

import { IoMdBoat } from "react-icons/io";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { GiBigWave } from "react-icons/gi";

import img1 from "./home_images/du_thuyen.jpg";
import img2 from "./home_images/anh2.jpg";
import img3 from "./home_images/anh2.webp";
const Home = () => {
  return (
    <div>
      <div className="headerDiv container">
        <section className="py-5 text-center container">
          <div className="container textHeader">
            <h1 className="text texth1">Chào mừng bạn đến với Travel</h1>
            <p className="text">Hàng nghìn du thuyền đang đợi bạn!</p>
          </div>
        </section>
      </div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Du thuyền mới và phổ biến nhất</h1>
          <p className="lead text-muted">
            Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và
            phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế
            giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.
          </p>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={img1} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Heritage</b>
                  </p>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2019
                    </li>
                    <li className="list-group-item">
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      <MdOutlineBedroomParent /> 20 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 3,550,000đ/ 1 khách
                      </b>
                    </li>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Đặt ngay
                    </button>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={img2} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Milalux</b>
                  </p>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2019
                    </li>
                    <li className="list-group-item">
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      <MdOutlineBedroomParent /> 20 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 3,550,000đ/ 1 khách
                      </b>
                    </li>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Đặt ngay
                    </button>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={img3} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Ambassador </b>
                  </p>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2019
                    </li>
                    <li className="list-group-item">
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      <MdOutlineBedroomParent /> 20 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 3,550,000đ/ 1 khách
                      </b>
                    </li>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Đặt ngay
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="allLink">
            <Link to="/packages" className="link">
              Xem tất cả...
            </Link>
          </div>
        </div>
      </div>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Địa điểm nổi bật</h1>
          <p className="lead text-muted">
            Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến
            thiên đường thiên nhiên.
          </p>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <Link to="/halong" className="nav-link">
                <div className="card shadow-sm">
                  <img src={img1} className="card-img-top" alt="" />
                  <div className="card-body place">
                    <div className="card-text">
                      <h4>Vịnh Hạ Long</h4>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Xem ngay
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/lanha" className="nav-link">
                <div className="card shadow-sm">
                  <img src={img2} className="card-img-top" alt="" />
                  <div className="card-body place">
                    <div className="card-text">
                      <h4>Vịnh Lan Hạ</h4>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Xem ngay
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/catba" className="nav-link">
                <div className="card shadow-sm">
                  <img src={img3} className="card-img-top" alt="" />
                  <div className="card-body place">
                    <div className="card-text">
                      <h4>Đảo Cát Bà</h4>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-bold"
                    >
                      Xem ngay
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
