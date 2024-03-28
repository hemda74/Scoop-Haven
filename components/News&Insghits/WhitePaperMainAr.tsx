import Link from 'next/link';
import React from 'react';

const WhitePaperMainAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner  banner--ar banner--full-overlay ">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2019/10/shutterstock_219813205.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2019/10/shutterstock_219813205.jpg" />
            </picture>
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    Whitepapers{' '}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container card-grid">
          <div className="row pad-40-vert">
            <div className="col-md-4">
              <Link href="/news-insights/white-papers/industrial-flexibility-how-new-mathematic-optimisation-methods-can-contribute-to-better-manage-industrial-agility/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Industrial flexibility : How new mathematic optimisation
                        methods can contribute to better manage Industrial
                        Agility?{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/70-of-business-transformations-fail-urban-myth-or-worth-another-look/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        “70% of business transformations fail” – urban myth or
                        worth another look?{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/is-your-forecasting-adding-value/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Is your forecasting adding value?{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/business-leaders-must-maximise-the-chance-of-success-when-engaging-in-business-transformation-projects/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Business leaders must maximise the chance of success
                        when engaging in business transformation projects{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/sop-are-you-making-the-most-of-it/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        S&amp;OP: are you making the most of it?{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/the-business-benefits-of-aps-systems-as-clear-as-abc/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        The business benefits of APS systems – as clear as ABC{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/nearly-a-third-of-all-supply-chain-processes-are-inadequate/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Nearly a third of all supply chain processes are
                        inadequate{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/news-insights/white-papers/pharmaceutical-supply-chains-must-be-brutal-and-go-back-to-core-principles-says-crimson-co/">
                <div className="card  card--large  red-5-background">
                  <div className="card__category">Whitepaper </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--sm title--medium-weight">
                        Pharmaceutical supply chains must be brutal and go back
                        to core principles, says Crimson &amp; Co{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhitePaperMainAr;
