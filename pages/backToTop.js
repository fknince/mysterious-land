import React, { useEffect, useRef, useState } from "react";

const BackToTop = () => {
  const progressRef = useRef(null);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const widgetRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsWidgetOpen(false);
      }
    };

    if (isWidgetOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWidgetOpen]);

  const openWidget = () => {
    setIsWidgetOpen(true);
  };

  const closeWidget = () => {
    setIsWidgetOpen(false);
  };

  useEffect(() => {
    const progressPath = progressRef.current?.querySelector("path");
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;

      const rbtProgressParent = progressRef.current;
      if (rbtProgressParent) {
        if (scroll >= 0) {
          rbtProgressParent.classList.add("rn-backto-top-active");
        } else {
          rbtProgressParent.classList.remove("rn-backto-top-active");
        }
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    progressRef.current?.addEventListener("click", (event) => {
      event.preventDefault();
      openWidget();
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {isWidgetOpen && (
        <div className="widget-overlay">
          <div className="widget-container" ref={widgetRef}>
            <button className="widget-close-button" onClick={closeWidget}>
              X
            </button>

            <div className="widget-content">
              {/* Jupiter widget içeriği */}
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.Jupiter.init({
                      endpoint: "https://api.mainnet-beta.solana.com",
                      strictTokenList: false,
                      defaultExplorer: "Solscan",
                      formProps: {
                        fixedOutputMint: true,
                        swapMode: "ExactIn",
                        initialAmount: "1000",
                        initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                        initialSlippageBps: 5,
                      },
                    });
                  `,
                }}
              />
            </div>
          </div>
        </div>
      )}
      <div className="rn-progress-parent" ref={progressRef}>
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <image
            href="/images/jupiter/jupiter-logo.svg"
            width="100"
            height="100"
          />
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      <style jsx>{`
        .widget-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .widget-container {
          position: relative;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          width: 400px;
          max-width: 90%;
        }

        .widget-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .widget-content {
          margin-top: 40px;
        }
      `}</style>
    </>
  );
};

export default BackToTop;
