import Link from 'next/link';
import React from 'react';
import useCart from '../hooks/use-cart';
import { FaEllipsisVertical, FaHouse } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

const BlogEn = () => {
  const cart = useCart();

  return (
    <>
      {/* <div className="mobile-menu-footerd-lg-none">
        <ul className="d-flex align-items-center mobile-menu-active p-0 m-0">
          <li className="nav-link position-relative">
            <Link className=" " href="">
              <FaHouse />
              <span className="act-8">Home</span>
            </Link>
          </li>
          <li className="nav-link position-relative">
            <Link href="" data-bs-toggle="modal" data-bs-target="#searchModal">
              <FaSearch />
              <span className="act-8">Search</span>
            </Link>
          </li>
          <li className="nav-link position-relative">
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
              <span className="cart-counting-color svg-bg" id="cartcount">
                {cart.items.length}
              </span>
            </Link>
          </li>
          <li className="nav-link position-relative">
            <a
              href="javascript:void(0)"
              className="togl-btn text-dark toggle_button">
              <FaEllipsisVertical />
              <span>More</span>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="breadcrumb-sec">
        <div className="container">
          <nav className="px-3">
            <h3 className="page-title text-white mb-2">Our Latest Blogs</h3>
            <ol className="breadcrumb d-flex text-capitalize">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item ">
                <Link href="/blog-list" className="text-white">
                  Blogs
                </Link>
              </li>
              <li className="breadcrumb-item active ">Our Latest Blogs</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="theme-1-margin-top">
        <div className="container">
          <div className="row blogs-card pt-0 g-3">
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-7">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9cdcfc959f.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-6">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9cd781086e.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-5">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9cd3349458.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-4">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9caa102698.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-3">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9ca5295fe3.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9cc6e0313e.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-1">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9c986df173.jpg"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="https://restro.infotechgravity.com/scoop-haven/blog-details-what-is-lorem-ipsum-1">
                <div className="card h-100 rounded-5">
                  <img
                    src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/blog/blog-64d9ca012189b.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <div className="card-body py-4">
                    <p className="title mt-2 blog-title">
                      What is Lorem Ipsum?
                    </p>
                    <span className="blog-description">
                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center m-auto mb-3">
            <nav aria-label="Page navigation example"></nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogEn;
