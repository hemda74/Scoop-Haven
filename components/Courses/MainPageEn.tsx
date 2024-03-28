import React from 'react';
import Link from 'next/link';

const MainPageEn = () => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 grid grid-cols-1 | lg:grid-cols-12 lg:mb-6">
        <div className="flex flex-wrap items-center col-span-9">
          <div className="p-4 | lg:p-12">
            <h1 className="text-4xl text-gray-700 font-normal mb-1 | lg:mb-2">
              Courses | CASCO Learning |
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 | lg:grid-cols-12 lg:gap-12">
        <div
          id="filters-container"
          className="filters hidden fixed w-full h-screen overflow-y-auto top-0 left-0 bg-white px-4 pb-32 z-40 | lg:static lg:h-auto lg:block lg:col-span-3 lg:p-0 lg:z-0 | xl:col-span-2">
          <div className="sticky top-0 bg-white py-4 z-10 | lg:hidden">
            <button className="block w-full bg-gray-800 p-4 rounded text-white text-center | hover:bg-black">
              Apply Filters
            </button>
          </div>
          <div className="filter accordion--open list-reset mb-2 | lg:mb-6 dropdown">
            <button
              className=" w-full"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <div className="relative flex items-center mb-3 border-b-2 border-primary-100 cursor-pointer | accordion__header--open">
                Categories
              </div>
            </button>

            <ul className="facets hidden dropdown-menu">
              <li className="">
                <Link
                  href="/coursess/environmental"
                  className="dropdown-item block w-full text-sm truncate accordion__header--open">
                  Environmental
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/food-safety"
                  className="dropdown-item block w-full text-sm truncate accordion__header--open">
                  Food Safety
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/brcgs"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  BRCGS
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/health-and-safety"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  Health And Safety
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/quality"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  Quality
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/business-improvement"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  Business Improvement
                </Link>
              </li>
            </ul>
          </div>
          <div className="filter accordion--open list-reset mb-2 | lg:mb-6 dropdown">
            <button
              className=" w-full"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <div className=" relative flex items-center  mb-3 border-b-2 border-primary-100 cursor-pointer | accordion__header--open">
                Level
              </div>
            </button>

            <ul className="facets hidden dropdown-menu">
              <li className="">
                <Link
                  href="/coursess/foundation"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Foundation{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (12)
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/practitioner"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Practitioner{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (26)
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="/coursess/professional"
                  className="dropdown-item block w-full text-sm  truncate accordion__header--open">
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Professional{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (10)
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-9 | xl:col-span-10">
          <div className="w-full grid gap-2 mb-2 | lg:mb-4 grid-cols-2">
            <span className="flex items-center justify-center col-span-2 text-center | lg:col-span-1 lg:justify-start lg:text-left">
              <span className="text-sm font-bold">
                Showing 1-24 of 48 courses
              </span>
            </span>
          </div>
          <div className="courses">
            <div className="course">
              <div
                title="Environmental Sustainability Skills for the Workforce"
                className="content">
                <div className="image">
                  <Link
                    href="/courses/environmental-sustainability-skills-for-the-workforce-41"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 2x"
                        alt="Environmental Sustainability Skills for the Workforce"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/environmental-sustainability-skills-for-the-workforce-41"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        Environmental Sustainability Skills for the Workforce
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThe IEMA Environmental Sustainability Skills for
                  the Workforce course is a one-day awareness course 
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/environmental-sustainability-skills-for-the-workforce-41"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Understand &amp; Manage your Carbon Footprint"
                className="content">
                <div className="image">
                  <Link
                    href="/courses/understand-manage-your-carbon-footprint-58"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 2x"
                        alt="Understand &amp; Manage your Carbon Footprint"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/understand-manage-your-carbon-footprint-58"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        Understand &amp; Manage your Carbon Footprint
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis intensive one-day course is designed to equip
                  delegates with an appreciation and understanding of the basics
                 
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/understand-manage-your-carbon-footprint-58"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Introduction to Energy Management"
                className="content">
                <div className="image">
                  <Link
                    href="/courses/introduction-to-energy-management-57"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 2x"
                        alt="Introduction to Energy Management"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/introduction-to-energy-management-57"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        Introduction to Energy Management
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis one-day course is designed to give delegates
                  an introduction to energy management principles and practical
                  
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/introduction-to-energy-management-57"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Practical Waste Management &amp; Waste Minimisation"
                className="content">
                <div className="image">
                  <Link
                    href="/courses/practical-waste-management-waste-minimisation-55"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 2x"
                        alt="Practical Waste Management &amp; Waste Minimisation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/practical-waste-management-waste-minimisation-55"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        Practical Waste Management &amp; Waste Minimisation
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionWith a minefield of legislation on waste, rising
                  waste costs and customer and other stakeholders demanding
                 
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£425.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/practical-waste-management-waste-minimisation-55"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div title="ISO 14001:2015 Foundation" className="content">
                <div className="image">
                  <Link
                    href="/courses/iso-140012015-foundation-7"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 2x"
                        alt="ISO 14001:2015 Foundation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/iso-140012015-foundation-7"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        ISO 14001:2015 Foundation
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionA one-day awareness course designed to provide
                  attendees with an introduction to environmental management
                 
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/iso-140012015-foundation-7"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Environmental Legislation Awareness"
                className="content">
                <div className="image">
                  <Link
                    href="/courses/environmental-legislation-awareness-34"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 2x"
                        alt="Environmental Legislation Awareness"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/environmental-legislation-awareness-34"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        Environmental Legislation Awareness
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis intensive one-day course is designed to equip
                  delegates with an appreciation and understanding of the
                 
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/environmental-legislation-awareness-34"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="course">
              <div title="IOSH Managing Safely" className="content">
                <div className="image">
                  <Link
                    href="/courses/iosh-managing-safely-63"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 2x"
                        alt="IOSH Managing Safely"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 2x"
                      />
                    </picture>
                  </Link>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <Link
                      href="/courses/iosh-managing-safely-63"
                      className="inline-block">
                      <h2 className="title text-primary-100">
                        IOSH Managing Safely
                      </h2>
                    </Link>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis three-day IOSH Managing Safely course is a
                  risk management course designed to provide supervisors and
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£545.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <Link
                        href="/courses/iosh-managing-safely-63"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description mt-6 text-sm text-left | lg:mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default MainPageEn;
