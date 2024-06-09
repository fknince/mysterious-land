import { useEffect, useState } from "react";
import Link from "next/link";
import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-03.png";
import Separator from "@/pages/separator";

const Home = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const sentences = [
    "Welcome! Mysterious Land opens the doors to a world filled with trustworthiness and growth potential. This exciting adventure begins with our first meme coin project themed around Phoneix.",
    "Take a step into PONIX's rising and mysterious world! At Mysterious Land, we value the importance of growth and development together.",
    "We plan to bring many more projects intertwined with the magic of the forest in the future. Join us in this adventure and discover yourself in our legendary world!",
  ];

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
      const pElement = document.getElementById("image-text");
      const divImage = document.getElementById("image-div");
      if (window.innerWidth <= 768) {
        pElement.style.fontSize = "20px";
        divImage.style.height = "400px";
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        pElement.style.fontSize = "25px";
        divImage.style.height = "400px";
      } else {
        pElement.style.fontSize = "50px";
        divImage.style.height = "600px";
      }
    };

    handleResize(); // Call the function to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 5000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

        @keyframes smokeEffect {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fireEffect {
          0%,
          100% {
            color: #ff6a00;
            text-shadow: 0 0 10px #ff6a00, 0 0 20px #ff6a00, 0 0 30px #ff4500,
              0 0 40px #ff4500, 0 0 50px #ff4500, 0 0 60px #ff4500,
              0 0 70px #ff4500;
          }
          50% {
            color: #ffa500;
            text-shadow: 0 0 20px #ffa500, 0 0 30px #ffa500, 0 0 40px #ff8c00,
              0 0 50px #ff8c00, 0 0 60px #ff8c00, 0 0 70px #ff8c00,
              0 0 80px #ff8c00;
          }
        }

        @keyframes fireworksEffect {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .smoke-animation {
          animation: smokeEffect 5s ease-in-out infinite;
        }

        .fire-animation {
          animation: fireEffect 2s ease-in-out infinite;
        }

        .fireworks {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background-color: #ff0;
          border-radius: 50%;
          animation: fireworksEffect 1s ease-out infinite;
        }

        .fireworks:nth-child(2) {
          animation-delay: 0.5s;
        }

        .fireworks:nth-child(3) {
          animation-delay: 1s;
        }
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
                  <span className="theme-gradient">MYSTERIOUS LAND</span>
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
                  id="image-div"
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
                      height: "80%",
                      width: "80%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      id="image-text"
                      className="smoke-animation "
                      style={{
                        color: "white",
                        fontSize: "35px",
                        fontFamily: "Indie Flower",
                        lineHeight: 1.2,
                        margin: 0,
                        textAlign: "center",
                        padding: "0px",
                      }}
                    >
                      {sentences[currentSentenceIndex]}
                    </p>
                  </div>
                  <div
                    className="fireworks"
                    style={{ top: "20%", left: "20%" }}
                  ></div>
                  <div
                    className="fireworks"
                    style={{ top: "30%", left: "70%" }}
                  ></div>
                  <div
                    className="fireworks"
                    style={{ top: "80%", left: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
