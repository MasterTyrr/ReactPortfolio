import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold">Sam Richards</h1>
            <nav className="space-x-6 text-sm">
                <a href="#work" className="hover:text-gray-600">Work</a>
                <a href="#technical-toolbox" className="hover:text-gray-600">Technolgies</a>
                <a href="#about" className="hover:text-gray-600">About</a>
                <a href="#contact" className="hover:text-gray-600">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
