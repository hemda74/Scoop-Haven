import React, { MouseEventHandler } from 'react';
import LocalizationBtn from './LocaliazationBtn';
import FeaturedProducts from './FeaturedProducts';
import {
  FaUser,
  FaPlus,
  FaUtensils,
  FaAngleRight,
  FaHeadphonesAlt,
  FaRegEnvelope,
  FaClipboardCheck,
  FaSearch,
  FaEllipsisV,
  FaEnvelope,
  FaRegAddressCard,
  FaRegStickyNote,
  FaBell,
} from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

import {
  FaPhoneVolume,
  FaLocationDot,
  FaRegCircleQuestion,
  FaHouse,
  FaBoxArchive,
  FaFileLines,
  FaBuildingShield,
} from 'react-icons/fa6';

import { Product } from '../types';
import Link from 'next/link';
import useCart from '../hooks/use-cart';
interface ProductCard {
  items: Product[];
  data: Product;
}

const MainPageEn: React.FC<ProductCard> = ({ items, data }) => {
  // adding cart hook
  const cart = useCart();
  // on Add To Cart Function
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation();

    cart.addItem(data);
  };
  // Array of image URLs
  const images = [
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/cod.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/razorpay.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/stripe.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/flutterwave.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/paystack.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/mercadopago.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/paypal.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/myfatoorah.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/toyyibpay.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/phonepe.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/paytab.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/mollie.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/khalti.png',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/payment/xendit.png',
  ];

  return (
    <>
      <main>
        <section>
          <div className="row">
            <div className="col-md-12 col-lg-5 col-xl-4 col-xxl-5 order-1 order-lg-0 position-relative categories-left-side pb-lg-0 mb-lg-0 pb-3 mb-5">
              <div
                className="col px-0 py-3"
                data-bs-toggle="offcanvas"
                role="button"
                aria-controls="offcanvasinfo">
                <div className="card">
                  <div className="card-body">
                    <div className="align-items-center">
                      <Link
                        href="#"
                        className="theme-5-logo d-block text-center">
                        <img
                          src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
                          alt=""
                          className="rounded-3"
                        />
                      </Link>
                      <div className="w-100">
                        <h5 className="mb-3 px-3 text-center">Scoop Haven</h5>
                        <div className="peyment-overflow d-flex">
                          <div className="theme-3-image-gallery">
                            <ul className="image-container pay-card-imag p-0 justify-content-center">
                              {images.map((image, index) => (
                                <li key={index}>
                                  <img
                                    src={image}
                                    alt={`Payment Method ${index + 1}`}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn border mt-2 pt-2 pb-2 ps-2 pe-2"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample">
                            Store Info
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 order-1 order-lg-0 px-0">
                <div className="row categories-left-side position-relative">
                  <div className="col py-3">
                    <FeaturedProducts />
                  </div>
                  <div className="row px-5">
                    <section
                      id="gelato-IPViq"
                      className="theme-3-categoris-section px-0">
                      <div className="bg-light mb-3 margin_top">
                        <p className="page-title mb-0 fs-5 py-2">Gelato</p>
                      </div>
                      <div>
                        {items.map(product => (
                          <div
                            key={product.id}
                            className="row align-items-center border-bottom py-3 pointer">
                            <div className="col-12">
                              <div className="card thme3categories dark">
                                <div className="card-body p-0">
                                  <div className="text-section">
                                    <p className="title pb-1">{product.name}</p>
                                    <small className="mb-2 d_sm_none">
                                      {product.description}
                                    </small>
                                    <div className="d-flex align-items-baseline">
                                      <div className="products-price">
                                        <span className="price">
                                          {product.price}
                                        </span>
                                        <del>{product.discountedPrice}</del>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-1">
                                      <div
                                        className="load showload-200"
                                        style={{ display: 'none' }}></div>
                                      <button
                                        className="theme-3-product-icon "
                                        onClick={onAddToCart}>
                                        <span className="text-white mb-1">
                                          <FaPlus />
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={product.imageUrl}
                                    className="card-img-top border"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section
                      id="mango-mojito-R31wX"
                      className="theme-3-categoris-section px-0">
                      <div className="bg-light mb-3 margin_top">
                        <p className="page-title mb-0 fs-5 px-2 py-2">
                          Mango Mojito
                        </p>
                      </div>
                      <div>
                        {items.map(product => (
                          <div
                            key={product.id}
                            className="row align-items-center border-bottom py-3 pointer">
                            <div className="col-12">
                              <div className="card thme3categories dark">
                                <div className="card-body p-0">
                                  <div className="text-section">
                                    <p className="title pb-1">{product.name}</p>
                                    <small className="mb-2 d_sm_none">
                                      {product.description}
                                    </small>
                                    <div className="d-flex align-items-baseline">
                                      <div className="products-price">
                                        <span className="price">
                                          {product.price}
                                        </span>
                                        <del>{product.discountedPrice}</del>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-1">
                                      <div
                                        className="load showload-200"
                                        style={{ display: 'none' }}></div>
                                      <button
                                        className="theme-3-product-icon "
                                        onClick={onAddToCart}>
                                        <span className="text-white mb-1">
                                          <FaPlus />
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={product.imageUrl}
                                    className="card-img-top border"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section
                      id="kulfi-BnwEQ"
                      className="theme-3-categoris-section px-0">
                      <div className="bg-light mb-3 margin_top">
                        <p className="page-title mb-0 fs-5 px-2 py-2">Kulfi</p>
                      </div>
                      <div>
                        {items.map(product => (
                          <div
                            key={product.id}
                            className="row align-items-center border-bottom py-3 pointer">
                            <div className="col-12">
                              <div className="card thme3categories dark">
                                <div className="card-body p-0">
                                  <div className="text-section">
                                    <p className="title pb-1">{product.name}</p>
                                    <small className="mb-2 d_sm_none">
                                      {product.description}
                                    </small>
                                    <div className="d-flex align-items-baseline">
                                      <div className="products-price">
                                        <span className="price">
                                          {product.price}
                                        </span>
                                        <del>{product.discountedPrice}</del>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-1">
                                      <div
                                        className="load showload-200"
                                        style={{ display: 'none' }}></div>
                                      <button
                                        className="theme-3-product-icon "
                                        onClick={onAddToCart}>
                                        <span className="text-white mb-1">
                                          <FaPlus />
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={product.imageUrl}
                                    className="card-img-top border"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section
                      id="ice-cream-drinks-YB92o"
                      className="theme-3-categoris-section px-0">
                      <div className="bg-light mb-3 margin_top">
                        <p className="page-title mb-0 fs-5 px-2 py-2">
                          Ice Cream Drinks
                        </p>
                      </div>
                      <div>
                        {items.map(product => (
                          <div
                            key={product.id}
                            className="row align-items-center border-bottom py-3 pointer">
                            <div className="col-12">
                              <div className="card thme3categories dark">
                                <div className="card-body p-0">
                                  <div className="text-section">
                                    <p className="title pb-1">{product.name}</p>
                                    <small className="mb-2 d_sm_none">
                                      {product.description}
                                    </small>
                                    <div className="d-flex align-items-baseline">
                                      <div className="products-price">
                                        <span className="price">
                                          {product.price}
                                        </span>
                                        <del>{product.discountedPrice}</del>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-1">
                                      <div
                                        className="load showload-200"
                                        style={{ display: 'none' }}></div>
                                      <button
                                        className="theme-3-product-icon "
                                        onClick={onAddToCart}>
                                        <span className="text-white mb-1">
                                          <FaPlus />
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    src={product.imageUrl}
                                    className="card-img-top border"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className="d-lg-block d-none">
                    <div className="scrollToTopBtn_main col-md-12 col-lg-5 col-xl-4 col-xxl-5 order-1 order-lg-0">
                      <button
                        className="browse_menu_btn gap-1"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling">
                        <FaUtensils />

                        <span>Menu</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-7 col-xl-8 col-xxl-7 px-0 theme-3-header-position">
              <div className="theme-3-banner">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-650192e494063.webp"
                  alt=""
                  className="theme-3-banner-image"
                />
                <div className="theme-3-banner-leyer">
                  <div className="theme-3-header header-bg">
                    <div className="theme-3-iconbox">
                      <Link
                        href="/login"
                        className="theme-3-icon-box my-svg-class iconwhiteadd text-color-class">
                        <FaUser />
                      </Link>
                      <div className="d-lg-block d-none">
                        <button
                          type="button"
                          className="btn theme-3-icon-box my-svg-class iconwhiteadd text-color-class"
                          data-toggle="modal"
                          data-target="#exampleModal">
                          <IoIosSearch size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div className="theme-3-language-dropdown">
                        <div className="mt-1">
                          <LocalizationBtn />
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="container d-flex justify-content-center align-items-center m-auto">
                    <div className="col-md-6">
                      <a
                        href="https://restro.infotechgravity.com/scoop-haven"
                        className="logo">
                        <img
                          src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
                          alt=""
                          className="m-auto d-flex rounded-3"
                        />
                      </a>
                      <h2 className="theme-3-titlebanner">Scoop Haven</h2>
                      <h5 className="text-center pt-3">
                        Scoop Haven Is A Charming Ice Cream Parlor Nestled In
                        The Heart Of A Picturesque Town.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal subscription-popup fade"
                id="subscribe_modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content bg-lights">
                    <div className="modal-body p-md-0">
                      <div className="card rounded-4 border-0 bg-lights p-md-3">
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-4 d-none d-lg-block">
                            <img
                              src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/subscribe/subscribe_bg-6533ba13ce819.png"
                              alt=""
                              className="w-100 object-fit-cover rounded-4"
                            />
                          </div>
                          <div className="col-12 col-lg-8">
                            <h4 className="fs-2 mb-2 fw-600">
                              Sign up for the daily newsletter
                            </h4>
                            <p className="text-muted pb-3">
                              Stay Updated with Our Food Menu Website
                            </p>
                            <form
                              action="https://restro.infotechgravity.com/scoop-haven/subscribe"
                              method="post">
                              <input
                                type="hidden"
                                name="_token"
                                value="HkEkShzLryaKmPTUiWKHkmafCefcWeOVu7HkmsNA"
                              />{' '}
                              <input type="hidden" name="id" value="19" />
                              <div className="bg-body rounded-2 p-2 shadow-lg rounded-4 mb-3 mb-md-0">
                                <div className="input-group">
                                  <input
                                    className="form-control border-0 me-1"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    required
                                  />
                                  <button
                                    type="submit"
                                    className="btn btn-primary rounded-2 mb-0 btn-submit rounded-4 d-none d-md-inline-block">
                                    Subscribe!
                                  </button>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="btn w-100 btn-primary rounded-2 mb-0 btn-submit rounded-4 d-inline-block d-md-none">
                                Subscribe!
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mobile-menu-footer  d-lg-none">
                <ul className="d-flex align-items-center mobile-menu-active p-0 m-0">
                  <li className="">
                    <a
                      className="nav-link position-relative active "
                      href="https://restro.infotechgravity.com/scoop-haven">
                      <FaHouse />
                      <span className="act-8">Home</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="nav-link position-relative"
                      data-bs-toggle="modal"
                      data-bs-target="#searchModal">
                      <IoIosSearch />
                      <span className="act-8">Search</span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="nav-link position-relative"
                      data-bs-target="#offcanvascategori"
                      data-bs-toggle="offcanvas"
                      role="button"
                      aria-controls="offcanvascategori">
                      <FaBoxArchive />
                      <span className="act-8">Menu</span>
                    </a>
                  </li>
                  <li className="">
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
                  <li className="nav-link position-relative">
                    <a
                      data-bs-toggle="offcanvas"
                      href="#offcanvasinfo"
                      role="button"
                      aria-controls="offcanvasinfo">
                      <FaEllipsisV />
                      <span>More</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* backdrop menu for store info */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header border-bottom border-dark bg-light">
          <p
            className="title pb-1 fs-5 offcanvas-title text-center m-auto fw-600"
            id="offcanvascategoriLabel">
            Store Info
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="row">
            <div
              className="col p-3"
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="offcanvasinfo">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="" className="store-info-logo-img">
                      <img
                        src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
                        alt=""
                        className="rounded-3"
                      />
                    </a>
                    <div className="w-100 mx-3">
                      <h5 className="mb-0 mb-md-2">Scoop Haven</h5>
                      <div className="row g-2 align-items-center justify-content-between theme-4-contactinfo">
                        <div className="col col-md-6">
                          <a
                            href="tel:919499874557"
                            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                            <FaPhoneVolume />
                            <div className="d-md-block d-none">
                              <span className="px-2">Call us</span>
                            </div>
                          </a>
                        </div>
                        <div className="col col-md-6">
                          <a
                            href="mailto:scoophaven@gmail.com"
                            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                            <FaEnvelope />
                            <div className="d-md-block d-none">
                              <span className="px-3"> Email</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group theme-3-store-infos-list">
            <a
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="https://www.google.com/maps/place/323/4323 Wakefield Street,Philadelphia, Pennsylvania(PA), 19145">
              <FaLocationDot />
              <span className="w-100">
                4323 Wakefield Street,Philadelphia, Pennsylvania(PA), 19145
              </span>
            </a>
            <a
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="tel:919499874557">
              <FaHeadphonesAlt />
              <span className="px-2 fw-400 w-100 d-flex gap-1 align-items-center">
                Call US +919499874557
              </span>
            </a>
            <a
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="mailto:scoophaven@gmail.com">
              <FaEnvelope />
              <span className="px-2 fw-400 w-100 d-flex gap-1 align-items-center">
                Email scoophaven@gmail.com
              </span>
            </a>
            <a
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#examplehours"
              data-bs-whatever="@mdo">
              <FaRegCircleQuestion />
              <span className="px-2 fw-400 w-100 d-flex gap-1 align-items-center">
                <span
                  data-bs-toggle="modal"
                  data-bs-target="#examplehours"
                  data-bs-whatever="@mdo">
                  Working Hours
                </span>
              </span>
            </a>
            <Link
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="/blog-list">
              <FaClipboardCheck />
              <span className="px-2 fw-400">Blogs</span>
            </Link>
            <Link
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="/aboutus">
              <FaFileLines />
              <span className="px-2 fw-400">About us</span>
            </Link>
            <Link
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="/contact">
              <FaRegAddressCard />
              <span className="px-2 fw-400">Contact us</span>
            </Link>
            <Link
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="/terms_condition">
              <FaRegStickyNote />
              <span className="px-2 fw-400">Terms & Conditions</span>
            </Link>
            <Link
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href="/privacypolicy">
              <FaBuildingShield />
              <span className="px-2 fw-400">Privacy Policy</span>
            </Link>
            <a
              className="list-group-item rounded-0 d-flex align-items-center gap-2"
              href=""
              data-bs-toggle="modal"
              data-bs-target="#subscribe_modal">
              <FaBell />
              <span
                data-bs-toggle="modal"
                data-bs-target="#subscribe_modal"
                className="px-2 fw-400">
                Subscribe
              </span>
            </a>
          </ul>
        </div>
        <div className="offcanvas-footer">
          <div className="row g-0 theme-3-footer my-3 border-top">
            <div className="col rounded-3">
              <p>Copyright © 2023 Gravity Infotech. All Rights Reserved</p>
            </div>
          </div>
        </div>
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
                                type="submit "
                                className="btn myDanger w-100 rounded-0 rounded-3 m-1 text-center"
                                data-bs-dismiss="modal">
                                Cancel{' '}
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
      </div>
      {/* search modal */}
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
      {/* backdrop menu for categories */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header border-bottom border-dark bg-light">
          <p
            className="title pb-1 fs-5 offcanvas-title text-center m-auto fw-600"
            id="offcanvascategoriLabel">
            Categories
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="list-group theme-4-categories-list">
            <li className="list-group-item" data-bs-dismiss="offcanvas">
              <Link href="#gelato-IPViq">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/category/category-6501898ade4b2.png"
                    alt=""
                    className="rounded-circle categories_imgbox"
                  />
                  <p className="text-black" style={{ textDecoration: 'none' }}>
                    Gelato
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span>5</span>

                  <p className="text-black">
                    <FaAngleRight size={25} />
                  </p>
                </div>
              </Link>
            </li>
            <li className="list-group-item" data-bs-dismiss="offcanvas">
              <Link href="#mango-mojito-R31wX">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/category/category-65018b85d2e70.png"
                    alt=""
                    className="rounded-circle categories_imgbox"
                  />
                  <p className="text-black" style={{ textDecoration: 'none' }}>
                    Mango Mojito
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span>4</span>
                  <p className="text-black">
                    <FaAngleRight size={25} />
                  </p>
                </div>
              </Link>
            </li>
            <li className="list-group-item" data-bs-dismiss="offcanvas">
              <Link href="#kulfi-BnwEQ">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/category/category-65018f29ed763.png"
                    alt=""
                    className="rounded-circle categories_imgbox"
                  />
                  <p className="text-black" style={{ textDecoration: 'none' }}>
                    Kulfi
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span>6</span>
                  <p className="text-black">
                    <FaAngleRight size={25} />
                  </p>
                </div>
              </Link>
            </li>
            <li className="list-group-item" data-bs-dismiss="offcanvas">
              <Link href="#ice-cream-drinks-YB92o">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/category/category-650192ab6e8e2.png"
                    alt=""
                    className="rounded-circle categories_imgbox"
                  />
                  <p className="text-black" style={{ textDecoration: 'none' }}>
                    Ice Cream Drinks
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span>5</span>
                  <p className="text-black">
                    <FaAngleRight size={25} />
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPageEn;
