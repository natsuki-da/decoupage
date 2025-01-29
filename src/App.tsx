import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));
const Atelier = lazy(() => import("./components/Mobile/Atelier"));
const CourseList = lazy(() => import("./components/Course/CourseList"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
        <Route path={Paths.ABOUT_ATELIER} element={<Atelier />} />
        <Route path={Paths.COURSE_LIST} element={<CourseList />}/>
      </Routes>
    </Router>
  )
}

export default App
