import LandingPage from "../LandingPage/LandingPage";
import Gallery from "../Gallery/Gallery";
import AboutDecoupage from "../About/Decoupage/AboutDecoupage";
import AboutMe from "../About/Me/AboutMe";
import AboutSchool from "../About/School/AboutSchool";
import Footer from "../Footer/Footer";
import News from "../News/News";
import LandingPageMobile from "../LandingPage/LandingPageMobile";
import NewsMobile from "../News/NewsMobile";
import About from "../About/Mobile/AboutSection/About";
import { useMediaQuery } from "react-responsive";
import * as S from "./Home.styles"

const Home = () => {
  const isDesktop: boolean = useMediaQuery({ query: `(min-width: 768px)` })
  return (
    <>
      {isDesktop &&
        <>
          <S.Content>
            <LandingPage />
            <News />
            <Gallery />
            <AboutDecoupage />
            <AboutMe />
            <AboutSchool />
            <About />
            <Footer />
          </S.Content>
        </>
      }
      {!isDesktop &&
        <>
          <S.Content_Mobile>
            <LandingPageMobile />
            <NewsMobile />
            <About />
            <Gallery />
            <Footer />
          </S.Content_Mobile>
        </>
      }
    </>
  )
}

export default Home;