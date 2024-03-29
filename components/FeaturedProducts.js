// import React, { Component } from 'react';
// import Slider from 'react-slick';
// export default class SwipeToSlide extends Component {
//   render() {
//     var settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div className="owl-carousel banner-imges-slider owl-theme owl-loaded owl-drag">
//         <div className="owl-stage-outer">
//           <div
//             className="owl-stage"
//             style={{
//               transform: 'translate3d(0px, 0px, 0px)',
//               transition: 'all 0s ease 0s',
//               width: '1375px',
//             }}></div>
//           <Slider {...settings} className="mt-5">
//             <div
//               className="owl-item   active"
//               style={{ width: '433.1px', marginRight: '25px' }}>
//               <div className="item">
//                 <div className="overflow-hidden rounded-3">
//                   <img
//                     src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0a36fb81.webp"
//                     alt=""
//                     className="rounded-3"
//                   />
//                 </div>
//               </div>
//             </div>{' '}
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }
import React from 'react';
import Slider from 'react-slick';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="">
          <div
            className="owl-item "
            style={{ width: '433.1px', marginRight: '25px' }}>
            <div className="item">
              <div className="overflow-hidden rounded-3">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0a36fb81.webp"
                  alt=""
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="owl-item  "
            style={{ width: '433.1px', marginRight: '25px' }}>
            <div className="item">
              <div className="overflow-hidden rounded-3">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0ae76f5b.webp"
                  alt=""
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="owl-item   "
            style={{ width: '433.1px', marginRight: '25px' }}>
            <div className="item">
              <div className="overflow-hidden rounded-3">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/banners/banner-6501c0a8bb60d.webp"
                  alt=""
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
