import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Atoms.module.scss'

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Adicione um evento de rolagem para verificar quando mostrar o botão
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remova o evento de rolagem quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <button
      className={`${styles.backToTopWrapper} ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp  className={styles.arrowUp}/>
    </button>
  );
};

export default BackToTopButton;
