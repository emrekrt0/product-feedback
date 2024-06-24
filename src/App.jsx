import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Content from "./Content"
import { useState, useEffect } from "react";


function App() {
  const [activeButton, setActiveButton] = useState(localStorage.getItem('activeButton') || 'All');

  useEffect(() => {
    const onStorageChange = (e) => {
        console.log('Storage changed:', e); 
        setActiveButton(localStorage.getItem('activeButton') || 'All');
    };
    window.addEventListener('storage', onStorageChange);

    return () => {
        window.removeEventListener('storage', onStorageChange);
    };
    }, []);


  return (
    <>
      <div className="mainContainer">
        <Header activeButton={activeButton} setActiveButton={setActiveButton}/>
        <Content activeButton={activeButton}/>
      </div>
    </>
  )
}

export default App
