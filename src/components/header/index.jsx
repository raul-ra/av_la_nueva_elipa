"use client"; // Aseguramos que es un Client Component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuData } from "./menuData"; // Datos del menú

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleMenuHover = (index) => {
        setOpenMenu(index);
        setOpenSubMenu(null);
    };

    const handleSubMenuHover = (subIndex) => {
        setOpenSubMenu(subIndex);
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logos */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Image
                            src="/logos/logoDragonTeal.svg"
                            alt="Logo Dragon Teal"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/logos/logoAvLaNuevaElipaBlack.svg"
                            alt="Logo Av La Nueva Elipa"
                            width={60}
                            height={60}
                        />
                    </Link>
                </div>

                {/* Navbar */}
                <nav className="hidden lg:flex space-x-8 items-center lg:ml-auto">
                    {menuData.map((menuItem, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => handleMenuHover(index)}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                {menuItem.title}
                            </button>

                            {/* Menú desplegable */}
                            {menuItem.subMenu && (
                                <ul
                                    className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded z-10 transition-transform duration-300 ${openMenu === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                        }`}
                                >
                                    {menuItem.subMenu.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="relative group"
                                            onMouseEnter={() => handleSubMenuHover(subIndex)}
                                            onMouseLeave={() => setOpenSubMenu(null)}
                                        >
                                            <Link
                                                href={subItem.link || "#"}
                                                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                {subItem.title}
                                            </Link>

                                            {/* Submenú anidado */}
                                            {subItem.subMenu && (
                                                <ul
                                                    className={`absolute top-0 left-full mt-0 bg-white dark:bg-gray-800 shadow-lg rounded z-10 transition-transform duration-300 ${openSubMenu === subIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                                        }`}
                                                >
                                                    {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                                        <li
                                                            key={nestedIndex}
                                                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                            <Link href={nestedItem.link}>{nestedItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
