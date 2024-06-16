import LandingPage from "../LandingPage/LandingPage";
import Gallery from "../Gallery/Gallery";
import AboutDecoupage from "../About/AboutDecoupage";
import AboutMe from "../About/AboutMe";
import Course from "../Course/Course";
import AboutSchool from "../About/AboutSchool";

const Home = () => {
    return (
        <>
          <LandingPage />
          <Gallery />
          <AboutDecoupage />
          <AboutMe />
          <AboutSchool />
          <Course />
        </>
    )
}

export default Home;