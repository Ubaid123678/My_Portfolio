import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '+1234567890';
  const whatsappMessage = encodeURIComponent(
    process.env.REACT_APP_WHATSAPP_MESSAGE || 'Hello! I would like to connect with you.'
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="tooltip">Chat on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
