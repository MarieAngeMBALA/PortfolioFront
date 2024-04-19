import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Creation de la chaîne mailto lors de la mise à jour des champs
    const mailtoLink = `mailto:mbalamarieange@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
      <div className="contact-section">
      <div className="contact-text">
                <h1>Contactez-nous</h1>
                <p>
                    Vous recherchez une agence digitale qui construit avec vous votre projet et qui 
                    s'adapte à tous les supports de communication ? Nous sommes à votre écoute !
                </p>
                {/* Autres éléments de texte si nécessaire */}
            </div>
        <form onSubmit={(event) => { event.preventDefault(); window.location.href = mailtoLink; }} className="contact-form">
            {/*<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Recipient's email" required />*/}
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" required />
            <button type="submit">Send Email</button>
        </form>
      </div>
    );
};

export default Contact;
