import LandingPage from "../LandingPage/LandingPage";
import Gallery from "../Gallery/Gallery";
import AboutDecoupage from "../About/Decoupage/AboutDecoupage";
import AboutMe from "../About/Me/AboutMe";
import Course from "../Course/Course";
import AboutSchool from "../About/School/AboutSchool";
import Footer from "../Footer/Footer";
import News from "../News/News";
import { useMediaQuery } from "react-responsive";
import LandingPageMobile from "../LandingPage/LandingPageMobile";
import NewsMobile from "../News/NewsMobile";
import AboutDecoupageMobile from "../About/Decoupage/AboutDecoupageMobile";
// import AboutMeMobile from "../About/Me/AboutMeMobile";
// import AboutSchoolMobile from "../About/School/AboutSchoolMobile";
import * as S from "./Home.styles"
import About from "../About/Mobile/About";
const Home = () => {
  const isDesktop: boolean = useMediaQuery({ query: `(min-width: 768px)` })
  return (
    <>
      {isDesktop &&
        <>
          <LandingPage />
          <News />
          <Gallery />
          <AboutDecoupage />
          <AboutMe />
          <AboutSchool />
          <Course />
          <Footer />
        </>
      }
      {!isDesktop &&
        <>
          <S.Content>
            <LandingPageMobile />
            <NewsMobile />
            <Gallery />
            <AboutDecoupageMobile />
            <About />
            {/* <AboutMeMobile /> */}
            {/* <AboutSchoolMobile /> */}
            {/* <Course /> */}
            <Footer />
          </S.Content>
        </>
      }
    </>
  )
}

export default Home;