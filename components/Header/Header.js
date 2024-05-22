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

  useEffect(() => {
    const handleResize = () => {
      const h1Element = document.getElementById("mysterious-land-title");
        if (window.innerWidth <= 768) {
          h1Element.style.fontSize = "30px";
          h1Element.style.textAlign = "center";
        } else if(window.innerWidth >= 768 && window.innerWidth <= 991) {
          h1Element.style.fontSize = "50px";
          h1Element.style.textAlign = "center";
        }
         else {
          h1Element.style.fontSize = "80px";
          h1Element.style.textAlign = "left";
        }
      };

      handleResize(); // Call the function to set the initial state
      window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Micro+5&family=Protest+Revolution&display=swap');
      `}</style>
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-5 col-5">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="logo-light"
                    src={logo}
                    width={201}
                    height={90}
                    alt="ChatBot Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-7 col-7" style={{ alignItems: "center" }}>
              <h1
                id="mysterious-land-title"
                style={{
                  fontFamily: "Protest Revolution",
                  color: "#c45c0e",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "80px",
                  wordBreak: "break-word",
                  textAlign: "left",
                }}
              >
                The Mysterious Land
              </h1>
            </div>
            {/*<div className="col-lg-4 col-md-3 col-3 position-static">
              <div >
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>

               <div className="header-btn">
                  <Link
                    className={`btn-default ${btnClass}`}
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
      </div>

                <GridMenu ToolsData={ToolsData} />

                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <i className="feather-menu"></i>
                    </button>
                  </div>
      </div>
              </div> 
            </div>*/}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
