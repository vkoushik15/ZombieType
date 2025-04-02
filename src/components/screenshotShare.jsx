import React from "react";
import html2canvas from "html2canvas";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";

const ScreenshotShare = ({ resultRef, WPM }) => {
    const handleScreenshot = async () => {
        if (!resultRef.current) return;
        
        const canvas = await html2canvas(resultRef.current);
        const image = canvas.toDataURL("image/png");

        // Create a temporary link to download the screenshot
        const link = document.createElement("a");
        link.href = image;
        link.download = "typing-result.png";
        link.click();
    };

    // const shareUrl = window.location.href;
    // const shareMessage = `I just scored ${WPM} WPM on this awesome typing test! Can you beat me? 🔥 Try now:`;

    return (
        <div className="screenshot-share">
            <button onClick={handleScreenshot} className="screenshot-btn">
                <Share2 size={20} /> Save Screenshot
            </button>
{/* 
            <FacebookShareButton url={shareUrl} quote={shareMessage} className="share-btn fb">
                <Facebook size={20} /> Share on Facebook
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={shareMessage} className="share-btn twitter">
                <Twitter size={20} /> Share on Twitter
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} summary={shareMessage} className="share-btn linkedin">
                <Linkedin size={20} /> Share on LinkedIn
            </LinkedinShareButton> */}
        </div>
    );
};

export default ScreenshotShare;
