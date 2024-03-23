import { FaArrowUp } from "react-icons/fa6";
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from 'react';


const ScrollButton = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);
    const [scroll, setScroll] = useState(0);

    function scrollFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function scrolling() {
        setScroll(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener("scroll", scrolling);

        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    });

    return (
        <div className={`fixed bottom-6 right-6 h-16 w-16 rounded-[50%] ${scroll === 0 ? "hidden" : "block"} ${darkMode ? "bg-blue-200" : "bg-blue-100"} text-center`}>
            <button onClick={scrollFunction} className="w-full h-full text-xl flex justify-center items-center">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default ScrollButton