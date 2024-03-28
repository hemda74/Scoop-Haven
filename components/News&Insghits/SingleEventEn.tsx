import Link from 'next/link';
import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

const SingleEventEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="banner  banner--no-image  banner--ar banner--top-overlay  banner--title-overflow banner--single red-2-background background-banner">
          <div className="banner__background"></div>
          <div className="banner__bottom text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 banner__white-overlay">
                  <div className="post-meta off-screen off-screen--rotate-up">
                    <span> Event</span>
                    <span>9 Feb 2024</span>
                  </div>

                  <h1 className="title title--lg title--bold off-screen off-screen--rotate-up">
                    Roundtable: Mastering M&A integration, London
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mrg-80-top off-screen off-screen--fade-up">
          <div className="row justify-content-center">
            <div className="col-md-8 entry the-content the-content--post">
              <p className="ArgNormal" style={{ textAlign: 'justify' }}>
                {`   Last week Connect, Argon & Co’s community for change makers,
                hosted a dinner event on M&A integration which revealed the
                critical balance between deal valuation and team engagement. The
                event was attended by business leaders with M&A experience
                spanning deal-making to integration, who discussed the pitfalls
                of overvaluation, contributing to a 70% failure rate in M&A
                transactions, and the importance of timely involvement of
                integration teams to avoid resource wastage on uncertain deals.`}
              </p>
              <h3 className="ArgNormal" style={{ textAlign: 'justify' }}>
                {` Key topics of discussion included:`}
              </h3>
              <p style={{ lineHeight: 1.44444 }}>
                <picture
                  className="wp-image-26681 alignright"
                  style={{ textAlign: 'justify' }}>
                  <source
                    type="image/webp"
                    srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/Norma-225x300.jpg.webp 225w, https://www.argonandco.com/wp-content/uploads/2024/02/Norma-400x533.jpg.webp 400w, https://www.argonandco.com/wp-content/uploads/2024/02/Norma.jpg.webp 768w"
                    sizes="(max-width: 274px) 100vw, 274px"
                  />
                  <img
                    src="https://www.argonandco.com/wp-content/uploads/2024/02/Norma-225x300.jpg"
                    alt=""
                    width="274"
                    height="365"
                    srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/Norma-225x300.jpg 225w, https://www.argonandco.com/wp-content/uploads/2024/02/Norma-400x533.jpg 400w, https://www.argonandco.com/wp-content/uploads/2024/02/Norma.jpg 768w"
                    sizes="(max-width: 274px) 100vw, 274px"
                  />
                </picture>
              </p>
              <p className="ArgNormal" style={{ textAlign: 'justify' }}>
                <strong>{`Strategic clarity on acquisition goals – `}</strong>
                {`be it
                for assets, tech, talent, or brand equity—wa`}
                <span style={{ fontSize: '1.125rem', textAlign: 'justify' }}>
                  {`             s deemed essential to guide successful integrations. The pace
                  of integration is crucial; too slow and benefits diminish, too
                  fast and integration may be superficial. Full integration
                  isn’t always the aim, especially in asset acquisitions or when
                  acquiring innovative companies, where maintaining some
                  independence can preserve agility and entrepreneurial spirit.`}
                </span>
              </p>
              <p className="ArgNormal" style={{ textAlign: 'justify' }}>
                <b>Cultural integration</b>
                {`, though often under prioritised, is
                vital for merging companies seamlessly, with a focus on aligning
                values, norms, and celebrated stories. Generative AI’s role in
                enhancing due diligence and understanding cultural aspects was
                also highlighted as a game-changer in M&A practices.`}
              </p>
              <p className="ArgNormal" style={{ textAlign: 'justify' }}>
                {`        In summary, M&A success requires a nuanced approach, expertly
                blending strategic planning, pace management, cultural
                integration, and innovative technologies. Argon & Co’s M&A
                integration playbook provides a structured yet flexible
                framework to address these complexities, ensuring tailored
                integration strategies that fully realise the envisioned deal
                value.`}
              </p>

              <div
                className="row justify-content-center"
                style={{ marginTop: '40px' }}>
                <div className="col-lg-12">
                  <div className="social-sharing">
                    <div className="social-sharing__links">
                      <p>Share:</p>
                      <div className="links">
                        <a
                          href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.argonandco.com%2Fen%2Fnews-insights%2Fevents%2Froundtable-mastering-ma-integration-london%2F&title=Roundtable%3A+Mastering+M%26%23038%3BA+integration%2C+London"
                          target="_blank"
                          rel="noreferrer">
                          <BsLinkedin size={20} />
                        </a>
                        <a
                          href="https://twitter.com/intent/tweet?text=Roundtable%3A+Mastering+M%26%23038%3BA+integration%2C+London+https://www.argonandco.com/en/news-insights/events/roundtable-mastering-ma-integration-london/"
                          target="_blank"
                          rel="noreferrer">
                          <BsTwitter size={22} />
                        </a>
                        <a
                          href="mailto:?subject=I wanted you to see this post&body=Check out this post https://www.argonandco.com/en/news-insights/events/roundtable-mastering-ma-integration-london/."
                          target="_blank"
                          rel="noreferrer">
                          <IoMdMail size={25} />
                        </a>
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
            More Events
          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              <div className="col-md-4">
                <Link href="/news-insights/events/conference-eu-uk-dynamics-2025-jointly-achieving-net-zero-brussels/">
                  <div className="card  red-2-background  card--fixed-sm ">
                    <div className="card__category">Event </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`    Conference: EU-UK Dynamics 2025+: Jointly Achieving
                          Net Zero, Brussels`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/news-insights/events/roundtable-the-art-of-procurement-london/">
                  <div className="card  red-2-background  card--fixed-sm ">
                    <div className="card__category">Event </div>
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

              <div className="col-md-4">
                <Link href="/news-insights/events/virtual-roundtable-the-truth-about-sop-london/">
                  <div className="card  red-2-background  card--fixed-sm ">
                    <div className="card__category">Event </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {`Virtual roundtable: The truth about S&OP, London`}
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
              href="/news-insights/events/"
              className="line-link red-3-color">
              <span className="red-3-color">Back to all Events</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleEventEn;
