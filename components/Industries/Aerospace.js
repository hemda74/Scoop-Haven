import React from 'react';
import Slider from 'react-slick';

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <>
      <section className="section section--std light-grey-background pad-80 section-divide off-screen off-screen--fade-up">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="title title--lg red-2-color text-center">
              Aerospace and defence case studies
            </h2>
          </div>
          <div className="col-md-12">
            <Slider {...settings}>
              <div>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="me-xl-4">
                    <div className="card red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply quality management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply quality management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply quality management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply quality
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply quality management
                      </h3>
                    </div>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="me-xl-4">
                  <div className="card red-2-background card--fixed-sm ">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Supply
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="">
        <div
          className="modal fade contact w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content h-screen relative m-auto z-50 | lg:p-8 lg:h-auto">
              <div className="relative bg-white  min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                <div className="absolute top-0 right-0 text-lg  cursor-pointer">
                  <button
                    type="button"
                    className="btn-close m-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="row mt-5">
                  <div className="the-content">
                    <p>
                      <span
                        className="intro join-us-sub-title"
                        style={{ fontWeight: 400 }}>
                        {`
                            The majority of our clients are major organisations
                            and market leaders in their particular industry. `}
                      </span>
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        {`
                            On client projects you will be part of a team which,
                            depending on the nature of the project, could be
                            based either at the client’s site or in our offices,
                            and you will sometimes have the opportunity to work
                            from home. You could be leading the project, leading
                            certain streams, or carrying out specific tasks
                            within a stream, and your role is likely to vary
                            project by project as you develop your confidence
                            and capabilities.&nbsp; `}
                      </span>
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        {`
                            As well as working on client projects, you may also
                            be involved in some internal initiatives, such as
                            helping to develop internal methodologies and
                            training materials and organising internal events.
                            As you progress in the company, you are likely to
                            take on&nbsp; specific internal areas of
                            responsibility, such as staff management,
                            recruitment, training delivery and proposition
                            development, amongst others. This helps you to
                            develop your general business skills based on what
                            interests you most, and allows you to stretch
                            outside your comfort zone and work with colleagues
                            who you may not normally come across in your
                            day-to-day client work.&nbsp;`}
                      </span>
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        {`
                            When we agree the members of each project team, we
                            look at both the skills required for the assignment
                            and the development objectives of the individuals.
                            We also aim to ensure that our staff maintain a
                            positive work/life balance, so we take into account
                            an individual’s recent assignments and their impact. `}
                      </span>
                    </p>
                    <h2>Graduates</h2>
                    <p className="p1">{`
                          Graduates are an integral part of client projects.
                          They work alongside consultants and are exposed to a
                          variety of industries and business areas where they
                          gain the skills required to become consultants.
                        `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Responsive;
