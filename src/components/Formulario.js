import React, { useState, useContext } from 'react';
import '../styles/Formulario.css'

export function Formulario() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    const validarCorreo = (correo) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(correo).toLowerCase());
    };
    const validarNombre = () => {
        const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
        return re.test(String(nombre).trim());
    };

    const validarTelefono = () => {
        const re = /^\+?[\d\s\-\(\)]+$/;
        return re.test(String(telefono).trim())
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarNombre(nombre)) {
            alert("Por favor ingrese su nombre")
            return;
        }
        if (!validarCorreo(correo)) {
            alert("Ingrese una dirección de correo válida")
            return;
        }
        if (!validarTelefono(telefono)) {
            alert("Ingrese su número de teléfono")
            return;
        }
        if (!mensaje.trim()) {
            alert("Ingrese su mensaje por favor.")
        }

        alert("Gracias por contactarnos");

        setNombre('');
        setCorreo('');
        setTelefono('');
        setMensaje('');
    };
    return (
        <div className="Formulario">
            <h1>Contáctanos</h1>
            <fieldset>
                <form action="#" method="get" onSubmit={handleSubmit}>
                    <label for="nombre">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(e.target.value)
                        }
                        placeholder="Ingrese su nombre"
                        required
                    />
                    <label for="correo">Correo </label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        value={correo}
                        onChange={(e) =>
                            setCorreo(e.target.value)
                        }
                        placeholder="Ingrese su correo"
                        required
                    />
                    <label for="telefono">Contacto</label>
                    <input
                        type="tel"
                        name="telefono"
                        id="telefono"
                        value={telefono}
                        onChange={(e) =>
                            setTelefono(e.target.value)
                        }
                        placeholder="Ingrse su número de teléfono"
                        required
                    />

                    <label for="mensaje">Mensaje</label>
                    <textarea
                        className='text-form'
                        name="mensaje"
                        id="mensaje"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setMensaje(e.target.value)
                        }
                        placeholder="Cuentanos un poco más de ti y nos pondremos en contacto a la brevedad"
                        required
                    ></textarea>
                    <button
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </fieldset>
        </div>
    );

}
