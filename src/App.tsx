import { lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));
const Atelier = lazy(() => import("./components/Mobile/Atelier"));
const Lessons = lazy(() => import("./components/Course/Lessons"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
        <Route path={Paths.ABOUT_ATELIER} element={<Atelier />} />
        <Route path={Paths.Lessons} element={<Lessons />}/>
      </Routes>
    </Router>
  )
}

export default App
