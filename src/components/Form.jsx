import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../App";



const Form = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);
    const [schoda, setSchoda] = useState(null);


    function matchingPassword() {
        let first = document.getElementById("firstPassword").value;
        let secound = document.getElementById("secoundPassword").value;
        const text = document.getElementById("passwordText");

        if (first === secound) {
            text.innerText = "Hesla se schodují";
            setSchoda(true);
        } else {
            text.innerText = "Hesla se neschodují";
            setSchoda(false);
        }

        if (first === "") {
            text.innerText = "";
        }
    }


    useEffect(() => {
        const form = document.getElementById('form');
        form.addEventListener("keyup", (event) => {
            event.preventDefault();
            matchingPassword();
        })
    }, [])


    return (
        <section className={`flex justify-center items-center py-12 ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
            <div className="flex flex-col text-center w-[50%]">
                <h2 className="mb-16 text-xl">Formulář</h2>
                <form id="form" className="flex flex-col items-center gap-4">
                    <input id="firstPassword" type="text" placeholder="Heslo" className={`w-[50%] outline-none rounded-xl p-1 ${darkMode ? "bg-gray-300" : ""}`} />
                    <input id="secoundPassword" type="text" placeholder="Kontrola" className={`w-[50%] outline-none rounded-xl p-1 ${darkMode ? "bg-gray-300" : ""}`} />
                    <p id="passwordText" className={schoda ? "text-green-400" : "text-red-500"}></p>

                </form>
            </div>
        </section>
    )
}


export default Form