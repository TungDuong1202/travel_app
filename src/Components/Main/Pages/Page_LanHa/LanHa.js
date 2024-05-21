import React from "react";
import "./lanha.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShip } from "react-icons/fa6";
import lanha1 from "../Page_LanHa/img_LanHa/image_1.png";
import lanha2 from "../Page_LanHa/img_LanHa/image_2.png";
import lanha3 from "../Page_LanHa/img_LanHa/image_3.png";
import lanha4 from "../Page_LanHa/img_LanHa/image_4.png";
import lanha5 from "../Page_LanHa/img_LanHa/image_5.png";
import lanha6 from "../Page_LanHa/img_LanHa/image_6.png";

const LanHa = () => {
  return (
    <>
      <div className="page-LanHa">
        <div className="Khung-GioiThieu">
          <section className="py-5 text-center container khung-Text Gioithieu">
            <div className="Tieu-De">
              <h1 className="Text-Tieude">
                Bạn lựa chọn du thuyền Hạ Long nào?
              </h1>
              <p className="Text-Gioithieu">
                Hãy lựa chọn tour du thuyền hạng sang giá tốt cho bạn
              </p>
            </div>
          </section>
        </div>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
                        {" "}
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
                        {" "}
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
                        {" "}
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
                        {" "}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanHa;
