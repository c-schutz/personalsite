import { Routes, Route } from "react-router-dom";
import About from "./about/about";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<About />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/Projects" element={<Projects />}>
        </Route>
        <Route path="/Contact" element={<Contact />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
