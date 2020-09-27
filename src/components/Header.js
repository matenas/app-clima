import React from 'react';

function Header({titulo}) {
    return (
        <header>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a href="#!" className="brand-logo">{titulo}</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;