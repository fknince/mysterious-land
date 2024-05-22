import React from "react";
import Context from "@/context/Context";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import Header from "@/components/Header/Header";
import Separator from "@/pages/separator";
import { FiPhoneCall, FiMail } from "react-icons/fi"; // Importing icons

const ContactUs = ({ parentClass }) => {
  const labelStyle = {
    color: "white",
    fontWeight: "bold",
    marginRight: "10px",
  };

  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <div style={{ marginTop: "50px" }}>
            
            <div className={`${parentClass} main-content`}>
              <div className="contact-area section-gap section-gapTop-big">
                <div className="container">
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-lg-12">
                      <div className="section-title text-center">
                        <h2 className="title w-600 mb--20">Contact Us</h2>
                        <p className="description b1">
                          Reach out to us with your questions, concerns, or
                          feedback.
                        </p>
                      </div>
                      <div className=" text-center mb--20">
                        <div
                          style={{
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p style={{ width: "300px" }}>
                            <span style={labelStyle}>
                              <FiPhoneCall />
                            </span>
                            <a href="tel:+905370507937">+90 537 050 79 37</a>
                            <div className="separator-animated animated-true"></div>
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p style={{ width: "300px" }}>
                            <span style={labelStyle}>
                              <FiMail />
                            </span>
                            <a href="mailto:info@meetgenom.com">
                              info@meetgenom.com
                            </a>
                            <div className="separator-animated animated-true"></div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default ContactUs;
