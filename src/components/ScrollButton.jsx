import { FaArrowUp } from "react-icons/fa6";
import { ThemeContext } from "../App";
import { useContext } from 'react';


const ScrollButton = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);

    function scrollFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={`fixed bottom-6 right-6 h-16 w-16 rounded-[50%] ${darkMode ? "bg-blue-200" : "bg-blue-100"} text-center`}>
            <button onClick={scrollFunction} className="w-full h-full text-xl flex justify-center items-center">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default ScrollButton