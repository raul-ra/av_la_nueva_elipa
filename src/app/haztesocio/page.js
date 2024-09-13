"use client";

import React, { useState } from 'react';

// Función para limpiar el input y evitar inyecciones XSS
function sanitizeInput(input) {
    return input.replace(/[<>"'&/]/g, ""); // Elimina caracteres peligrosos para XSS
}

export default function HazteSocio() {
    // Estado para gestionar la opción de hacerse socio o no
    const [isMember, setIsMember] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        interests: ''
    });

    // Estado para los errores de validación
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado para saber si se ha hecho submit
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir o cerrar la modal

    const handleMembershipChange = (e) => {
        setIsMember(e.target.value === "yes");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Limpiamos el input para prevenir XSS
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
        const phonePattern = /^[0-9]{9,10}$/; // Simple regex para validar el teléfono
        if (!formData.phone || !phonePattern.test(formData.phone)) {
            tempErrors.phone = "Introduce un teléfono válido";
            valid = false;
        }
        if (!formData.address) {
            tempErrors.address = "La dirección es obligatoria";
            valid = false;
        }
        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);  // Establecer que se ha intentado enviar

        // Si las validaciones son correctas
        if (validate()) {
            try {
                const response = await fetch("https://formspree.io/f/xnnayzan", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Mostrar modal de éxito si el formulario se envía correctamente
                    setIsModalOpen(true);
                } else {
                    console.error("Error al enviar el formulario");
                }
            } catch (error) {
                console.error("Error en la conexión con Formspree:", error);
            }
        }
    };

    const handleAccept = () => {
        setIsModalOpen(false); // Cerrar la modal
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Modal de éxito */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Enhorabuena!</h2>
                        <p className="mb-4">Tu formulario ha sido enviado con éxito. Gracias por unirte a la Asociación del Barrio. ¡Nos pondremos en contacto contigo muy pronto!</p>
                        <button
                            onClick={handleAccept}
                            className="bg-[#60c6b4] text-white rounded-lg px-4 py-2 mt-4 transition transform active:scale-95 active:bg-[#4da594] focus:outline-none"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Hazte Socio y Contribuye a Mejorar La Elipa
            </h1>

            {/* Descripción */}
            <p className="text-center mb-8 text-lg">
                Al hacerte socio/a, no solo contribuyes al mantenimiento de nuestra Asociación, sino que ayudas a mejorar la calidad de vida en La Elipa.
                Ser parte de nuestra comunidad vecinal te ofrece la oportunidad de participar activamente en decisiones y disfrutar de los beneficios que aquí te detallamos.
            </p>

            {/* Beneficios con Iconos */}
            <h2 className="text-2xl text-center font-bold mb-4">¿Qué te ofrecemos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                    <img src="/icons/Defensa de tus intereses como vecino_a de La Elipa.svg" alt="Defensa de Intereses" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Defensa de tus intereses como vecino/a de La Elipa</p>
                </div>

                <div className="flex items-center">
                    <img src="/icons/Talleres y Actividades.svg" alt="Talleres y Actividades" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Acceso a talleres y actividades de socialización</p>
                </div>

                <div className="flex items-center">
                    <img src="/icons/Seguro de responsabilidad civil para actividades de la Asociación.svg" alt="Seguro" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Seguro de responsabilidad civil para actividades de la Asociación</p>
                </div>

                <div className="flex items-center">
                    <img src="/icons/Colaboración.svg" alt="Colaboración" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Posibilidad de colaborar en acciones que te motiven</p>
                </div>

                <div className="flex items-center">
                    <img src="/icons/Asamblea.svg" alt="Asamblea" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Voz y voto en las asambleas</p>
                </div>

                <div className="flex items-center">
                    <img src="/icons/Socios.svg" alt="Socios" className="h-12 w-12 mr-4" />
                    <p className="text-lg">Formar parte de una Asociación con más de 600 socios</p>
                </div>
            </div>

            {/* ¿Deseas hacerte socio/a por tan solo 25€ al año? */}
            <h3 className="text-xl font-bold mb-4 text-center">¿Deseas hacerte socio/a por tan solo 25€ al año?</h3>

            {/* Formulario de Inscripción */}
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
                            className={`border p-2 w-full ${isSubmitted && errors.name ? 'border-red-500' : ''}`}
                        />
                        {isSubmitted && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block mb-2">Apellidos:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className={`border p-2 w-full ${isSubmitted && errors.lastname ? 'border-red-500' : ''}`}
                        />
                        {isSubmitted && errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
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
                            className={`border p-2 w-full ${isSubmitted && errors.email ? 'border-red-500' : ''}`}
                        />
                        {isSubmitted && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2">Teléfono:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`border p-2 w-full ${isSubmitted && errors.phone ? 'border-red-500' : ''}`}
                        />
                        {isSubmitted && errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                        className={`border p-2 w-full ${isSubmitted && errors.address ? 'border-red-500' : ''}`}
                    />
                    {isSubmitted && errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                {/* Cuarta Fila: Intereses */}
                <div className="mb-4">
                    <label htmlFor="interests" className="block mb-2">Si quieres colaborar activamente, cuéntanos cuáles son tus intereses y cómo quieres participar:</label>
                    <textarea
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        rows="4"
                    />
                </div>

                {/* ¿Deseas hacerte socio/a? */}
                <label className="block mb-2">¿Deseas hacerte socio/a?</label>
                <div className="mb-4">
                    <input type="radio" name="membership" value="yes" onChange={handleMembershipChange} className="mr-2" /> Sí
                    <input type="radio" name="membership" value="no" onChange={handleMembershipChange} className="ml-6 mr-2" /> No
                </div>

                {/* Mostrar si marca "Sí" */}
                {isMember && (
                    <div className="mb-4">
                        <label className="block mb-2">Forma de Pago:</label>
                        <div>
                            <input type="radio" name="payment" value="association" className="mr-2" /> Asociación vecinal La Nueva Elipa
                        </div>
                        <div>
                            <input type="radio" name="payment" value="transfer" className="mr-2" /> Transferencia a ES92 2100 2869 3313 0054 9940 con concepto "nombre+apellido+cuota2024"
                        </div>
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
    );
}
