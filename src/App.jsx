import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact";

import Scrollup from "./Scrollup";

// import Scroll from "./Components/Scroll";
function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <Education></Education>
      <Contact></Contact>
      <Scrollup />
    </div>
  );
}

export default App;
