import { Link } from "react-scroll";
import contact from "../../src/Asset/Contact.png";
import jey from "../../src/Asset/jey.png";

const Nav = () => {
  return (
    <nav className=" max-w-[83rem] mx-auto my-0 h-[5rem] w-screen flex justify-between items-center sticky top-0 px-[3rem] py-[2rem] z-[3] bg-black">
      <img className="h-[3rem] w-[4rem] object-cover" src={jey} alt="" />
      <div>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="m-[1rem] cursor-pointer hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]"
        >
          Home
        </Link>
        <Link
          to="education"
          activeClass="active"
          spy={true}
          offset={-40}
          smooth={true}
          duration={500}
          className="m-[1rem] cursor-pointer  hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]"
        >
          Education
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="m-[1rem] cursor-pointer  hover:text-yellow-500 hover:border-b-[3px] hover:border-yellow-500 hover:pb-[0.5rem]"
        >
          Portfolio
        </Link>
      </div>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jeyarish@example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-x-2 bg-white text-black rounded-2xl px-4 py-2"
>
  <img
    className="h-4 w-4 object-contain"
    src={contact}
    alt="Contact Icon"
  />
  <span>Contact me</span>
</a>

    </nav>
  );
};

export default Nav;
