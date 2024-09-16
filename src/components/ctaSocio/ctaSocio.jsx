"use client";

import React, { useState, useEffect } from 'react';

// Función para limpiar el input y evitar inyecciones XSS
function sanitizeInput(input) {
    return input.replace(/[<>"'&/]/g, ""); // Elimina caracteres peligrosos para XSS
}

const CTASocio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir o cerrar la modal
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Estado para abrir la modal de éxito
    const [isAlertModalOpen, setIsAlertModalOpen] = useState(false); // Estado para abrir la modal de alerta
    const [isMember, setIsMember] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        interests: '',
        payment: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado para saber si se ha hecho submit

    useEffect(() => {
        // Resetear el formulario y estados cuando la modal se cierra
        if (!isModalOpen) {
            setIsMember(null);
            setFormData({
                name: '',
                lastname: '',
                email: '',
                phone: '',
                address: '',
                interests: '',
                payment: '',
            });
            setErrors({});
            setIsSubmitted(false);
        }
    }, [isModalOpen]);

    const handleMembershipChange = (e) => {
        const isMember = e.target.value === "yes";
        setIsMember(isMember);

        // Actualizar el campo "interests" en función de si es miembro o no
        setFormData({
            ...formData,
            payment: '',
            interests: isMember ? 'Afiliación/Suscripción' : 'Posible Donación'
        });
    };

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

        if (isMember && !formData.payment) {
            tempErrors.payment = "Debes seleccionar una forma de pago";
            valid = false;
        }

        // Verificar si el nombre y apellido ya fueron enviados antes
        const sentForms = JSON.parse(localStorage.getItem('sentForms')) || [];
        if (sentForms.some(item => item.name === formData.name && item.lastname === formData.lastname)) {
            setIsAlertModalOpen(true); // Abrir modal de alerta
            valid = false;
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);  // Establecer que se ha intentado enviar

        if (validate()) {
            try {
                const response = await fetch("https://formspree.io/f/xnnayzan", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Guardar el nombre y apellido en localStorage para futuras validaciones
                    const sentForms = JSON.parse(localStorage.getItem('sentForms')) || [];
                    sentForms.push({ name: formData.name, lastname: formData.lastname });
                    localStorage.setItem('sentForms', JSON.stringify(sentForms));

                    // Mostrar modal de éxito si el formulario se envía correctamente
                    setIsSuccessModalOpen(true);
                    setIsModalOpen(false); // Cerrar la modal principal
                } else {
                    console.error("Error al enviar el formulario");
                }
            } catch (error) {
                console.error("Error en la conexión con Formspree:", error);
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
        setIsSuccessModalOpen(false);
    };

    const closeAlertModal = () => {
        setIsAlertModalOpen(false); // Cerrar modal de alerta
    };

    return (
        <div>
            {/* CTA Button */}
            <button
                className="bg-[#60c6b4] text-white rounded-lg px-4 py-2 transition transform hover:scale-105 focus:outline-none"
                onClick={openModal}
            >
                ¿Quieres colaborar con Nosotr@s?
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">

                        {/* Botón de cierre en forma de "X" */}
                        <span
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            onClick={closeModal}
                        >
                            &times;
                        </span>

                        <h2 className="text-2xl font-bold mb-4">Únete a Nuestra Asociación</h2>

                        <form onSubmit={handleSubmit}>
                            {/* Primera Fila: Nombre y Apellidos */}
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

                            {/* Segunda Fila: Correo y Teléfono */}
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

                            {/* Tercera Fila: Dirección */}
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

                            {/* ¿Deseas hacerte socio/a por tan solo 25€ al año? */}
                            <h3 className="text-xl font-bold mb-4 text-center">¿Deseas hacerte socio/a por tan solo 25€ al año?</h3>

                            {/* ¿Deseas hacerte socio/a? */}
                            <label className="flex justify-center mb-2">¿Deseas hacerte socio/a?</label>
                            <div className="flex justify-center mb-4">
                                <input type="radio" name="membership" value="yes" onChange={handleMembershipChange} className="mr-2" /> Sí
                                <input type="radio" name="membership" value="no" onChange={handleMembershipChange} className="ml-6 mr-2" /> No
                            </div>

                            {/* Mostrar si marca "Sí" */}
                            {isMember && (
                                <div className="mb-4">
                                    <label className="flex justify-center mb-2">Forma de Pago:</label>
                                    <div>
                                        <input type="radio" name="payment" value="association" onChange={handleChange} className="mr-2" /> Asociación vecinal La Nueva Elipa
                                    </div>
                                    <div>
                                        <input type="radio" name="payment" value="transfer" onChange={handleChange} className="mr-2" /> Transferencia a ES92 2100 2869 3313 0054 9940 con concepto "nombre+apellido+cuota2024"
                                    </div>
                                    {isSubmitted && errors.payment && <p className="text-red text-sm">{errors.payment}</p>}
                                </div>
                            )}

                            {/* Mostrar si marca "No" */}
                            {!isMember && isMember !== null && (
                                <div className="mb-4">
                                    <p className="mb-4">Si quieres colaborar con una donación, puedes hacer una transferencia a ES92 2100 2869 3313 0054 9940.</p>
                                </div>
                            )}

                            {/* Botón de Enviar */}
                            <button
                                type="submit"
                                className="bg-[#60c6b4] text-white rounded-lg px-4 py-2 mt-4 block mx-auto transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de éxito */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Enhorabuena!</h2>
                        <p className="mb-4">Tu formulario ha sido enviado con éxito. Gracias por unirte a la Asociación del Barrio. ¡Nos pondremos en contacto contigo muy pronto!</p>
                        <button
                            onClick={closeSuccessModal}
                            className="bg-[#60c6b4] text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de alerta */}
            {isAlertModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">¡Atención!</h2>
                        <p className="mb-4">Ya se ha enviado una solicitud con este nombre y apellidos.</p>
                        <button
                            onClick={closeAlertModal}
                            className="bg-red hover:bg-red-700 text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 focus:outline-none"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CTASocio;
