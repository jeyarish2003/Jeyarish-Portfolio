import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact";
import Scrollup from "./Components/Scrollup";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Scrollup/>
    </div>
  );
}

export default App;
