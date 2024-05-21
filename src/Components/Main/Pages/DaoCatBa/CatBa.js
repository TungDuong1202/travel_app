import React from "react";
import "./CatBa.css";
import { FaShip } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa6";
import { MdBathroom } from "react-icons/md";
import a1 from "./Ảnh/a1.jpg";
import a2 from "./Ảnh/a2.jpg";
import a3 from "./Ảnh/a3.jpg";
import a4 from "./Ảnh/a4.jpg";
import a5 from "./Ảnh/a5.jpg";
import a6 from "./Ảnh/a6.jpg";
const DaoCatBa = () => {
  return (
    <div>
      <section class="py-5 text-center container">
        <div class="row khunganhheader d-flex flex-column align-items-center">
          
            <h1 class="fw-light">Thông tin về du thuyền Đảo Cát Bà</h1>
            <p class="Direc2">
              Tận hưởng kỳ nghỉ đáng nhớ tại Cát Bà - hòn đảo lớn nhất tại vịnh
              Hạ Long với hàng loạt trải nghiệm thú vị.
            </p>
          
        </div>
      </section>


      <div class="album bg-body-tertiar khungbody">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a1} alt="Ảnh lỗi" />
                <div class="card-body">
                  <h3>Du thuyền Hiritage</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2019
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 23 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      4,300,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a2} alt="" />
                <div class="card-body">
                  <h3>Du thuyền Orchid</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2022
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 22 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      6,300,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a3} alt="" />
                <div class="card-body">
                  <h3>Du thuyền Azalea</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2017
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 26 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      4,300,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a4} alt="" />
                <div class="card-body">
                  <h3>Du thuyền Mon Cheri</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2024
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 24 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      5,500,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a5} alt="" />
                <div class="card-body">
                  <h3>Du thuyền Era</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2019
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 20 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      5,300,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img class="anhminhhoa" src={a6} alt="" />
                <div class="card-body">
                  <h3>Du thuyền La Regina</h3>
                  <ul class="card-text">
                    <li>
                      <FaShip /> Hạ thủy 2019
                    </li>
                    <li>
                      <FaAnchor /> Vỏ tàu Kim loại
                    </li>
                    <li>
                      <MdBathroom /> Số lượng: 20 phòng
                    </li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Đặt ngay
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      5,300,000đ / khách
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DaoCatBa;
