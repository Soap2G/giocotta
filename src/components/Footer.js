import React from "react";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import './Footer.css'
 
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="box">
      <div className="footer-div">
        {t('madeByUs')} <Icon icon="solar:heart-bold" style={{ color: '#e63f34' }}/> {t('andWith')} <Icon style={{ borderRadius: "50%" }} icon="skill-icons:react-dark" />
      </div>
      <div className="footer-case">
        {t('checkOur')} <a style={{ color: 'var(--color-text)' }} href="https://github.com/Soap2G/giocotta" target="_blank" rel="noopener noreferrer"><Icon style={{ verticalAlign: 'middle' }} icon="mdi:github" /></a>
      </div>
    </div>
  );
};

export default Footer;