import React, {useState} from "react"
import { NavLink } from "react-router-dom"

export default function Header( {activeButton, setActiveButton} ) {


    function handleActiveStatus(e) {
        const clickedButton = e.target.textContent;
        setActiveButton(clickedButton);
        localStorage.setItem('activeButton', clickedButton); 
    }
    
    console.log(localStorage.getItem('activeButton'), 'local active button');

    return (
        <header>
        <div className="header-top">
            <div className="header-top-txt">
                <h2 className="textH2 color-white">Frontend Mentor</h2>
                <p className="textSubHeader color-white">Feedback Board</p>
            </div>
        </div>
        <div className="header-middle">
        <div className="header-middle-buttons">
            {['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'].map((buttonText) => (
                <button  onClick={handleActiveStatus}
                    key={buttonText} 
                    className={`ux-btn-sb ${activeButton === buttonText ? 'active' : ''}`}>
                    <p className="textP3-semibold">{buttonText}</p>
                </button>
            ))}
        </div>
        </div>
        <div className="header-bottom">
            <div className="header-bottom-text">
                <div className="header-bottom-text-header">
                    <h3 className="textH3">Roadmap</h3>
                    <p className="textP3-semibold color-light-blue text-ul">View</p>
                </div>
                <div className="header-bottom-text-list">
                    <ul>
                        <li className="textP1">
                            <div>
                                <span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                                    </svg>
                                </span>
                                <span>Planned</span>
                            </div>
                            <span className="fw-700">2</span>
                        </li>
                        <li className="textP1">
                            <div>
                                <span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                                    </svg>
                                </span>
                                <span>In-Progress</span>
                            </div>
                            <span className="fw-700">3</span>
                        </li>
                        <li className="textP1">
                            <div>
                                <span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                                    </svg>
                                </span>
                                <span>Live</span>
                            </div>
                            <span className="fw-700">1</span>
                        </li>
                    </ul>
                </div>
                    
            </div>
        </div>
        </header>
    )
}