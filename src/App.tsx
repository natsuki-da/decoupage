import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path={Paths.HOME} element={<Home />}/>
//       </Routes>
//     </Router>
//   )
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
