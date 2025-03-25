import React from 'react';
import ScreenshotShare from "./screenshotShare.jsx";

const TypingArea = ({ typingText, inpFieldValue, timeLeft, mistakes, WPM, CPM, initTyping, handleKeyDown, resetGame }) => {
    return (
        <div className="typing-area">
            <div className="section1">
                <p id="paragraph">{typingText}</p>
            </div>
            <div className="section2">
                <ul className="resultDetails">
                    <li>⏳ Time Left: {timeLeft}s</li>
                    <li>❌ Mistakes: {mistakes}</li>
                    <li>⚡ WPM: {WPM}</li>
                    <li>🎯 CPM: {CPM.toFixed(2)}</li>
                </ul>
                <button onClick={resetGame} className="reset-btn">Reset</button>
            </div>
        </div>
    );
};

export default TypingArea;