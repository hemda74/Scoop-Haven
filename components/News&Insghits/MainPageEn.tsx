import React from 'react';
import Link from 'next/link';
const MainPageEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="no-image-banner text-center">
          <h1 className="title title--2xl title--bold">
            <span className="gradient-text">News & Insights</span>
          </h1>
        </div>
        <section className="off-screen off-screen--fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="grid-3">
                  <Link href="/news-insights/events/roundtable-the-art-of-procurement-london/">
                    <div className="card ">
                      <div className="card__image object-fit">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg.webp"
                          />
                          <img src="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg" />
                        </picture>
                      </div>
                      <div className="card__category">News</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {`Roundtable: The art of Procurement, London`}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/news-insights/events/conference-eu-uk-dynamics-2025-jointly-achieving-net-zero-brussels/">
                    <div className="card  red-2-background  card--fixed-sm ">
                      <div className="card__category">Event</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {`  Conference: EU-UK Dynamics 2025+: Jointly Achieving
                            Net Zero, Brussels`}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/news-insights/events/roundtable-the-art-of-procurement-london/">
                    <div className="card red-2-background card--fixed-sm">
                      <div className="card__category">Event</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {`Roundtable: The art of Procurement, London`}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-xs-6 text-center pad-15-mob">
                    <Link
                      href="/news-insights/company-news/"
                      className="line-link red-3-color">
                      <span className="red-3-color">View all news</span>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-xs-6 text-center">
                    <Link
                      href="/news-insights/events/"
                      className="line-link red-3-color">
                      <span className="red-3-color">View all events</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pad-80-top">
          <div className="container card-grid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title title--md red-1-color">Latest articles</h2>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/navigating-through-uncertainty-a-2024-outlook-on-commodities-and-global-inflation/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`   Navigating Through Uncertainty: A 2024 outlook on
                          commodities and global inflation`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/data-science-and-data-platforms-unlocking-new-possibilities-for-the-supply-chain/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2024/01/iStock-1406838996-1-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2024/01/iStock-1406838996-1-1024x683.jpg" />
                      </picture>
                      <div className="argon-star-overlay"></div>{' '}
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`  Data science and data platforms: unlocking new
                          possibilities for the supply chain`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/data-driven-leadership/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/10/data-drive-featured@2x-1024x578.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/10/data-drive-featured@2x-1024x578.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`Data-Driven Leadership: the shortest route to
                          performance`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/digital-manufacturing-series-are-you-ready-for-digital-transformation/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/08/Digital-manufacturing-website-template-23-August-2023-2-1024x608.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/08/Digital-manufacturing-website-template-23-August-2023-2-1024x608.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`   Digital manufacturing series: are you ready for
                          digital transformation?`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/digital-manufacturing-series-smarter-manufacturing/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/07/Smarter-manufacturing-website-template-1024x608.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/07/Smarter-manufacturing-website-template-1024x608.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`   Digital manufacturing series: smarter manufacturing`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/articles/truly-sustainable-operations-what-does-it-look-like-and-how-to-make-it-happen/">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2022/08/iStock-908729382-1024x614.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2022/08/iStock-908729382-1024x614.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">Article </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {` Truly sustainable operations – what does it look like
                          and how to make it happen`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 text-center">
                <Link
                  href="/news-insights/articles/"
                  className="line-link red-1-color">
                  <span className="red-1-color">View all articles</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pad-80-top">
          <div className="container card-grid">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2 className="title title--md red-5-color">
                  Latest whitepapers
                </h2>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/white-papers/industrial-flexibility-how-new-mathematic-optimisation-methods-can-contribute-to-better-manage-industrial-agility/">
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">Whitepaper </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {` Industrial flexibility : How new mathematic
                          optimisation methods can contribute to better manage
                          Industrial Agility?`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/white-papers/70-of-business-transformations-fail-urban-myth-or-worth-another-look/">
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">Whitepaper </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {`“70% of business transformations fail” – urban myth or
                          worth another look?`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href="/news-insights/white-papers/is-your-forecasting-adding-value/">
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">Whitepaper </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Is your forecasting adding value?
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 text-center">
                <Link
                  href="/news-insights/white-papers/"
                  className="line-link red-5-color">
                  <span className="red-5-color">View all whitepapers</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pad-80">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2
                  className="title title--md red-2-color"
                  style={{ marginBottom: '60px' }}>
                  Our publications
                </h2>
              </div>
              <div className="col-lg-5 ">
                <div className="row pad-sm-btm">
                  <div className="col-lg-5 col-sm-4 text-sm-right text-center pad-30-mob">
                    <picture style={{ height: '170px' }}>
                      <source
                        type="image/webp"
                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/08/SCPrime-front-cover-210x300.png.webp"
                      />
                      <img src="https://www.argonandco.com/wp-content/uploads/2020/08/SCPrime-front-cover-210x300.png" />
                    </picture>
                  </div>
                  <div className="col-lg-7 col-sm-8 text-sm-left text-center">
                    <img
                      src="https://www.argonandco.com/wp-content/uploads/2019/09/scprime®-300x68.png"
                      style={{ height: '50px', marginBottom: '10px' }}
                    />
                    <p>
                      {` Discover Argon & Co’s powerful improvement approach,
                      combining process and people capabilities to ensure that
                      the right people are in the right jobs, consistently doing
                      the right things.`}
                    </p>
                    <Link href="/scprime/" className="line-link red-2-color">
                      <span className="red-2-color">Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="row pad-sm-btm">
                  <div className="col-lg-5 col-sm-4 text-sm-right text-center pad-30-mob">
                    <picture style={{ height: '170px' }}>
                      <source
                        type="image/webp"
                        srcSet="https://www.argonandco.com/wp-content/uploads/2023/04/Screenshot-2023-04-03-at-12.00.47-211x300.png.webp"
                      />
                      <img src="https://www.argonandco.com/wp-content/uploads/2023/04/Screenshot-2023-04-03-at-12.00.47-211x300.png" />
                    </picture>
                  </div>
                  <div className="col-lg-7 col-sm-8 text-sm-left text-center">
                    <picture style={{ height: '50px', marginBottom: '10px' }}>
                      <source
                        type="image/webp"
                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/09/ADD.png.webp"
                      />
                      <img src="https://www.argonandco.com/wp-content/uploads/2019/09/ADD.png" />
                    </picture>

                    <p>
                      {`     Argon & Co's biannual magazine, focusing on operational
                      performance in business.`}
                    </p>
                    <Link
                      href="/news-insights/add-magazine/"
                      className="line-link red-2-color">
                      <span className="red-2-color">LEARN MORE</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPageEn;
