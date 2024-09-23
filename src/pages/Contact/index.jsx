import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Générer un lien mailto pour l'envoi d'un email
    const mailtoLink = `mailto:anthonylovisi@gmail.com?subject=Contact depuis le portfolio&body=Email: ${email}%0D%0A%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>Vous pouvez me contacter à cette adresse email : anthonylovisi@gmail.com ou via ce formulaire.</p>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Votre Email :</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="exemple@mail.com" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre Message :</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Que souhaitez-vous dire ?" 
              rows="5" 
              required 
            />
          </div>
          <button type="submit" className="contact-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
