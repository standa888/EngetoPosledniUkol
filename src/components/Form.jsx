import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";



const Form = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);
    const [shoda, setShoda] = useState(null);
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");


    useEffect(() => {
        console.log(firstInput, secondInput, firstInput === secondInput);

        if (firstInput.length < 4) {
            setShoda(1);

        }
        else if (firstInput === secondInput) {
            setShoda(2);
        } else {
            setShoda(3);
        }
    }, [firstInput, secondInput])

    return (
        <section className={`flex justify-center items-center py-12 ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
            <div className="flex flex-col text-center w-[50%]">

                <h2 className="mb-16 text-xl">Formulář</h2>

                <form id="form" className="flex flex-col items-center gap-4">
                    <input id="firstPassword" type="text" placeholder="Heslo"
                        className={`w-[50%] outline-none rounded-xl p-1 ${darkMode ? "bg-gray-300" : ""}`} onInput={e => setFirstInput(e.target.value)} />

                    <input id="secondPassword" type="text" placeholder="Kontrola"
                        className={`w-[50%] outline-none rounded-xl p-1 ${darkMode ? "bg-gray-300" : ""}`} onInput={e => setSecondInput(e.target.value)} />

                    <div id="passwordText">
                        {
                            {
                                1: <p>Krátké heslo</p>,
                                2: <p className="text-green-400">Hesla se shodují</p>,
                                3: <p className="text-red-400">Hesla se neshodují</p>
                            }[shoda]
                        }
                    </div>

                </form>
            </div>
        </section>
    )
}


export default Form