import React from 'react';
import "./HeaderTop.css";

function HeaderTop() {
    return (
        <div className="HeaderTop">
            <div>
                <p className="Header__support">
                    Support: +91-9090909090
                </p>
            </div>
            <div>
                <p className="headerTop__hyperlink">
                    Book a Free Test Ride Now
                </p>
            </div>
            <div className="headerTop__options">
                <a className="headerTop__option" href="#">Contact</a>
                <a className="headerTop__option" href="#">Career</a>
                <a className="headerTop__option" href="#">Media <i class="arrow down"></i></a>
            </div>
        </div>
    )
}

export default HeaderTop;
