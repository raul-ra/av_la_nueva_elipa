"use client"; // Aseguramos que es un Client Component

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuData } from "./menuData"; // Importamos los datos del menú

const Header = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null); // Controla los menús en escritorio
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // Controla los submenús en escritorio
    const [openSubSubMenuIndex, setOpenSubSubMenuIndex] = useState(null); // Controla los sub-submenús en móvil
    const [isMobile, setIsMobile] = useState(false); // Determina si es vista móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla si el menú móvil está abierto

    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", checkMobile);
        checkMobile();

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Lógica para abrir/cerrar menús en vista de escritorio
    const handleMouseEnterMenu = (index) => {
        if (!isMobile) {
            clearTimeout(closeTimeoutRef.current);
            setOpenMenuIndex(index);
        }
    };

    const handleMouseLeaveMenu = () => {
        if (!isMobile) {
            closeTimeoutRef.current = setTimeout(() => {
                setOpenMenuIndex(null);
                setOpenSubMenuIndex(null);
            }, 200); // Espera antes de cerrar para evitar cierres inesperados
        }
    };

    const handleMouseEnterSubMenu = (subIndex) => {
        if (!isMobile) {
            clearTimeout(closeTimeoutRef.current);
            setOpenSubMenuIndex(subIndex);
        }
    };

    const handleMouseLeaveSubMenu = () => {
        if (!isMobile) {
            closeTimeoutRef.current = setTimeout(() => {
                setOpenSubMenuIndex(null);
            }, 200); // Espera antes de cerrar para evitar cierres inesperados
        }
    };

    // Lógica para alternar el menú principal en vista móvil
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setOpenSubMenuIndex(null); // Cierra los submenús cuando se abre o cierra el menú principal
            setOpenSubSubMenuIndex(null); // Cierra los sub-submenús cuando se abre o cierra el menú principal
        }
    };

    // Lógica para alternar submenús en vista móvil
    const toggleSubMenu = (index) => {
        if (openSubMenuIndex === index) {
            setOpenSubMenuIndex(null);
            setOpenSubSubMenuIndex(null);
        } else {
            setOpenSubMenuIndex(index);
            setOpenSubSubMenuIndex(null); // Resetea el sub-submenú cuando se abre un nuevo submenú
        }
    };

    // Lógica para alternar sub-submenús en vista móvil
    const toggleSubSubMenu = (index) => {
        setOpenSubSubMenuIndex(openSubSubMenuIndex === index ? null : index);
    };

    // Lógica para cerrar el menú móvil al hacer clic en un enlace
    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenSubMenuIndex(null);
        setOpenSubSubMenuIndex(null);
    };

    return (
        <header className="bg-white shadow-md relative z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logos a la izquierda */}
                <div className="flex items-center space-x-4">
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/logos/logoDragonTeal.svg"
                            alt="Logo Dragon Teal"
                            width={75}
                            height={60}
                        />
                    </Link>
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/logos/avLaNuevaElipaShortBlack.svg"
                            alt="Logo Av La Nueva Elipa"
                            width= {125}
                            height={60}
                        />
                    </Link>
                </div>

                {/* Botón del menú móvil */}
                {isMobile && (
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                )}

                {/* Menú de escritorio a la derecha con margen */}
                <nav className="hidden lg:flex space-x-8 mr-8">
                    {menuData.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => handleMouseEnterMenu(index)}
                            onMouseLeave={handleMouseLeaveMenu}
                        >
                            <Link
                                href={item.link || "#"}
                                className="text-gray-800 hover:text-teal transition-all font-semibold text-lg"
                            >
                                {item.title}
                            </Link>
                            {/* Solo muestra los submenús si existen */}
                            {item.subMenu && (
                                <div
                                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded ${
                                        openMenuIndex === index ? "block" : "hidden"
                                    }`}
                                    onMouseEnter={() => handleMouseEnterSubMenu(index)}
                                    onMouseLeave={handleMouseLeaveMenu}
                                >
                                    <ul>
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className="relative"
                                                onMouseEnter={() =>
                                                    handleMouseEnterSubMenu(`${index}-${subIndex}`)
                                                }
                                                onMouseLeave={handleMouseLeaveSubMenu}
                                            >
                                                <Link
                                                    href={subItem.link || "#"}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white"
                                                >
                                                    {subItem.title}
                                                </Link>

                                                {/* Submenú anidado */}
                                                {subItem.subMenu && (
                                                    <div
                                                        className={`absolute left-full top-0 mt-0 bg-white shadow-lg rounded ${
                                                            openSubMenuIndex === `${index}-${subIndex}`
                                                                ? "block"
                                                                : "hidden"
                                                        }`}
                                                    >
                                                        <ul>
                                                            {subItem.subMenu.map(
                                                                (nestedItem, nestedIndex) => (
                                                                    <li
                                                                        key={nestedIndex}
                                                                        className="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white"
                                                                    >
                                                                        <Link href={nestedItem.link}>
                                                                            {nestedItem.title}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Menú móvil */}
            {isMobile && isMenuOpen && (
                <div className="lg:hidden bg-white z-20 overflow-y-auto">
                    <div className="p-4">
                        <ul className="space-y-4">
                            {menuData.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.subMenu ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubMenu(index)}
                                                className="text-gray-700 block hover:bg-teal hover:text-white px-4 py-2 w-full text-left rounded"
                                            >
                                                {item.title}
                                            </button>
                                            {openSubMenuIndex === index && (
                                                <ul className="pl-4">
                                                    {item.subMenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            {subItem.subMenu ? (
                                                                <>
                                                                    <button
                                                                        onClick={() => toggleSubSubMenu(`${index}-${subIndex}`)}
                                                                        className="text-gray-600 block hover:bg-teal hover:text-white px-4 py-2 w-full text-left rounded"
                                                                    >
                                                                        {subItem.title}
                                                                    </button>
                                                                    {openSubSubMenuIndex === `${index}-${subIndex}` && (
                                                                        <ul className="pl-4">
                                                                            {subItem.subMenu.map(
                                                                                (nestedItem, nestedIndex) => (
                                                                                    <li key={nestedIndex}>
                                                                                        <Link
                                                                                            href={nestedItem.link || "#"}
                                                                                            className="text-gray-500 block hover:bg-teal hover:text-white px-4 py-2 rounded"
                                                                                            onClick={closeMenu} // Cierra el menú móvil al hacer clic en un enlace
                                                                                        >
                                                                                            {nestedItem.title}
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <Link
                                                                    href={subItem.link || "#"}
                                                                    className="text-gray-600 block hover:bg-teal hover:text-white px-4 py-2 w-full text-left rounded"
                                                                    onClick={closeMenu} // Cierra el menú móvil al hacer clic en un enlace
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.link || "#"}
                                            className="text-gray-700 block hover:bg-teal hover:text-white px-4 py-2 w-full text-left rounded"
                                            onClick={closeMenu} // Cierra el menú móvil al hacer clic en un enlace
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
