import { useState } from "react";
import logo from "../../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../../Consts/index"

const NavBar = () => {
    const [isOpen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isOpen);
    };

    return (
        <nav className=" w-full fixed top-0 left-0 bg-white z-50 py-6 px-12">
            <div className="flex justify-between items-center ">
                <a href="#">
                    <img width={150} height={150} src={logo} alt="logo" />
                </a>


                <div className="md:hidden">
                    <button
                        className="cursor-pointer text-2xl focus:outline-none"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open"}
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>

                {/* Links Desktop */}
                <div className="hidden md:flex space-x-8 md:space-x-4">
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link}>{link.name}</a>
                    ))}
                </div>
            </div>


            {isOpen && (

                <div className="w-full bg-white md:hidden flex flex-col items-center space-y-4 py-6 border-t-1 border-b-1 my-2">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            onClick={() => setIsopen(false)} // fecha ao clicar
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
