/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "../css/CTAForm.css"
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';

function CTAForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_b3dqxvk', 'template_5pgxpeh', form.current, {
                publicKey: '4P5dgekPUp0iljE8X',
                from_name: 'BoltEdu Ghana',
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                }
            );
        e.target.reset();
    };

    return (
        <div>
            <ToastContainer />
            <form ref={form} onSubmit={sendEmail} >
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email Address" />
                <button type="submit">Join the waitlist</button>
            </form>
        </div>
    )
}

export default CTAForm