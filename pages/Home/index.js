import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import HomeTwo from "@/components/Home/HomeTwo";
import HomeThree from "@/components/Home/HomeThree";
import HomeFour from "@/components/Home/HomeFour";
import HomeFive from "@/components/Home/HomeFive";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Timeline from "@/components/Timeline/Timeline";
import Split from "@/components/Split/Split";
import Pricing from "@/components/Pricing/Pricing";
import Accordion from "@/components/Accordion/Accordion";
import Brands from "@/components/Brands/Brands";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PageHead from "../Head";
import Applications from "@/components/Applications/Applications";


const HomePage = () => {
  return (
    <>
      <PageHead title="Home" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          {/*<PopupMobileMenu />*/}

          <Home />
          <Separator top={true} />
          <HomeTwo />
          <Separator top={true} />
          <HomeFour />
          <Separator top={true} />
          <HomeThree />
          <Separator top={true} />
          <HomeFive />
          <Separator top={false} />
 
          {/*<Pricing />
          <Separator top={true} />
          <Accordion isHead={true} />
          <Separator top={false} />
          <Brands />
          <Separator top={true} />*/}
        

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
