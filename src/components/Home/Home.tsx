import LandingPage from "../LandingPage/LandingPage";
import Gallery from "../Gallery/Gallery";
import AboutDecoupage from "../About/AboutDecoupage";
import AboutMe from "../About/AboutMe";
import Course from "../Course/Course";
import AboutSchool from "../About/AboutSchool";
import Footer from "../Footer/Footer";
import News from "../News/News";

const Home = () => {
    return (
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
    )
}

export default Home;
