"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Función para limpiar el input y evitar inyecciones XSS
function sanitizeInput(input) {
    return input.replace(/[<>"'&/]/g, ""); // Elimina caracteres peligrosos para XSS
}

const CTAInformacion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Modal para éxito
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // Modal para error
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        interests: 'Mediación',  // Valor por defecto
        consultation: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedNames, setSubmittedNames] = useState([]); // Guardar nombres ya enviados

    // Opciones de información
    const infoOptions = [
        { title: 'Mediación' },
        { title: 'Cursos y Talleres' },
        { title: 'Huerto Urbano' },
        { title: 'Grupo Scout Atreyu' },
        { title: "Campamento de Verano 'El Escondite'" },
        { title: 'Grupo de Consumo Ecológico' },
        { title: 'Grupo Felicidad' },
        { title: 'Club de Ajedrez' },
        { title: 'Elipa Rock' },
        { title: 'Cross Salvar el Pinar' },
        { title: 'Carrera Popular' }
    ];

    // Bloquear el scroll del fondo cuando el modal está abierto
    useEffect(() => {
        if (isModalOpen || isSuccessModalOpen || isErrorModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen, isSuccessModalOpen, isErrorModalOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: sanitizeInput(value),
        });
    };

    const validate = () => {
        let tempErrors = {};
        let valid = true;

        // Validaciones básicas
        if (!formData.name) {
            tempErrors.name = "El nombre es obligatorio";
            valid = false;
        }
        if (!formData.lastname) {
            tempErrors.lastname = "Los apellidos son obligatorios";
            valid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            tempErrors.email = "Introduce un correo electrónico válido";
            valid = false;
        }
        const phonePattern = /^[0-9]{9,10}$/;
        if (!formData.phone || !phonePattern.test(formData.phone)) {
            tempErrors.phone = "Introduce un teléfono válido";
            valid = false;
        }
        if (!formData.address) {
            tempErrors.address = "La dirección es obligatoria";
            valid = false;
        }
        if (!formData.consultation) {
            tempErrors.consultation = "La consulta es obligatoria";
            valid = false;
        }
        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (validate()) {
            // Verificar si el nombre y apellidos ya se enviaron antes
            const nameExists = submittedNames.some(
                entry => entry.name === formData.name && entry.lastname === formData.lastname
            );

            if (nameExists) {
                setIsErrorModalOpen(true); // Mostrar modal de error
            } else {
                try {
                    // El envío del formulario incluye el campo "interests"
                    const response = await fetch("https://formspree.io/f/xnnayzan", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            ...formData,
                            type: 'Solicitud de Información',
                            interests: formData.interests  // Campo interests enviado
                        })
                    });

                    if (response.ok) {
                        setSubmittedNames([...submittedNames, { name: formData.name, lastname: formData.lastname }]);
                        setIsModalOpen(false); // Cerrar modal de formulario
                        setIsSuccessModalOpen(true); // Mostrar modal de éxito
                        
                        // Limpiar el formulario
                        setFormData({
                            name: '',
                            lastname: '',
                            email: '',
                            phone: '',
                            address: '',
                            interests: 'Mediación',  // Valor por defecto
                            consultation: ''
                        });
                        
                    } else {
                        console.error("Error al enviar el formulario");
                    }
                } catch (error) {
                    console.error("Error en la conexión con Formspree:", error);
                }
            }
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false); // Cerrar modal de éxito
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false); // Cerrar modal de error
    };

    return (
        <div>
            <button
                className="bg-teal text-white rounded-lg px-4 py-2 transition transform hover:scale-105 focus:outline-none"
                onClick={openModal}
            >
                Quiero más información
            </button>

            {/* Modal de formulario */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <span
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            onClick={closeModal}
                        >
                            &times;
                        </span>

                        <form onSubmit={handleSubmit}>
                            {/* Campos Comunes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2">Nombre:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`border p-2 w-full ${isSubmitted && errors.name ? 'border-red' : ''}`}
                                    />
                                    {isSubmitted && errors.name && <p className="text-red text-sm">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block mb-2">Apellidos:</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className={`border p-2 w-full ${isSubmitted && errors.lastname ? 'border-red' : ''}`}
                                    />
                                    {isSubmitted && errors.lastname && <p className="text-red text-sm">{errors.lastname}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`border p-2 w-full ${isSubmitted && errors.email ? 'border-red' : ''}`}
                                    />
                                    {isSubmitted && errors.email && <p className="text-red text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2">Teléfono:</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`border p-2 w-full ${isSubmitted && errors.phone ? 'border-red' : ''}`}
                                    />
                                    {isSubmitted && errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address" className="block mb-2">Dirección:</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`border p-2 w-full ${isSubmitted && errors.address ? 'border-red' : ''}`}
                                />
                                {isSubmitted && errors.address && <p className="text-red text-sm">{errors.address}</p>}
                            </div>

                            {/* Dropdown de Información */}
                            <div className="mb-4">
                                <label htmlFor="interests" className="block mb-2">Solicito Información Sobre:</label>
                                <select
                                    id="interests"
                                    name="interests"
                                    value={formData.interests}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                >
                                    {infoOptions.map((option) => (
                                        <option key={option.title} value={option.title}>{option.title}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Campo de consulta */}
                            <div className="mb-4">
                                <label htmlFor="consultation" className="block mb-2">Consulta (máx 500 caracteres):</label>
                                <textarea
                                    id="consultation"
                                    name="consultation"
                                    value={formData.consultation}
                                    onChange={handleChange}
                                    maxLength="500"
                                    className={`border p-2 w-full ${isSubmitted && errors.consultation ? 'border-red' : ''}`}
                                    rows="2"  // Ajustar tamaño para hacer más pequeño el contenedor
                                />
                                {isSubmitted && errors.consultation && <p className="text-red text-sm">{errors.consultation}</p>}
                            </div>

                            {/* Texto de contacto adicional */}
                            <div className="mb-4">
                                <p>También puedes escribirnos a <a href="mailto:nuevaelipa@gmail.com" className="text-teal">nuevaelipa@gmail.com</a>.</p>
                                <p>Si lo prefieres, puedes contactarnos a través de nuestras redes sociales:</p>
                                <div className="flex justify-center space-x-4 mt-2">
                                    <a href="https://www.facebook.com/LaNuevaElipa/?locale=es_ES"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                                    </a>
                                    <a href="https://www.instagram.com/asociacion_la_nueva_elipa/?hl=es"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                                    </a>
                                    <a href="https://wa.me/34722233425"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-teal text-white rounded-lg px-4 py-2 mt-4 block mx-auto transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de éxito */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Enhorabuena!</h2>
                        <p className="mb-4">Tu formulario ha sido enviado con éxito. Gracias por ponerte en contacto con la Asociación del Barrio. ¡Nos pondremos en contacto contigo muy pronto!</p>
                        <button
                            onClick={closeSuccessModal}
                            className="bg-teal text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de error */}
            {isErrorModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">¡Atención!</h2>
                        <p className="mb-4">Ya se ha enviado una solicitud con este nombre y apellidos.</p>
                        <button
                            onClick={closeErrorModal}
                            className="bg-red text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 focus:outline-none"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CTAInformacion;
