import { Link } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-screen h-[50px] inline-flex items-center justify-between px-10">
        <Link to="adrian" className="text-[24px] font-semibold">Recently<span className="text-red italic">Heard</span></Link>

        {/* Desktop Navigation */}
        <nav className="inline-flex justify-between items-center gap-4 text-[16px] mobile:hidden">
            {navLinks.map((navLink) => (
              <Link className="nav-link" key={navLink.id}>{navLink.title}</Link>
            ))}
            <Link className="border-neutral border rounded-full px-4">Github</Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="hidden mobile:flex justify-end items-center">
          <RiMenu5Fill className="text-[27px]" onClick={() => setToggle(!toggle)}/>

          {/* Sidebar */}
          <div 
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-[50px] right-0 mx-4 my-2 w-1/2 h-2/5 rounded-xl`}
          >
            <nav className="flex justify-evenly items-start flex-col text-[16px] ">
              {navLinks.map((navLink) => (
                <Link className="nav-link" key={navLink.id}>{navLink.title}</Link>
              ))}
              <Link className="border-neutral border rounded-full px-4">Github</Link>
            </nav>
          </div>
        </div>
    </header>
  )
}

const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Privacy Policy",
    title: "Privacy Policy",
  },
];

export default Header