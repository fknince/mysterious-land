import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

import logo from "../../public/images/logo/logo.png";
import ToolsData from "../../data/header.json";

import Nav from "./Nav";
import GridMenu from "./GridMenu";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Micro+5&family=Protest+Revolution&display=swap');

        .responsive-logo {
          width: 100%;
          height: auto;
          max-width: 200px; /* Default size for larger screens */
        }

        @media (max-width: 991px) {
          .responsive-logo {
            max-width: 150px; /* Medium screens */
          }
        }

        @media (max-width: 768px) {
          .responsive-logo {
            max-width: 100px; /* Small screens */
          }
        }

        @media (max-width: 480px) {
          .responsive-logo {
            max-width: 80px; /* Extra small screens */
          }
        }

        .responsive-text {
          font-family: 'Protest Revolution';
          color: #c45c0e;
          font-weight: 400;
          font-style: normal;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 991px) {
          .responsive-text {
            font-size: 50px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .responsive-text {
            font-size: 30px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .responsive-text {
            font-size: 20px;
            text-align: center;
          }
        }

        .text-center-mobile {
          text-align: center;
          display: flex;
          justify-content: center;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
      `}</style>
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky}`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className={`col-lg-3 col-md-5 col-12 ${isMobile ? "text-center-mobile" : ""}`}>
              <div className="logo-container">
                <div className="logo">
                  <Link href="/">
                    <Image
                      className="logo-light responsive-logo"
                      src={logo}
                      alt="ChatBot Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div className="col-lg-9 col-md-7 col-7" style={{ alignItems: "center" }}>
                <h1
                  id="mysterious-land-title"
                  className="responsive-text"
                  style={{
                    fontSize: "80px",
                  }}
                >
                  The Mysterious Land
                </h1>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
