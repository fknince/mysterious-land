import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-04.png";
import Separator from "@/pages/separator";
import brand1 from "../../public/images/brand/twitter-icon.png";
import brand2 from "../../public/images/brand/telegram-icon.png";

const HomeThree = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const divImage = document.getElementById("image-div3");
      const brandImage1 = document.getElementById("brand-image1");
      const brandText1 = document.getElementById("brand-text1");
      const brandImage2 = document.getElementById("brand-image2");
      const brandText2 = document.getElementById("brand-text2");
      if (window.innerWidth <= 768) {
        divImage.style.height = "400px";
        brandText1.style.fontSize = "25px";
        brandImage1.style.width = "60px";
        brandText2.style.fontSize = "25px";
        brandImage2.style.width = "60px";
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        brandImage1.style.width = "70px";
        brandText1.style.fontSize = "25px";
        divImage.style.height = "400px";
        brandText2.style.fontSize = "25px";
        brandImage2.style.width = "70px";
      } else {
        brandImage1.style.width = "100px";
        divImage.style.height = "600px";
        brandText1.style.fontSize = "30px";
        brandText2.style.fontSize = "30px";
        brandImage2.style.width = "100px";
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
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
      `}</style>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">SOCIAL MEDIA</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-xl-12 order-1 order-lg-2"
              style={{ marginTop: "10px" }}
            >
              <div
                className="frame-image frame-image-bottom bg-flashlight video-popup icon-center"
                style={{
                  position: "relative",
                  padding: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    width: "calc(100% - 10px)",
                    height: "calc(100% - 10px)",
                    backgroundImage: `url(${bannerImg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9,
                    zIndex: 1,
                    borderRadius: 10,
                  }}
                ></div>
                <div
                  id="image-div3"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                    width: "calc(100% - 10px)",
                    height: "600px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "10px",
                      width: "100%",
                    }}
                  >
                    <ul className="brand-style-2">
                      <li>
                        <a
                          href="https://x.com/PONIXsol"
                          target="_blank"
                        >
                          <div
                            style={{
                              margin: 0,
                              display: "flex",
                              padding: 0,
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "auto",
                              width: "auto",
                              justifyItems: "center",
                            }}
                          >
                            <Image
                              id="brand-image1"
                              src={brand1}
                              width={148}
                              height={70}
                              alt="Brand Image"
                              style={{
                                display: "flex",
                                margin: 0,
                                padding: 0,
                                width: "100px",
                              }}
                            />
                            <p
                              id="brand-text1"
                              style={{
                                fontFamily: "Indie Flower",
                                color: "white",
                                fontSize: "30px",
                                display: "flex",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              Twitter
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/mysteriouslands" target="_blank">
                          <div
                            style={{
                              margin: 0,
                              display: "flex",
                              padding: 0,
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "auto",
                              width: "auto",
                              justifyItems: "center",
                            }}
                          >
                            <Image
                              id="brand-image2"
                              src={brand2}
                              width={148}
                              height={70}
                              alt="Brand Image"
                              style={{
                                display: "flex",
                                margin: 0,
                                padding: 0,
                                width: "100px",
                              }}
                            />
                            <p
                              id="brand-text2"
                              style={{
                                fontFamily: "Indie Flower",
                                color: "white",
                                fontSize: "30px",
                                display: "flex",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              Telegram
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThree;
