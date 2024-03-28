import Link from 'next/link';
import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
const SingleNewsEn = () => {
  return (
    <div>
      <div id="content-wrap">
        <div className="banner  banner--ar banner--top-overlay  banner--title-overflow banner--single ">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-scaled.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-scaled.jpg" />
            </picture>
          </div>
          <div className="banner__bottom text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 banner__white-overlay">
                  <div className="post-meta off-screen off-screen--rotate-up">
                    <span> News</span>
                    <span>12 Dec 2023</span>{' '}
                  </div>

                  <h1 className="title title--lg title--bold off-screen off-screen--rotate-up">
                    Argon &amp; Co Partner promotions 2023{' '}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mrg-80-top off-screen off-screen--fade-up">
          <div className="row justify-content-center">
            <div className="col-md-8 entry the-content the-content--post">
              <p>{`Argon &amp; Co are delighted to confirm the promotion of six new Partners for 2023.`}</p>
              <p>{`Adding decades of functional expertise and strong track records of success in a variety of industries and services, the new Partners will take positions across the global offices to support plans for future growth and international collaboration;`}</p>
              <p>{`Accruing over 12 years of experience in the field of Strategy &amp; Transformation, including roles at McKinsey, BP Pulse, AkzoNobel and Babylon Health, Cat Brownlie will be leading our Strategy &amp; Transformation practice in the UK.`}</p>
              <p>{`Chris Foord first joined Argon &amp; Co in 2020, after spending more than 16 years in retail supply chain management, including roles at Sainsburys, Marks &amp; Spencer and The Warehouse Group. Based in Auckland, New Zealand, Chris brings insight and expertise to our end-to-end supply chain offering.`}</p>
              <p>{`David Ring joined Argon &amp; Co Australia with 18 years of end-to-end supply chain management across FMCG, GMA and retail companies. Based in Sydney, he has recently developed an innovative offering for supply chain resilience and risk.`}</p>
              <p>{`Franck Kakal first joined Argon &amp; Co France 12 years ago and has since developed a vast range of expertise and experience across a wide range of services and industries, with specialist skills in supply chain planning, industrial operations, and life sciences.`}</p>
              <p>{`James Lee joined Argon &amp; Co’s office in Melbourne, Australia in 2019. He brings over 21 years of industry and consulting experience in FMCG, including time spent at Mondelez, EY, Supply Chain Cover and Wesfarmers.`}</p>
              <p>{`After 23 years of experience at Deutsche Post and Coca Cola, Simon Clarke joined Argon &amp; Co US in 2019. Bringing decades of supply chain expertise, Simon is a supply chain specialist based at our Atlanta office.`}</p>
              <p>{`Speaking on the topic, Group Managing Director, Jean-François Laget, said, “I’m delighted to welcome our newly appointed Partners and believe that our ability to develop internal talent that helps us grow the Group in the years ahead is a critical element of our strategy. Building our international capabilities reinforces our aim to be a leading global management consultancy specialising in operations strategy and transformation.”`}</p>

              <div
                className="row justify-content-center"
                style={{ marginTop: '40px' }}>
                <div className="col-lg-12">
                  <div className="social-sharing">
                    <div className="social-sharing__links">
                      <p>Share:</p>
                      <div className="links">
                        <Link
                          href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.argonandco.com%2Fen%2Fnews-insights%2Fevents%2Froundtable-mastering-ma-integration-london%2F&title=Roundtable%3A+Mastering+M%26%23038%3BA+integration%2C+London"
                          target="_blank">
                          <BsLinkedin size={20} />
                        </Link>
                        <Link
                          href="https://twitter.com/intent/tweet?text=Roundtable%3A+Mastering+M%26%23038%3BA+integration%2C+London+https://www.argonandco.com/en/news-insights/events/roundtable-mastering-ma-integration-london/"
                          target="_blank">
                          <BsTwitter size={22} />
                        </Link>
                        <Link
                          href="mailto:?subject=I wanted you to see this post&body=Check out this post https://www.argonandco.com/en/news-insights/events/roundtable-mastering-ma-integration-london/."
                          target="_blank">
                          <IoMdMail size={25} />
                        </Link>
                      </div>
                    </div>
                    <div className="social-sharing__line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pad-100-vert off-screen off-screen--fade-up">
          <h2 className="title title--lg red-1-color text-center color-red-1">
            More News{' '}
          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              <div className="col-md-4">
                <Link href="/news-insights/company-news/news">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/AdobeStock_630124186-1024x682.jpeg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2024/02/AdobeStock_630124186-1024x682.jpeg" />
                      </picture>
                    </div>
                    <div className="card__category">News </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          Argon &amp; Co strengthen presence in APAC with the
                          appointment of new Partner
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link href="/news-insights/company-news/news">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/12/AdobeStock_309872150-1024x598.jpeg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/12/AdobeStock_309872150-1024x598.jpeg" />
                      </picture>
                    </div>
                    <div className="card__category">News </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          Argon &amp; Co APAC strengthen its capabilities with
                          the internal appointment of three new Partners
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link href="/news-insights/company-news/news">
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg" />
                      </picture>
                    </div>
                    <div className="card__category">News </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          M3 Consultancy becomes Argon &amp; Co
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/news-insights/company-news/"
              className="line-link red-3-color">
              <span className="red-3-color">Back to all News</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleNewsEn;
