import { lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));
const Atelier = lazy(() => import("./components/About/Mobile/Me&Atelier/Atelier"));
const Lessons = lazy(() => import("./components/Course/Lessons"));

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
        <Route path={Paths.ABOUT_ATELIER} element={<Atelier />} />
        <Route path={Paths.Lessons} element={<Lessons />}/>
      </Routes>
    </HashRouter>
  )
}

export default App