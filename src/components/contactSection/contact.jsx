import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Créer la chaîne mailto lors de la mise à jour des champs
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
        <form onSubmit={(event) => { event.preventDefault(); window.location.href = mailtoLink; }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Recipient's email" required />
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" required />
            <button type="submit">Send Email</button>
        </form>
    );
};

export default Contact;
