import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from '../../styles/AccreditedBodiesCompaines.module.css';
export default class SwipeToSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="pad-80  off-screen off-screen--hide off-screen--fade-up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="title title--lg red-1-color color-red-1">
                Recognition
              </h2>
              <p className="intro pad-btm-mob text-black">
                {`
                We are proud to be recognised by some of the world's leading
                research companies, institutes and publications.`}
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-6-slider slick-initialized slick-slider">
          <Slider {...settings} className="mt-5">
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>{' '}
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>{' '}
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
            <div className="slick-slide slick-cloned">
              <div
                className={``}
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className={``}
                  src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
                  alt=" "
                />
                <p className="fw-semibold">
                  {`UK's leading management consultants 2023`}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
