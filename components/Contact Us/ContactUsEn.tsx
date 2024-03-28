import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import styles from '../../styles/ContactUs.module.css';
import WhereIsNextEn from '../WhereIsNextEn';
interface Tab {
  id: string;
  content: React.ReactNode;
}
const ContactUsEn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Egypt');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs: Tab[] = [
    {
      id: 'Egypt',
      content: (
        <div className="row no-gutters">
          <div className="col-md-6 red-5-background">
            <div className="card__content">
              <div className="title title--md text-white title--medium-weight">
                Egypt
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 mt-4">
                  <div className="intro">
                    61 Al Falki, Bab Al Louq, Abdeen, Cairo Governorate 11513,
                    Egypt
                  </div>
                  <div className="intro">+20 23963913</div>
                </div>
                <div className="col-lg-7 mt-4">
                  <a className="intro" href="mailto:egy@casco.com.eg">
                    egy@casco.com.eg
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <div className="linkedin-icon ">
                    <a href="https://www.linkedin.com/company/cascogroup/?viewAsMember=true">
                      <div className="text-white">
                        <BsLinkedin size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.mapContact}`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.682897233059!2d31.2425979202108!3d30.04595398197049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458415e7080b205%3A0x60cf5d8571c8083b!2zQ0FTQ08gRm9yIEFzc2Vzc21lbnQgU2VydmljZXMgTC5MLkMuINmD2KfYs9mD2Ygg2YTYrtiv2YXYp9iqINin2YTYqtmC2YrZitmF!5e0!3m2!1sar!2seg!4v1681100283875!5m2!1sar!2seg"></iframe>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'KSA',
      content: (
        <div className="row no-gutters">
          <div className="col-md-6 red-5-background">
            <div className="card__content">
              <div className="title title--md text-white title--medium-weight">
                Saudi Arabia
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 mt-4">
                  <div className="intro">
                    KSA - Riyadh - Mosa Bin Nasser St. Borj Alnamer - office No:
                    506
                  </div>
                  <div className="intro">+966 50 195 1017</div>
                </div>
                <div className="col-lg-7 mt-4">
                  <a className="intro" href="mailto:egy@casco.com.eg">
                    me@casco.com.eg
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <div className="linkedin-icon ">
                    <a href="https://www.linkedin.com/company/cascogroup/?viewAsMember=true">
                      <div className="text-white">
                        <BsLinkedin size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.mapContact}`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6851579025974!2d46.6797129!3d24.703347500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03aac9be175d%3A0x785d35fc020f008!2zbXV0aG1lciBjb25zdWx0YW50INmF2KvZhdixINmE2YTYp9iz2KrYtNin2LHYp9iq!5e0!3m2!1sen!2ssa!4v1681100567164!5m2!1sen!2ssa"></iframe>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'UAE',
      content: (
        <div className="row no-gutters">
          <div className="col-md-6 red-5-background">
            <div className="card__content">
              <div className="title title--md text-white title--medium-weight">
                United Arab Emirates
              </div>
              <div className="row mt-5">
                <div className="col-lg-5 mt-4">
                  <div className="intro">
                    13th Floors, Millennium Plaza Tower - Dubai - United Arab
                    Emirates
                  </div>
                  <div className="intro">+971 52 526 1012</div>
                </div>
                <div className="col-lg-7 mt-4">
                  <a className="intro" href="mailto:egy@casco.com.eg">
                    me@casco.com.eg
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <div className="linkedin-icon">
                    <a href="https://www.linkedin.com/company/cascogroup/?viewAsMember=true">
                      <div className="text-white">
                        <BsLinkedin size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.mapContact}`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.951759199128!2d55.2707828!3d25.204849300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43441ac9738b%3A0xa1e10db4aea8c490!2sCASCO%20Middle%20East%20L.L.C!5e0!3m2!1sen!2seg!4v1697741716826!5m2!1sen!2seg"></iframe>{' '}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div id="content-wrap">
        <div className="no-image-banner text-center">
          <h1 className="title title--2xl title--bold">
            <span className="gradient-text">Contact us</span>
          </h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="intro text-black-50 mt-5">
                  {`Thank you for your interest in CASCO Group, please contact
                  us for more information. We have offices in `}{' '}
                  <br />
                  Egypt, Saudi Arabia & United Arab Emirates
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="tabs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="container text-center mt-5">
                  <ul className="nav tabs__tab no-gutters text-center js-slider-region-nav">
                    {tabs.map(tab => (
                      <li className="nav-item col-12 col-sm" key={tab.id}>
                        <a
                          className={`text-black-50 intro ${
                            activeTab === tab.id ? 'active' : ''
                          }`}
                          onClick={() => handleTabClick(tab.id)}>
                          {tab.id}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="tab-content mt-2">
                    {tabs.map(tab => (
                      <div
                        className={`tab-pane ${
                          activeTab === tab.id ? 'active' : ''
                        }`}
                        id={tab.id}
                        key={tab.id}>
                        {tab.content}
                      </div>
                    ))}
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

export default ContactUsEn;
