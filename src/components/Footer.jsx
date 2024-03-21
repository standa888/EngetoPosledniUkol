import { ThemeContext } from "../App";
import { useContext } from 'react';



const Footer = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);

    return (
        <div className={`h-32 flex justify-center items-end ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
            <footer>
                <p className="">&copy; 2024 Logitech. Všechna práva vyhrazena</p>
            </footer>
        </div>
    )
}


export default Footer