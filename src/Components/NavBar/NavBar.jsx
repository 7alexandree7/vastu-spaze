import { useState } from "react";
import logo from "../../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../../Consts/index"

const NavBar = () => {

    const [isOpen, setIsopen] = useState(false);

    const toogleMenu = () => {
        setIsopen(!isOpen);
    }

    return (
        <nav className="border-b-2 ">
            <div className="flex justify-between items-center py-8">

                <div className="pl-2">
                    <a href="#">
                        <img width={150} height={150} src={logo} alt="logo" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button className="cursor-pointer text-2xl pr-2 focus:outline-none" onClick={toogleMenu} aria-label={isOpen ? "Close menu" : "Open"}>
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>

                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link}>{link.name}</a>
                    ))}
                </div>         
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4">
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link}>{link.name}</a>
                    ))}
                </div>
            )}
            
        </nav>
    )
}

export default NavBar
