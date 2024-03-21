import './App.css'
import Menu from './components/Menu'
import Products from './components/Products'
import Form from './components/Form'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import { createContext, useState } from 'react';
export const ThemeContext = createContext();


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`h-screen ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
      <ThemeContext.Provider value={[darkMode, setDarkMode]}>
        <Menu />
        <Products />
        <Form />
        <Footer />
        <ScrollButton />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
