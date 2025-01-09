import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));
const Atelier = lazy(() => import("./components/Mobile/Atelier"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
        <Route path={Paths.ABOUT_ATELIER} element={<Atelier />} />
      </Routes>
    </Router>
  )
}

export default App
