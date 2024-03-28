import React, { useEffect, useState } from 'react';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import LocalizationBtn from './LocaliazationBtn';
const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState<string>('bg-transparent');
  const [navlinkColor, setnavlinkColor] = useState<string>('text-white');
  const [logoStyle, setLogoStyle] = useState<string>('whitescale');
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarColor(currentScrollPos > 500 ? 'bg-light' : 'bg-transparent');
      setnavlinkColor(currentScrollPos > 500 ? 'text-black' : 'text-white');
      setLogoStyle(currentScrollPos > 500 ? '' : 'whitescale');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar p-0 navbar-expand-lg fixed-top ${navbarColor}`}>
        <div
          className={`container-fluid d-flex justify-content-between align-items-center ms-xl-4 ms-lg-4 ms-md-4 `}>
          <Link href={'/'} className="navbar-brand mb-0 mt-0">
            <Image
              className={`me-0 mb-0 mt-0 ms-1 ${logoStyle}`}
              alt="casco logo"
              src={logo}
              width={150}
              height={70}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse ms-md-3 ms-lg-4 ms-xl-4 me-md-3 me-lg-4 me-xl-4"
          id="navbarColor01">
          <ul className="navbar-nav m-auto mb-2 ">
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <Link href={'/courses'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor}  fw-bold mt-1 text-nowrap`}
                  data-trans="CoursesNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem} `}>
              <Link href={'/about'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor} fw-bold mt-1 text-nowrap`}
                  data-trans="AboutCascoNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <Link href={'/services'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor}  fw-bold mt-1 text-nowrap`}
                  data-trans="ServicesNav"></p>
              </Link>
            </li>
            <li
              className={`nav-item ms-3 ${styles.navItem} menu-item menu-item-type-post_type menu-item-object-page menu-item-89`}>
              <Link href={'/industries'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor}  fw-bold mt-1 text-nowrap`}
                  data-trans="industriesNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <Link href={'/news-insights'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor} fw-bold mt-1 text-nowrap`}
                  data-trans="NewsNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <Link href={'/careers'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor} fw-bold mt-1 text-nowrap`}
                  data-trans="CareersNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <Link href={'/contact-us'} className={`nav-link`} id="link">
                <p
                  className={`${styles.navLink} ${navlinkColor} fw-bold mt-1 text-nowrap `}
                  data-trans="ContactUsNav"></p>
              </Link>
            </li>
            <li className={`nav-item ms-3 ${styles.navItem}`}>
              <div className={`mt-3`}>
                <LocalizationBtn />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
