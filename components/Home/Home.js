import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import bannerImg from "../../public/images/banner/banner-image-03.png";
import Separator from "@/pages/separator";

const Home = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            {/*<div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  {"Building Simple "}
                  <br />
                  <span className="theme-gradient"> End to End</span>
                  <br />
                  AI Assistants
                  <br />
                </h1>
              </div>
  </div>*/}
            <div
              className="col-lg-12 col-xl-12 order-1 order-lg-2"
              style={{ marginTop: "40px" }}
            >
              <div
                className="frame-image frame-image-bottom bg-flashlight video-popup icon-center"
                style={{ padding: 5 }}
              >
                <Image
                  style={{ opacity: 0.9, borderRadius: 10 }}
                  src={bannerImg}
                  alt="Banner Images"
                />
                <p>
                  Welcome! Mysterious Land opens the doors to a world filled
                  with trustworthiness and growth potential. This exciting
                  adventure begins with our first meme coin project themed
                  around Phoneix. Take a step into PONIX's rising and mysterious
                  world! At Mysterious Land, we value the importance of growth
                  and development together. We plan to bring many more projects
                  intertwined with the magic of the forest in the future. Join
                  us in this adventure and discover yourself in our legendary
                  world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
