import Separator from "@/pages/separator";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/logo/logo-dark.png";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center mb--30">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div className="logo" style={{ marginBottom: 0 }}>
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={500}
                        height={500}
                        alt="Corporate Logo"
                      />
                      <Image
                        className="logo-dark"
                        src={logoDark}
                        width={201}
                        height={200}
                        alt="Corporate Logo"
                      />
                    </Link>
                  </div>
                  
                </div>
                
              </div>
              <p className="b1 text-center mb--0" style={{ marginTop: 0,width:"100%",color:"white"}}>
                    By acquiring $PONIX coin, you acknowledge and consent to the
                    understanding that you are not acquiring a security or
                    investment contract. Furthermore, you agree to indemnify the
                    project team, absolving them of liability for any potential
                    losses or tax obligations you may encounter. While $PONIX
                    operates as a community-focused DeFi Ecosystem and is not
                    recognized as a registered digital currency, it is
                    imperative to ensure full compliance with the applicable
                    local laws and regulations preceding any transactions.
                  </p>
            </div>
            {/*<div className="separator-animated animated-true mt--50 mb--50"></div>
            {FooterData &&
              FooterData.footer.map((data, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">{data.title}</h4>
                      <div className="inner">
                        <h6 className="subtitle">{data.desc}</h6>
                        <form className="newsletter-form" action="#">
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Your Email Here"
                            />
                            <button
                              className="btn-default bg-solid-primary"
                              type="submit"
                            >
                              <i className="feather-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <SingleFooter data={data.services} />
                  <SingleFooter data={data.products} />
                  <SingleFooter data={data.company} />
                  <SingleFooter data={data.solutions} />
                </div>
              ))}*/}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
