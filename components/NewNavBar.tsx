import React from 'react';
import LocalizationBtn from './LocaliazationBtn';

const NewNavBar = () => {
  return (
    <>
      <div className="container">
        <div className="Navbar">
          <a
            href="https://restro.infotechgravity.com/scoop-haven"
            className="logo mx-2">
            <img
              src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
              alt=""
            />
          </a>
          <div className="d-flex align-items-center gap-3">
            <nav className="align-items-center menu">
              <div id="deletebtn">
                <i className="fa-solid fa-xmark"></i>
              </div>
              <ul className="navbar-nav header-menu-items">
                <li className="nav-item dropdown header-dropdown-menu px-4">
                  <a
                    className="nav-link  "
                    href="https://restro.infotechgravity.com/scoop-haven">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown header-dropdown-menu px-4">
                  <a
                    className="nav-link  "
                    href="https://restro.infotechgravity.com/scoop-haven/aboutus">
                    About us
                  </a>
                </li>
                <li className="nav-item dropdown header-dropdown-menu px-4">
                  <a
                    className="nav-link  "
                    href="https://restro.infotechgravity.com/scoop-haven/contact">
                    Contact us
                  </a>
                </li>

                <li className="nav-item dropdown header-dropdown-menu px-4">
                  <a
                    href="https://restro.infotechgravity.com/scoop-haven/tablebook"
                    className="nav-link  ">
                    Table Book
                  </a>
                </li>

                <li className="nav-item dropdown header-dropdown-menu px-4">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal">
                    Search
                  </a>
                </li>
                <li className="nav-item dropdown header-dropdown-menu px-4 d-flex align-items-center d-none d-lg-inline-block">
                  <div className="d-flex align-items-center">
                    <a
                      className="nav-link position-relative  "
                      href="https://restro.infotechgravity.com/scoop-haven/cart">
                      <span>My Cart</span>
                    </a>
                    <a className="cart-counting mx-2" id="cartcount">
                      1
                    </a>
                  </div>
                </li>

                <a
                  href="https://restro.infotechgravity.com/scoop-haven/login"
                  className="login-button-mobile login-buuton d-lg-none">
                  Login
                </a>
              </ul>
            </nav>

            <LocalizationBtn />

            <a
              href="https://restro.infotechgravity.com/scoop-haven/login"
              className="login-buuton d-none d-lg-block">
              Login
            </a>
          </div>
        </div>
        <div className="bg-layer"></div>
      </div>
    </>
  );
};

export default NewNavBar;
