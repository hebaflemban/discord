import React from 'react';
import Send from './Send';
const Footer = ({ msg }) => {
    return (
        <footer class="sticky-footer fix-me bg-dark shadow">
            <div class="container">
                <div class="text-center my-auto">
                    <Send />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
