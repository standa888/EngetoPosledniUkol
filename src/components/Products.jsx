import image1 from '../images/1.webp';
import image2 from '../images/2.webp';
import image3 from '../images/3.webp';
import image4 from '../images/4.webp';
import { ThemeContext } from "../App";
import { useContext } from 'react';


const Products = () => {

    const [darkMode, setDarkMode] = useContext(ThemeContext);

    return (
        <section className={`pt-28 ${darkMode ? "bg-blue-200" : "bg-blue-100"}`}>

            <h2 className='text-center mt-12 mb-8 text-xl'>Products</h2>

            <div className='min-h-[300px] flex gap- justify-center items-center max-sm:flex-col'>
                <div className='w-44 h-44'>
                    <img src={image1} alt="" className='object-cover w-full h-full hover:scale-125' />
                </div>
                <div className='w-44 h-44'>
                    <img src={image2} alt="" className='object-cover w-full h-full hover:scale-125' />
                </div>
                <div className='w-44 h-44'>
                    <img src={image3} alt="" className='object-cover w-full h-full hover:scale-125' />
                </div>
                <div className='w-44 h-44'>
                    <img src={image4} alt="" className='object-cover w-full h-full hover:scale-125' />
                </div>
            </div>
        </section>
    )
}


export default Products