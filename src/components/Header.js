import React from "react";

function Header() {
    return (
        <header className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">Logo</div>
                    <nav className="space-x-4">
                        <a href="#" className="text-white hover:text-blue-300">Todo</a>
                        <a href="#" className="text-white hover:text-blue-300">Modot</a>
                        <a href="#" className="text-white hover:text-blue-300">Todo</a>
                        <a href="#" className="text-white hover:text-blue-300">odoT</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
