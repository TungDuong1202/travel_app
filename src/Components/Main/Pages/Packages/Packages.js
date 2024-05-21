import React from "react";
import "./packages.css";
import "../../../bootstrap-5.3.3-dist/css/bootstrap.min.css";

import { FaShip } from "react-icons/fa6";

import halong1 from "../HaLong/img_HaLong/anh1.webp";
import halong2 from "../HaLong/img_HaLong/anh2.jpg";
import halong3 from "../HaLong/img_HaLong/anh6.jpg";
import halong4 from "../HaLong/img_HaLong/anh3.webp";
import halong5 from "../HaLong/img_HaLong/anh4.webp";
import halong6 from "../HaLong/img_HaLong/anh5.webp";
import lanha1 from "../Page_LanHa/img_LanHa/image_1.png";
import lanha2 from "../Page_LanHa/img_LanHa/image_2.png";
import lanha3 from "../Page_LanHa/img_LanHa/image_3.png";
import lanha4 from "../Page_LanHa/img_LanHa/image_4.png";
import lanha5 from "../Page_LanHa/img_LanHa/image_5.png";
import lanha6 from "../Page_LanHa/img_LanHa/image_6.png";
import catba1 from "../DaoCatBa/Ảnh/a1.jpg";
import catba2 from "../DaoCatBa/Ảnh/a2.jpg";
import catba3 from "../DaoCatBa/Ảnh/a3.jpg";
import catba4 from "../DaoCatBa/Ảnh/a4.jpg";
import catba5 from "../DaoCatBa/Ảnh/a5.jpg";
import catba6 from "../DaoCatBa/Ảnh/a6.jpg";

const Packages = () => {
  return (
    <div>
      <section className="jumbotronn text-center headerPackages">
        <div className="container">
          <h1 className="jumbotron-heading">Du thuyền mới và phổ biến nhất</h1>
        </div>
      </section>
      <div className="album py-3 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong1} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Heritage
                    </h5>
                    <p className="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">3,550,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong2} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Milalux
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2018 - Tàu vỏ kim loại - 21 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,550,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong3} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Madeline
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 22 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">3,250,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong4} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Scarlet Pear
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2021 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,650,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong5} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Indonchine
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2017 - Tàu vỏ kim loại - 19 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,250,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={halong6} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Cartherice
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 21 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">3,250,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha1} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Indochine
                    </h5>
                    <p className="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">3,550,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha2} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet">
                    <h5 className="card-text card-NameShip">
                      Du thuyền Aqua of the seas
                    </h5>
                    <p className="thong-tin">
                      {" "}
                      <FaShip /> - Hạ thuỷ 2023 - Tàu vỏ kim loại - 27 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">5,500,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha3} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet">
                    <h5 className="card-text card-NameShip">
                      Du thuyền La Casta Daily
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2022 - Tàu vỏ kim loại - 10 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">1,750,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha4} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet">
                    <h5 className="card-text card-NameShip">
                      Du thuyền Verdure Lotus
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 15 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">2,550,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha5} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet">
                    <h5 className="card-text card-NameShip">
                      Du thuyền Sea Octopus
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2022 - Tàu vỏ kim loại - 18 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,550,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={lanha6} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet">
                    <h5 className="card-text card-NameShip">
                      Du thuyền Genesis Regal
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 18 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">3,000,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua btn-Datmua"
                        type="button"
                      >
                        Đặt mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba1} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Hiritage
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 23 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,350,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba2} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Orchid
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2022 - Tàu vỏ kim loại - 22 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">6,250,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba3} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Azalea
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2017 - Tàu vỏ kim loại - 26 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">4,300,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba4} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Mon Cheri
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2024 - Tàu vỏ kim loại - 24 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">5,250,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba5} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền Era
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">5,350,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm ship">
                <div className="Khung-anh">
                  <div className="card-head">
                    <img className="img-ship" src={catba6} alt="" />
                  </div>
                  <div className="card-body card-ChiTiet card-ChiTiet">
                    <h5 className="card-text card-NameShip card-NameShip">
                      Du thuyền La Regina
                    </h5>
                    <p className="thong-tin">
                      <FaShip /> - Hạ thuỷ 2019 - Tàu vỏ kim loại - 20 phòng
                    </p>
                    <div className="Gia-mua">
                      <p className="Gia-tien">5,300,000đ / khách</p>
                      <button
                        className="btn btn-info rounded-pill px-3 btn-Datmua"
                        type="button"
                      >
                        Đặt ngay
                      </button>
                    </div>
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

export default Packages;
