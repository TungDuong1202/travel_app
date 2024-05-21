import React from "react";
import "./halong.css";
import HaLong6 from "./img_HaLong/anh1.webp";
import HaLong1 from "./img_HaLong/anh2.jpg";
import HaLong2 from "./img_HaLong/anh6.jpg";
import HaLong3 from "./img_HaLong/anh3.webp";
import HaLong4 from "./img_HaLong/anh4.webp";
import HaLong5 from "./img_HaLong/anh5.webp";
import { GiBigWave } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import "../../../bootstrap-5.3.3-dist/css/bootstrap.min.css";

const HaLong = () => {
  return (
    <div>
      <div className="hopGioiThieu">
        <section className="py-5 text-center container Gioithieu">
          <div className="tieuDe">
            <h1 className="text-Tieude">Bạn lựa chọn du thuyền Hạ Long nào?</h1>
            <p className="text-Gioithieu">
              Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
            </p>
          </div>
        </section>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong6} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Heritage</b>
                  </p>
                  <ul className="groupItem">
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
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong1} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Milalux</b>
                  </p>
                  <ul className="groupItem">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2018
                    </li>
                    <li className="list-group-item">
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      <MdOutlineBedroomParent /> 21 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 4,550,000đ/ 1 khách
                      </b>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong2} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Madeline </b>
                  </p>
                  <ul className="groupItem">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2019
                    </li>
                    <li className="list-group-item">
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      <MdOutlineBedroomParent /> 22 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 3,250,000đ/ 1 khách
                      </b>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong3} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Scarlet Pear</b>
                  </p>
                  <ul className="groupItem">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2021
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <MdOutlineBedroomParent /> 20 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 4,650,000đ/ 1 khách
                      </b>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong4} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Indonchine</b>
                  </p>
                  <ul className="groupItem">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2017
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <MdOutlineBedroomParent /> 19 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 4,250,000đ/ 1 khách
                      </b>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={HaLong5} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Du thuyền Cartherice</b>
                  </p>
                  <ul className="groupItem">
                    <li className="list-group-item">
                      <GiBigWave /> Hạ thủy 2019
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <IoMdBoat /> Tàu vỏ kim loại
                    </li>
                    <li className="list-group-item">
                      {" "}
                      <MdOutlineBedroomParent /> 21 phòng
                    </li>
                    <li className="list-group-item price-and-button">
                      <b>
                        <MdAttachMoney /> 3,250,000đ/ 1 khách
                      </b>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm fw-bold"
                      >
                        Đặt ngay
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HaLong;
