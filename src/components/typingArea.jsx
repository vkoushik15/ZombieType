import React from 'react';

const TypingArea = ({ typingText, inpFieldValue, timeLeft, mistakes, WPM, CPM, initTyping, handleKeyDown, resetGame }) => {
    return (
        <div className="typing-area">
            <div className="section1">
                <p id="paragraph">{typingText}</p>
            </div>
            <div className="section2">
                <ul className="resultDetails">
                    <li className="time">Time Left: {timeLeft}s</li>
                    <li className="mistakes">Mistakes: {mistakes}</li>
                    <li className="wpm">WPM: {WPM}</li>
                    <li className="cpm">CPM: {CPM.toFixed(2)}</li>
                </ul>
                <button onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
};

export default TypingArea;