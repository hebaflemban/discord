import React from 'react';
import Send from './Send';
const Footer = ({ msg }) => {
    return (
        <footer className="sticky-footer fix-me bg-dark shadow">
            <div className="container">
                <div className="text-center my-auto">
                    <Send />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
