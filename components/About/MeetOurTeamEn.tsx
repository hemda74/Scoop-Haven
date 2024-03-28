import Link from 'next/link';
import React from 'react';

const MeetOurTeamEn = () => {
  return (
    <>
      <section
        className="off-screen off-screen--hide off-screen--fade-up js-meet-the-team"
        id="meet-the-team">
        <div className="container card-grid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title title--lg red-1-color">Meet The Team</h2>
            </div>
          </div>
          <div className="row js-team-top-level">
            <div className="col-xl-4 col-md-6 order-1">
              <Link href="/about/egy-team/">
                <div className="card card--split red-1-background">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <div className="card__content">
                        <div className="title title--sm">Egypt</div>

                        <div className="card--split__hover title--medium-weight">
                          Meet The Team
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-6 card--split__image grayscale"
                      style={{
                        backgroundImage:
                          'url(https://www.argonandco.com/wp-content/uploads/2020/01/Picture1-1.png)',
                      }}></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6 order-2">
              <Link href="/about/uae-team/">
                <div className="card card--split red-1-background">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <div className="card__content">
                        <div className="title title--sm">UAE</div>
                        <div className="card--split__hover title--medium-weight">
                          Meet the Team
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-6 card--split__image grayscale"
                      style={{
                        backgroundImage:
                          'url(https://www.argonandco.com/wp-content/uploads/2020/01/Picture1.png)',
                      }}></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-md-6 order-4">
              <Link href="/about/ksa-team/">
                <div className="card card--split red-1-background">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <div className="card__content">
                        <div className="title title--sm">KSA</div>

                        <div className="card--split__hover title--medium-weight">
                          Meet the team
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-6 card--split__image grayscale"
                      style={{
                        backgroundImage:
                          'url(https://www.argonandco.com/wp-content/uploads/2021/07/IMG_0128-683x1024.jpg)',
                      }}></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeamEn;
