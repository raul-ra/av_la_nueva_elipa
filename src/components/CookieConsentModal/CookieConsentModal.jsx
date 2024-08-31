"use client";

import { useState, useEffect } from 'react';

const CookieConsentModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsOpen(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-black">Usamos cookies</h2>
                <p className="mb-4 text-gray-800">
                    Este sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información, por favor visita nuestra 
                    <a href="./asociaciondevecinoslanuevaelipa\src\app\politicadecookies\page.js" className="text-teal hover:underline ml-1">
                        Política de Cookies
                    </a>.
                </p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleDecline}
                        className="bg-[#D7D2CA] text-black px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none opacity-80">
                        Cancelar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="bg-teal text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:outline-none"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentModal;
