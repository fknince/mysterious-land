import React, { useEffect, useRef } from "react";

const BackToTop = () => {
  const progressRef = useRef(null);

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
      // scrollTo yerine Jupiter Widget'ı açılıyor
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
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
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
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        ></path>
      </svg>
    </div>
  );
};

export default BackToTop;
