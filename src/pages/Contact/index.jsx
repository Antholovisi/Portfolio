import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi du formulaire via EmailJS
    emailjs.sendForm('service_da3s8o8', 'template_bq15b3b', form.current, '_8Fotgv3wXnYYWruD')
      .then(() => {
        alert('Message envoyé avec succès !');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert('Échec de l\'envoi: ' + error.text);
      });
  };

  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>Vous pouvez me contacter à cette adresse email : anthonylovisi@gmail.com ou via ce formulaire.</p>
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user_email">Votre Email :</label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email" 
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
              name="message" 
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
