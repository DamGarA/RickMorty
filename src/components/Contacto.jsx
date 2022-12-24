//falta lo del submit q supongo q es de backend

import React, {useState} from "react";
import "../index.css"
import formStyles from "../CSS Modules/form.module.css"



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
            errors.name = "Invalid name"
        }
        else if (inputs.phone < 0) {
            errors.phone = "Invalid number"
        }
        else if (!regexEmail.test(inputs.email)) {
            errors.email = "Invalid email"
        }
        else if (!inputs.subject) {
            errors.subject = "Subject is missing"
        }
        else if (!inputs.message) {
            errors.message = "Message is missing"
        }
    
        return errors
    }

    const handleChanges = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
        setErrors(validate({...inputs, [e.target.name]: e.target.value}))
        
    }

    return <form className={formStyles.form}>
        <label className={formStyles.title}>Contact Us</label>
        
        <div className={formStyles.inputcontainer}>
        <input name="name" type="text" value={inputs.name} onChange={handleChanges}
        className={formStyles.input} placeholder="Your Name..."/>
        </div>

        <div className={formStyles.inputcontainer}>
        <input name="email" type="email" value={inputs.email} onChange={handleChanges}  className={formStyles.input} placeholder="Your Email..."/>
        </div>
        
        <div className={formStyles.inputcontainer}>
        <input name="phone" type="number" value={inputs.phone} onChange={handleChanges}  className={formStyles.input} placeholder="Your Phone..."/>
        </div>

        <div className={formStyles.inputcontainer}>
        <input name="subject" type="text" value={inputs.subject} onChange={handleChanges}  className={formStyles.input} placeholder="Indicates the subject..."/>
        </div>

        <textarea name="message" type="text" value={inputs.message} onChange={handleChanges}  className={formStyles.textarea} placeholder="Your Message..."/>

        <button type="submit" className={formStyles.submit}>Submit</button>

        {errors.name && <p className={formStyles.warningP}>{errors.name}</p>}
        {errors.email && <p className={formStyles.warningP}>{errors.email}</p>}
        {errors.phone && <p className={formStyles.warningP}>{errors.phone}</p>}
        {errors.subject && <p className={formStyles.warningP}>{errors.subject}</p>}
        {errors.message && <p className={formStyles.warningP}>{errors.message}</p>}
    </form>
}



const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
