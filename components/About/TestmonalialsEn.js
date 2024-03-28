import React, { Component } from 'react';
import Slider from 'react-slick';
export default class SwipeToSlide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
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
    return (
      <section className="section section--std section-divide off-screen off-screen--fade-up">
        <div className="row justify-content-center">
          <div className="arrow-3-slider slick-slider ">
            <div className="container ">
              <div className="col-md-8 m-auto">
                <h2 className="title title--lg red-2-color text-center">
                  Client testimonials
                </h2>
              </div>
              <div className="col-md-12">
                <Slider {...settings} className="mt-5">
                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-5-background "
                        style={{
                          width: '100%',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {`"The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>Directeur du Contrôle Interne</strong>
                              </div>
                              Vallourec
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-4-background "
                        style={{
                          width: '100%',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {`    “A key success factor in the design of our
                                solution was Argon & Co’s capability to
                                rapidly understand our problems and the context
                                in order to suggest a concrete and pragmatic
                                approach. Program management and results were
                                praised."`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>
                                  Operations Director, Dermo Cosmétique
                                </strong>
                              </div>
                              Pierre Fabre
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-2-background "
                        style={{
                          width: '100%',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {`    “I recommend them to anyone who wants a
                                pragmatic approach and real results.”`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>Vice President Procurement</strong>
                              </div>
                              Novartis
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-1-background "
                        style={{
                          minWidth: '10rem',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {` “Rapid analysis of complex problems, and
                                solutions we can actually implement.”`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>Global Supply Chain Director</strong>
                              </div>
                              Avon Cosmetics
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-5-background "
                        style={{
                          width: '100%',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {`    "The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>Directeur du Contrôle Interne</strong>
                              </div>
                              Vallourec
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div
                        className="card card--quote red-1-background "
                        style={{
                          width: '100%',
                          minHeight: '30rem',
                          display: 'inline-block',
                        }}>
                        <div className="card__content">
                          <p className="intro ">
                            {`  "Argon’s consultants have a deep functional
                                knowledge and real experience in transformation,
                                especially digital transformation. Their
                                approach was adaptable and efficient. It helped
                                us assess our digital maturity and define our
                                strategic priorities. They provided us with a
                                good level of benchmarking and lessons learnt
                                from other experiences."`}
                          </p>
                          <div className="row align-items-center profile-block ">
                            <div className="col-auto">
                              <picture className="grayscale circle-img--small circle-img--contain">
                                <source
                                  type="image/webp"
                                  srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png.webp"
                                />
                                <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png" />
                              </picture>
                            </div>
                            <div className="col">
                              <div className="">
                                <strong>Head of Finance Transformation</strong>
                              </div>
                              TECHNICOLOR
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
