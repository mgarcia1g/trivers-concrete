import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import '../form-component/form.css'
import closeImg from '../../images/x.png'
const Form = ({ signUp }) => {

    const form = useRef();
    let turnFormOff = false;


    function turnSignUpFalse(){
        signUp(turnFormOff)

    }

    const [serviceNeeded, setServiceNeeded] = useState("");

    const handleChange = (e) => {
        setServiceNeeded(e.target.value);
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wqxlr9s', 'template_cwhye81', form.current, 'zi5kfS4UTnRcSovZI')
            .then((result) => {
                console.log(result.text);
                signUp(turnFormOff);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form_page">
            <img  className="x" src={closeImg} alt="x" onClick={turnSignUpFalse}/>
            <div className="arrow">☞ </div>
            <h2 className="getFreeEstimatebtn">Get Your FREE Estimate! </h2>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <label>
                    <select value={serviceNeeded} onChange={handleChange}>
                        <option   selected>What Service Do You Need?</option>
                        <option value="Driveway installation or repair">Driveway installation or repair</option>
                        <option value="Patio or walkway installation or repair">Patio or walkway installation or repair</option>
                        <option value="Foundation installation or repair">Foundation installation or repair</option>
                        <option value="Concrete staining or sealing">concrete staining or sealing</option>
                        <option value="Other">other</option>
                    </select>
                </label><br />
                <input type="text"
                    placeholder="Full name"
                    name="user_name"
                    required /> <br />
                <input type="email"
                    placeholder="Email"
                    name="user_email"
                    required /><br />
                <input type="tel" id="phone"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="7 digit phone number"
                    name="number"
                    required /><br />
                <textarea name="message" color="0" rows="0" value={serviceNeeded} hidden={true}/>
                <br />
                <button type="submit" > send message</button>
            </form>


        </div>


    )
}

export default Form;

