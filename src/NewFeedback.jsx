import addButton from './assets/svg/addButton.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NewFeedback() {
    const navigate = useNavigate();
    const [feedbackID, setFeedbackID] = useState(parseInt(localStorage.getItem('feedbackID'))+1 || 0);

    function handleCancle() {
        const userConfirmed = window.confirm("Are you sure you want to cancel?");
        if (userConfirmed) {
            navigate('/')
        } else {
            return;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        setFeedbackID(feedbackID + 1)
        localStorage.setItem('feedbackID', parseInt(feedbackID));
        const formData = Object.fromEntries(new FormData(e.target).entries());
        const dataWithID = {...formData, id: feedbackID}
        let allFeedbacks = JSON.parse(localStorage.getItem('feedback')) || [];
        if (!Array.isArray(allFeedbacks)) {
            allFeedbacks = [];
        }
        allFeedbacks.push(dataWithID);
        localStorage.setItem('feedback', JSON.stringify(allFeedbacks));
        navigate('/');
    }

    
    
    return(
        <div className="newFeedbackContainer">
            <div className="newFB-gobck">
                    <button className="go-bck">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" strokeWidth="2"/>
                        </svg>
                        <h4 className="textH4">Go Back</h4>
                    </button>
            </div>
            <div className="newFeedbackContent">
                <div className="addSVG">
                    <img src={addButton} alt="" />
                </div>
                <div className="newFB-form">
                    <div className="newFB-form-header">
                        <h1 className='textH1 color-lighter-dark-blue'>Create New Feedback</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="newFB-form-container">
                        <div className="newFB-form-content">
                            <div className="newFB-form-content-header">
                                <h4 className='textH4 color-lighter-dark-blue'>Feedback Title</h4>
                                <p className='textH4 color-gray fw-400'>Add a short, descriptive headline</p>
                            </div>
                            <div className="newFB-form-content-comment">
                                <input type="text" className='comment-box textP2 color-lighter-dark-blue' name='feedback_title' required/>
                            </div>
                        </div>
                        <div className="newFB-form-content">
                            <div className="newFB-form-content-header">
                                <h4 className='textH4 color-lighter-dark-blue'>Category</h4>
                                <p className='textH4 color-gray fw-400'>Choose a category for your feedback</p>
                            </div>
                            <div className="newFB-form-content-comment fb-selection">
                                <select name="category" id="category" required>
                                    <option value="feature" name="feature" defaultValue>Feature</option>
                                    <option value="UI" name="UI">UI</option>
                                    <option value="UX" name="UX">UX</option>
                                    <option value="enhancement" name="enhancement">Enhancement</option>
                                    <option value="bug" name="bug">Bug</option>
                                </select>      
                                <div className="dropDownArrow">
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4661E6" strokeWidth="2"/>
                                    </svg>
                                </div>                      
                            </div>
                        </div>
                        <div className="newFB-form-content">
                            <div className="newFB-form-content-header">
                                <h4 className='textH4 color-lighter-dark-blue'>Feedback Detail</h4>
                                <p className='textH4 color-gray fw-400'>Include any specific comments on what should be improved, added, etc.</p>
                            </div>
                            <div className="newFB-form-content-comment">
                                <textarea name="feedback_text" className='comment-detail textP2' required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="newFB-form-footer">
                        <button className="button3" onClick={handleCancle}><h4 className='textH4'>Cancel</h4></button>
                        <button className="button1"><h4 className='textH4'>Add Feedback</h4></button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}