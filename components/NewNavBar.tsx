import React from 'react';
import LocalizationBtn from './LocaliazationBtn';
import Link from 'next/link';
import useCart from '../hooks/use-cart';

const NewNavBar = () => {
  // adding cart hook
  const cart = useCart();
  return (
    <>
      <header>
        <div className="header-main fixed-top">
          <div className="container">
            <div className="Navbar">
              <Link href="/" className="logo mx-2">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
                  alt=""
                />
              </Link>
              <div className="d-flex align-items-center gap-3">
                <nav className="align-items-center menu">
                  <ul className="navbar-nav header-menu-items">
                    <li className="nav-item dropdown header-dropdown-menu px-4">
                      <Link
                        className="nav-link fw-bold fs-6"
                        href="/"
                        data-trans="home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown header-dropdown-menu px-4">
                      <Link
                        className="nav-link fw-bold fs-6"
                        href="/aboutus"
                        data-trans="aboutus">
                        About us
                      </Link>
                    </li>
                    <li className="nav-item dropdown header-dropdown-menu px-4">
                      <Link
                        className="nav-link fw-bold fs-6"
                        href="/contact"
                        data-trans="contact">
                        Contact us
                      </Link>
                    </li>

                    <li className="nav-item dropdown header-dropdown-menu px-4">
                      <Link
                        href="/tablebook"
                        className="nav-link fw-bold fs-6"
                        data-trans="tablebook">
                        Table Book
                      </Link>
                    </li>

                    <li className="nav-item dropdown header-dropdown-menu px-4">
                      <a
                        className="nav-link fw-bold fs-6"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        data-trans="search">
                        Search
                      </a>
                    </li>
                    <li className="nav-item dropdown header-dropdown-menu px-4 mt-2  d-flex align-items-center d-none d-lg-inline-block">
                      <Link
                        href="/cart"
                        className="position-relative cart-icon-color d-lg-block d-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19.691"
                          height="25"
                          viewBox="0 0 19.691 25"
                          className="theme-3-cart mx-1 active svg-bg">
                          <path
                            id="Path_8965"
                            data-name="Path 8965"
                            d="M32.526,10.38H29.137V9.621a5.667,5.667,0,1,0-11.334,0v.759H14.413a.8.8,0,0,0-.813.813V26.812A2.089,2.089,0,0,0,15.688,28.9H31.2a2.089,2.089,0,0,0,2.088-2.088V11.167A.733.733,0,0,0,32.526,10.38Zm-13.1-.786a4.04,4.04,0,1,1,8.08,0v.759H19.43Zm11.8,17.679H15.715a.486.486,0,0,1-.488-.488V11.98H31.713v14.8A.486.486,0,0,1,31.225,27.273Z"
                            transform="translate(-13.6 -3.9)"></path>
                        </svg>
                        <span
                          className="cart-counting-color svg-bg"
                          id="cartcount">
                          {cart.items.length}
                        </span>
                      </Link>
                    </li>

                    <Link
                      href="/login"
                      className="login-button-mobile login-buuton d-lg-none"
                      data-trans="login">
                      Login
                    </Link>
                  </ul>
                </nav>

                <LocalizationBtn />

                <Link
                  href="/login"
                  className="login-buuton d-none d-lg-block"
                  data-trans="login">
                  Login
                </Link>
              </div>
            </div>
            <div className="bg-layer"></div>
          </div>
        </div>
      </header>
      <div className="d-flex align-items-center float-end">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title fs-3" id="exampleModalLabel">
                  Modal title
                </span>
              </div>
              <div className="modal-body px-3 px-md-4 mb-0">
                <form
                  className=""
                  action="https://restro.infotechgravity.com/scoop-haven/search"
                  method="get">
                  <div className="col-12">
                    <div className="row align-items-center justify-content-between g-0">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                      <div className="col-12">
                        <input type="hidden" name="vendor_id" value="19" />
                        <input
                          type="text"
                          placeholder="Ex.accessories, man, dresses, etc..."
                          name="search"
                          id="searchText"
                          className="py-2 input-width px-2 mt-3 mb-1 w-100 border rounded-5 fs-7 search_input"
                          value=""
                        />
                        <div className="search-btn-group">
                          <div className="d-flex justify-content-between align-items-center mt-3 mt-md-4">
                            <a
                              type="submit"
                              className="btn btn-danger w-100 p-3 rounded-0 rounded-3 m-1 text-center"
                              data-bs-dismiss="modal">
                              Cancel
                            </a>
                            <input
                              type="submit"
                              className="btn-primary w-100 rounded-0 rounded-3 m-1 text-center"
                              value="Submit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNavBar;
