import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact";
import { Link } from "react-scroll";
import pic from ".//Asset//scroll-up.jpeg";
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Education />
      <Contact />
      <Link to="home" offset={-100} smooth={true} duration={500}>
        <img
          className=" relative -left-full bottom-3"
          src={pic}
          width="50"
          height="50"
          alt=""
        />
      </Link>
    </div>
  );
}

export default App;
