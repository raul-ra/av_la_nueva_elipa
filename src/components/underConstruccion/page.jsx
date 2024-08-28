"use client";  // Asegúrate de que este componente se renderice en el cliente

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

export default function UnderConstruction({ pageName }) {
    const [animationData, setAnimationData] = useState(null);
    const [error, setError] = useState(null); // Estado adicional para manejar errores

    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch("/icons/workinprogress.json");
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                setAnimationData(data);
            } catch (err) {
                console.error("Error loading animation:", err);
                setError(err.message); // Guardar el mensaje de error
            }
        };

        fetchAnimation();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    if (error) {
        return <div>Error loading animation: {error}</div>; // Mostrar error si ocurre
    }

    if (!animationData) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h2
                style={{ textAlign: "center", fontSize: "3rem", marginBottom: "20px" }}
            >
                Página en construcción
            </h2>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "20px",
                }}
            >
                {pageName}
            </h1>
            <div style={{ width: 300, height: 300 }}>
                <Lottie options={defaultOptions} />
            </div>
            <h3 style={{ textAlign: "center", fontSize: "2rem", marginTop: "20px" }}>
                Disculpen las molestias
            </h3>
        </div>
    );
}
