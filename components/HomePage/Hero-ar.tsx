import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroAr = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <section className="banner banner--full-height">
        <div className="banner__video">
          <video
            src="https://www.argonandco.com/wp-content/uploads/2022/05/Argon_V9-2.8mb.mp4"
            autoPlay
            muted
            loop></video>
        </div>
        <div className="changing-color"></div>

        <div className="banner__center white-color">
          <div className="container">
            <Slider {...settings}>
              <div className="slide">
                <div className="banner-title text-center mb-5">
                  <span className="title title--2xl title--bold text-white">
                    Transforming operations...
                  </span>
                </div>
                <div className="banner-text text-center">
                  <p className="intro">
                    We help clients achieve their strategic and operational
                    objectives, working together to transform their businesses
                    and generate real change.{' '}
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="banner-title text-center mb-5">
                  <span className="title title--2xl title--bold text-white">
                    on a global scale...
                  </span>
                </div>
                <div className="banner-text text-center">
                  <p className="intro">
                    With over 500 consultants in 16 offices across Europe,
                    Middle East, Asia, Australasia and America.{' '}
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="banner-title text-center mb-5">
                  <span className="title title--2xl title--bold text-white">
                    with lasting results.
                  </span>
                </div>
                <div className="banner-text text-center">
                  <p className="intro">
                    We apply a combination of deep technical expertise,
                    operational experience and broad business knowledge to
                    deliver lasting results.{' '}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* <div className="banner__bottom white-color">
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-12 text-right">
                {' '}
                <a href="#content" className="anchor">
                  <div className="arrow">
                    <span className="title title--sm text-white">
                      Learn more
                    </span>
                  </div>
                </a>
              </div> 
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default HeroAr;
