import React from 'react';
import WhereIsNextEn from '../WhereIsNextEn';

const OurApproachEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="no-image-banner text-center">
          <h1 className="title title--bold title--2xl">
            <span className="gradient-text">Our approach </span>
          </h1>
        </div>

        <section className="off-screen off-screen--fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="grid-9">
                  <div className="grid-card  red-3-background intro text-white">
                    <span className="text-white">
                      <p>
                        <span className="intro--medium text-white">
                          {`Our diverse experience, deep understanding and
                          awareness of the bigger picture means we solve complex
                          business problems in creative and innovative ways.`}
                        </span>
                      </p>
                      <p className="fs-6">
                        {`  Working at all levels, we transform the operations of
                        clients using our unique Assess Design Embed® approach,
                        which is applied at each stage of a project to reduce
                        risk and achieve better results, faster, and in a
                        sustainable way:`}
                      </p>
                      <ul>
                        <li>
                          {`We work strategically with Boards and senior
                          management, identifying high impact levers and
                          combining a broad vision of the issues with our deep
                          functional expertise`}
                        </li>
                        <li>
                          {` We provide specialist input, using our experience
                          across many industries to design pragmatic solutions
                          to achieve the strategic objectives`}
                        </li>
                        <li>
                          {`  We implement operational change, managing
                          transformation programmes to deliver a sustainable
                          shift in market approach, process, organisation,
                          culture and systems`}
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        ' url(https://www.argonandco.com/wp-content/uploads/2019/12/approach-2.png)',
                    }}></div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        ' url(https://www.argonandco.com/wp-content/uploads/2019/12/approach-1.png)',
                    }}></div>
                  <div className="grid-card red-5-background white-color">
                    <span>
                      <p>
                        <span className="intro intro--medium">
                          {`  Challenges drive us, and we thrive on answering the
                          questions that keep our clients awake at night. We dig
                          deep to identify the root of the problem, applying a
                          combination of scientific analysis, business acumen
                          and common-sense.`}
                        </span>
                      </p>
                      <p className="text-white">
                        {`  Creative and thorough in our approach, and focused in
                        delivery, we identify and implement practical business
                        solutions.`}
                      </p>
                      <p className="text-white">
                        {` Our clients trust us to get the job done wherever we are
                        in the world, with a common consulting approach and
                        belief that the only thing that matters is making a real
                        difference for our clients.`}
                      </p>
                    </span>
                  </div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        ' url(https://www.argonandco.com/wp-content/uploads/2020/01/Our-Approach-e1578996335572.jpg)',
                    }}></div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        ' url(https://www.argonandco.com/wp-content/uploads/2020/01/No-text-Smart-Office-5.jpg)',
                    }}></div>
                </div>

                <div className="grid-testimonials">
                  <div className="grid-card grid-card--testimonial white-color red-4-background">
                    <div className="grid-card__container">
                      <blockquote className="intro intro--medium">
                        {` "I was immediately impressed with the collegiate nature
                        of the company. I have been encouraged by the way
                        consultants from multiple countries come together to
                        deliver the best possible outcome for our clients. This
                        firm has developed a strong culture of clearly
                        identifying best practice and helping clients achieve it
                        through collaborative working."`}
                      </blockquote>
                      <div className="author-card">
                        <div
                          className="author-card__image"
                          style={{
                            backgroundImage:
                              ' url(https://www.argonandco.com/wp-content/uploads/2019/12/Chris-2-300x259.png)',
                          }}></div>
                        <div className="author-card__info">
                          <cite>Chris</cite>
                          <p>Singapore office</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-card grid-card--testimonial white-color red-2-background">
                    <div className="grid-card__container">
                      <blockquote className="intro intro--medium">
                        {`       "Clients comment on how enjoyable we are to work with,
                        which I think is largely due to the fact that we are
                        honest and open, as well as maintaining objectivity and
                        having a high sense of integrity."`}
                      </blockquote>
                      <div className="author-card">
                        <div
                          className="author-card__image"
                          style={{
                            backgroundImage:
                              ' url(https://www.argonandco.com/wp-content/uploads/2019/12/Crispin.png)',
                          }}></div>
                        <div className="author-card__info">
                          <cite>Crispin</cite>
                          <p>London office</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-card grid-card--testimonial white-color red-6-background">
                    <div className="grid-card__container">
                      <blockquote className="intro intro--medium">
                        {`    "Feedback from clients consistently points to the value
                        we deliver through our knowledge, analytics and thinking
                        process. They appreciate our effort to structure highly
                        integrated client/consulting teams to blend inside and
                        outside perspective to every project."`}
                      </blockquote>
                      <div className="author-card">
                        <div
                          className="author-card__image"
                          style={{
                            backgroundImage:
                              ' url(https://www.argonandco.com/wp-content/uploads/2019/12/Bruce.png)',
                          }}></div>
                        <div className="author-card__info">
                          <cite>Bruce</cite>
                          <p>Atlanta office</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhereIsNextEn />
      </div>
    </>
  );
};

export default OurApproachEn;
