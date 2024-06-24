import React, {  useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import nofeedback from './assets/svg/nofeedback.svg'
import bulbIcon from './assets/svg/bulbIcon.svg'

export default function Content( {activeButton} ) {
    
    const [feedback, setFeedback] = useState(JSON.parse(localStorage.getItem('feedback')) || []);
    
    
    function handleUpVote(id) {
        const updatedFeedback = feedback.map((feedbackItem) => {
            if (feedbackItem.id === id) {
                return { ...feedbackItem, upvote_number:  (feedbackItem.upvote_number != null ? feedbackItem.upvote_number + 1 : 1)};
            }
            return feedbackItem;
        });

        setFeedback(updatedFeedback);
        localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
        console.log(feedback, 'feedback');
    }

    function handleSort(e) {
        const sortValue = e.target.value;
        if (sortValue === 'mostUpvote') {
            const sortedFeedback = feedback.sort((a, b) => (a.upvote_number > b.upvote_number) ? -1 : 1);
            setFeedback([...sortedFeedback]);
        } else { 
            const sortedFeedback = feedback.sort((a,b) => (a.upvote_number > b.upvote_number) ? 1 : -1);
            setFeedback([...sortedFeedback]);
        }
        
    }

    return(
        <div className="mainContent">
            <div className="content-top">
                <div className="content-top-left">
                    <img src={bulbIcon} alt="" srcset="" />
                    <h3 className="textH3 color-white">{feedback.length} Suggestions</h3>
                    <div className="sortButton">
                        <p className="textH4 fw-400 color-white">Sort By:</p>
                        <select onChange={handleSort} className='textH4 color-white' id='sortButtonID'>
                                <option value="mostUpvote">Most Upvotes</option>
                                <option value="leastUpvote">Least Upvotes</option>
                        </select>
                        <button>
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="content-top-right">
                    <Link to={'/newfeedback'}>
                        <button className="button1"><h4 className="textH4">+ Add Feedback</h4></button>
                    </Link>
                </div>
            </div>
            <div className="content-main">
                {feedback.length > 0 ? (feedback
                .filter((feedbackItem) => feedbackItem.category === activeButton || activeButton === 'All').length > 0 ? 
                feedback
                .map((feedbackItem, index) => (
                    <div className="feedback-block" key={index}>
                        <div className="feedback-block-left">
                            <button className="up-vote-btn" onClick={() => handleUpVote(feedbackItem.id)}>
                                <span>
                                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" strokeWidth="2"/>
                                    </svg>
                                </span>
                                {feedbackItem.upvote_number || 0}
                            </button>
                            <div className="feedback-block-left-texts">
                                <div className="feedback-content">
                                    <h3 className="textH3 color-lighter-dark-blue">{feedbackItem.feedback_title}</h3>
                                    <p className="textP1 color-gray">{feedbackItem.feedback_text}</p>
                                </div>
                                <button className="ux-btn-sb"><p className="textP3-semibold">{feedbackItem.category}</p></button>
                            </div>
                        </div>
                    </div>
                )) :
                <div className='noFeedbackYet'>
                    <div className="noFB-content">
                        <div className="noFB-img">
                            <img src={nofeedback} alt="" />
                        </div>
                        <div className="noFB-text">
                            <h1 className='textH1 color-lighter-dark-blue'>There is no feedback</h1>
                            <p className='textP1 color-gray'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                        </div>
                        <div className="noFB-button">
                            <Link to={'/newfeedback'}>
                                <button className="button1"><h4 className="textH4">+ Add Feedback</h4></button>
                            </Link>
                        </div>
                    </div>
                </div>            
                ) : 
                <div className='noFeedbackYet'>
                    <div className="noFB-content">
                        <div className="noFB-img">
                            <img src={nofeedback} alt="" />
                        </div>
                        <div className="noFB-text">
                            <h1 className='textH1 color-lighter-dark-blue'>There is no feedback</h1>
                            <p className='textP1 color-gray'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                        </div>
                        <div className="noFB-button">
                            <Link to={'/newfeedback'}>
                                <button className="button1"><h4 className="textH4">+ Add Feedback</h4></button>
                            </Link>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}