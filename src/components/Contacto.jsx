//falta lo del submit q supongo q es de backend

import React, {useState} from "react";
import styled from "styled-components";
import "../index.css"



export default function Contacto () {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    function validate (inputs) {
        let errors = {};
        
        if (!inputs.name) {
            errors.name = "Falta tu nombre"
        }
        if (inputs.phone < 0) {
            errors.phone = "Ingresa un número válido"
        }
        if (!regexEmail.test(inputs.email)) {
            errors.email = "Correo Inválido"
        }
        if (!inputs.subject) {
            errors.subject = "Falta el asunto"
        }
        if (!inputs.message) {
            errors.message = "Falta el mensaje"
        }
    
        return errors
    }

    const handleChanges = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
        setErrors(validate({...inputs, [e.target.name]: e.target.value}))
        
    }

    return <DivForm>
        <LabelForm>Nombre:</LabelForm>
        <InputForm name="name" type="text" value={inputs.name} onChange={handleChanges}
        className={errors.name && "warning"} placeholder="Tu nombre..."/>
        {errors.name && <WarningP>{errors.name}</WarningP>}

        <LabelForm>Email:</LabelForm>
        <InputForm name="email" type="email" value={inputs.email} onChange={handleChanges}  className={errors.email && "warning"} placeholder="Tu email..."/>
        {errors.email && <WarningP>{errors.email}</WarningP>}
        
        <LabelForm>Teléfono:</LabelForm>
        <InputForm name="phone" type="number" value={inputs.phone} onChange={handleChanges}  className={errors.phone && "warning"} placeholder="Tu teléfono..."/>
        {errors.phone && <WarningP>{errors.phone}</WarningP>}

        <LabelForm>Asunto:</LabelForm>
        <InputForm name="subject" type="text" value={inputs.subject} onChange={handleChanges}  className={errors.subject && "warning"} placeholder="Indica el asunto..."/>
        {errors.subject && <WarningP>{errors.subject}</WarningP>}

        <LabelForm>Mensaje:</LabelForm>
        <TextAreaForm name="message" type="text" value={inputs.message} onChange={handleChanges}  className={errors.message && "warning"} placeholder="Dejanos tu mensaje..."/>

        <SubmitForm type="submit">Enviar</SubmitForm>
    </DivForm>
}



const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const LabelForm = styled.label`
    font-size: larger;
    color: white;
    margin: auto;
    margin-top: 30px;
`
const InputForm = styled.input`
    width: 400px;
    margin: auto;
;

`
const TextAreaForm = styled.textarea`
    width: 400px;
    height: 100px;
    margin: auto;
`
const SubmitForm = styled.button`
    max-width: 200px;
    margin: auto;
`
const WarningP = styled.p`
    font-size: larger;
    color: red;
    margin: auto;
`