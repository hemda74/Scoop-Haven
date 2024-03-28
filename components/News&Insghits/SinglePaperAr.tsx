import Link from 'next/link';
import React from 'react';

const SinglePaperAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner  banner--no-image  banner--ar banner--top-overlay  banner--title-overflow banner--single red-5-background background-banner">
          <div className="banner__background"></div>
          <div className="banner__bottom text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 banner__white-overlay">
                  <div className="post-meta off-screen off-screen--rotate-up">
                    <span> الورقة البيضاء</span>
                  </div>

                  <h1 className="title title--lg title--bold off-screen off-screen--rotate-up">
                    {`“70% of business transformations fail” – urban myth or worth another look? `}{' '}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mrg-80-top off-screen off-screen--fade-up">
          <div className="row justify-content-center">
            <div className="col-md-8 entry the-content the-content--post">
              <p>
                <span className="intro">
                  {`Stuart Williamson takes a fresh look at maximising the chance
                  of success by understanding the common areas of risk on change
                  journeys.`}
                </span>
              </p>
              <p>
                {`Engaging a diverse organisation to embrace change is daunting.
                Leading that change as the head of a business can be a lonely
                task, yet leadership is precisely what is needed to maximise the
                chance of success. Nearly two decades of helping leaders to
                drive change has given Argon &amp; Co insight into the
                characteristics of successful transformations. It is common to
                try to minimise the risk of failure, but the best
                transformations are those that focus on maximising the chance of
                success.`}
              </p>
              <p>
                <picture className="wp-image-4626 alignright">
                  <source
                    type="image/webp"
                    srcSet="https://www.argonandco.com/wp-content/uploads/2019/10/Screenshot-2020-03-03-at-16.34.12.png.webp"
                  />
                  <img
                    src="https://www.argonandco.com/wp-content/uploads/2019/10/Screenshot-2020-03-03-at-16.34.12.png"
                    alt=""
                    width="204"
                    height="309"
                  />
                </picture>
              </p>
              <p>
                {`        In the report, we take a close look at our own experiences and
                what leading thinkers have to say about the drivers for
                transformational change. We also look at the critical get rights
                to succeeding, and the reasons for failing to achieve
                objectives.`}
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>

      <section className="pad-100-vert off-screen off-screen--hide off-screen--fade-up">
        <h2 className="title title--lg red-5-color text-center color-red-1">
          More Whitepapers{' '}
        </h2>
        <div className="container">
          <div className="row small-gutters pad-40-vert">
            <div className="col-lg-4 col-md-6 pad-30-pad">
              <Link href="/news-insights/white-papers/digital-transformation-the-huge-data-flood-is-on-your-doorstep-your-survival-kit-for-staying-afloat/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Digital Transformation: The huge data flood is on your
                        doorstep. Your survival kit for staying afloat.{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 pad-30-pad">
              <Link href="/news-insights/white-papers/rise-or-fall-how-businesses-are-responding-to-high-inflation/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Rise or fall: how businesses are responding to high
                        inflation{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 pad-30-pad">
              <Link href="/news-insights/white-papers/boosting-productivity-whitepaper/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Boosting Productivity Whitepaper{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pad-50-pad">
          <Link
            href="/news-insights/white-papers/"
            className="line-link red-5-color">
            <span className="red-5-color">Back to all Whitepapers</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SinglePaperAr;
