import React from 'react'
import './home.css'
import HaLong from '../../img/anh1.webp'
import HaLong1 from '../../img/anh2.jpg'
import HaLong2 from '../../img/anh2.webp'
import HaLong3 from '../../img/anh3.webp'
import HaLong4 from '../../img/anh4.webp'
import HaLong5 from '../../img/anh5.webp'
const Home = () => {
  return (
    <div>
      <header></header>
      <div class="hopGioiThieu">
          <section class="py-5 text-center container Gioithieu">
              <div class="tieuDe">
                  <h1 class="text-Tieude">
                      Bạn lựa chọn du thuyền Hạ Long nào?
                  </h1>
                  <p class="text-Gioithieu">
                      Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
                  </p>
              </div>
          </section>
      </div>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                  <img src={HaLong} class="card-img-top" alt="" />
                  <div class="card-body">
                    <p class="card-text"><b>Du thuyền Heritage</b></p>
                    <ul class="list-group list-group-horizontal">
                      <li class="list-group-item">Hạ thủy 2019</li>
                      <li class="list-group-item">Tàu vỏ kim loại</li>
                      <li class="list-group-item">20 phòng</li>
                      <li class="list-group-item price-and-button">
                        <b>3,550,000đ/ 1 khách</b>
                        <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={HaLong1} class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text"><b>Du thuyền Milalux</b></p>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Hạ thủy 2019</li>
                    <li class="list-group-item">Tàu vỏ kim loại</li>
                    <li class="list-group-item">20 phòng</li>
                    <li class="list-group-item price-and-button">
                      <b>3,550,000đ/ 1 khách</b>
                      <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={HaLong2} class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text"><b>Du thuyền Ambassador </b></p>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Hạ thủy 2019</li>
                    <li class="list-group-item">Tàu vỏ kim loại</li>
                    <li class="list-group-item">20 phòng</li>
                    <li class="list-group-item price-and-button">
                      <b>3,550,000đ/ 1 khách</b>
                      <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={HaLong3} class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text"><b>Du thuyền Scarlet Pear</b></p>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Hạ thủy 2019</li>
                    <li class="list-group-item">Tàu vỏ kim loại</li>
                    <li class="list-group-item">20 phòng</li>
                    <li class="list-group-item price-and-button">
                      <b>3,550,000đ/ 1 khách</b>
                      <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={HaLong4} class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text"><b>Du thuyền Indonchine</b></p>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Hạ thủy 2019</li>
                    <li class="list-group-item">Tàu vỏ kim loại</li>
                    <li class="list-group-item">20 phòng</li>
                    <li class="list-group-item price-and-button">
                      <b>3,550,000đ/ 1 khách</b>
                      <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={HaLong5} class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text"><b>Du thuyền Cartherice</b></p>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item"> Hạ thủy 2019</li>
                    <li class="list-group-item">Tàu vỏ kim loại</li>
                    <li class="list-group-item">20 phòng</li>
                    <li class="list-group-item price-and-button">
                      <b>3,550,000đ/ 1 khách</b>
                      <button type="button" class="btn btn-primary btn-sm fw-bold">Đặt ngay</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  )
}
export default Home