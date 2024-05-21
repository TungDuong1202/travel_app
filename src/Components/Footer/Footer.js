import React from "react";
import "./footer.css";

import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2024 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" style={{ width: 24, height: 24 }}>
                  <FaTwitter />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" style={{ width: 24, height: 24 }}>
                  <FaInstagram />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" style={{ width: 24, height: 24 }}>
                  <FaFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
