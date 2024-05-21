import React from "react";
import "./lanha.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaShip } from "react-icons/fa6";
import lanha1 from "./img_LanHa/image_1.png";
import lanha2 from "./img_LanHa/image_2.png";
import lanha3 from "./img_LanHa/image_3.png";
import lanha4 from "./img_LanHa/image_4.png";
import lanha5 from "./img_LanHa/image_5.png";
import lanha6 from "./img_LanHa/image_6.png";

const LanHa = () => {
  return (
    <>
      <div class="hopGioiThieu">
        <section class="py-5 text-center container Gioithieu">
          <div class="tieuDe">
            <h1 class="text-Tieude">Bạn lựa chọn du thuyền Hạ Long nào?</h1>
            <p class="text-Gioithieu">
              Hãy lựa chọn tour du thuyền hạng sang giá tốt cho bạn
            </p>
          </div>
        </section>
      </div>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha1} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền Indochine</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">3,550,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha2} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền Aqua of the seas</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2023 - Tàu vỏ kim loại - 27 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">5,500,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha3} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền La Casta Daily</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2022 - Tàu vỏ kim loại - 10 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">1,750,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha4} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền Verdure Lotus</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 15 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">2,550,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha5} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền Sea Octopus</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2022 - Tàu vỏ kim loại - 18 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">4,550,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="khung">
                  <div class="card-head">
                    <img src={lanha6} alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-text">Du thuyền Genesis Regal</h5>
                    <p class="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 18 phòng
                    </p>
                    <div class="Gia-mua">
                      <p class="Gia-tien">3,000,000đ / khách</p>
                      <button class=" btn-info rounded-pill px-3" type="button">
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanHa;
