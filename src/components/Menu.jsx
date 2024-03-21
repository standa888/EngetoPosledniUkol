import { FaAlignJustify } from "react-icons/fa";
import { CiLight, CiDark } from "react-icons/ci";
import Logo from "../images/logitech.png";
import { useState, useContext } from "react";
import { ThemeContext } from "../App";


const Menu = () => {

    const [mobile, setMobile] = useState(false);
    const [darkMode, setDarkMode] = useContext(ThemeContext);

    function show() {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    function switchMode() {
        if (darkMode === false) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }

    return (
        <div className={`flex items-center justify-between h-28 w-screen fixed z-10 text-white ${darkMode ? "bg-gray-600" : "bg-gray-300"} max-sm:gap-1`}>
            <div className="w-40 h-full ml-9">
                <img src={Logo} alt="logo" className="object-cover h-full w-full" />
            </div>


            <div className="flex items-center  max-sm:mr-5">

                <nav className={`max-sm:absolute max-sm:top-28 max-sm:w-full left-0 ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
                    <ul className={` text-center max-sm:pt-4 max-sm:pb-8 max-sm:flex-col
                      max-sm:gap-4 bg-transparent gap-4 sm:flex  ${mobile ? "max-sm:flex" : "max-sm:hidden"}`}>
                        <li className="hover:bg-gray-500 px-4 py-2 rounded-lg cursor-pointer"><a href="#">Domů</a></li>
                        <li className="hover:bg-gray-500 px-4 py-2 rounded-lg cursor-pointer"><a href="#"></a>Produkty</li>
                        <li className="hover:bg-gray-500 px-4 py-2 rounded-lg cursor-pointer"><a href="#">O nás</a></li>
                        <li className="hover:bg-gray-500 px-4 py-2 rounded-lg cursor-pointer"><a href="#">Kontakt</a></li>
                    </ul>
                </nav>

                <button onClick={switchMode} className="object-cover w-7 h-7 mr-9 sm:mx-12">
                    {darkMode ? <CiLight className="h-full w-full" /> : <CiDark className="h-full w-full" />}
                </button>

                <div className="mr-6 text-2xl sm:hidden">
                    <button onClick={show}>
                        <FaAlignJustify />
                    </button>
                </div>

            </div>

        </div >
    )
}

export default Menu