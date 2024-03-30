import React from 'react';
import Slider from 'react-slick';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of image URLs
  const imageUrls = [
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0a36fb81.webp',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0ae76f5b.webp',
    'https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0a8bb60d.webp',
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {/* Map over image URLs to generate slider items */}
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <div
              className="owl-item"
              style={{
                width: '433.1px',
                marginRight: '25px',
                marginLeft: '25px',
              }}>
              <div className="item">
                <div className="overflow-hidden rounded-3">
                  <img src={imageUrl} alt="" className="rounded-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
