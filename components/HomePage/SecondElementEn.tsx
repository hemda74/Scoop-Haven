import React from 'react';
import Image1 from '../../public/login-background-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
const SecondElementEn = () => {
  return (
    <>
      <section className="off-screen off-screen--fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-5">
                <Link href="/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--large">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          News{' '}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/about/our-culture/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2024/02/iStock-147036034-1024x683.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Article{' '}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <Image
                          src={Image1}
                          width={200}
                          height={100}
                          alt="hello"
                        />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Events{' '}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Article{' '}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <Image
                          src={Image1}
                          width={200}
                          height={100}
                          alt="hello"
                        />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          White Papers{' '}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondElementEn;
