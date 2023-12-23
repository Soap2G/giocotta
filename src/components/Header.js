import React from "react";
import './Header.css'; // Make sure to create a corresponding CSS file
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
  };

  const nextLanguage = i18n.language === 'en' ? 'it' : 'en';

  return (
    <div className="header-box">
      <div className="header-nav">
        <Link
          className="nav-link active"
          style={{ 
            fontFamily: "'Bellefair', serif",
            fontWeight: "400",
            color: 'var(--text-color)'}}
          aria-current="page"
          to="/"
        >
          home
        </Link>
        |
        <Link
          className="nav-link active"
          style={{ 
            fontFamily: "'Bellefair', serif",
            fontWeight: "400",
            color: 'var(--text-color)'}}
          aria-current="page"
          to="/blog"
        >
          {t('journal')}
        </Link>
        |
        <span onClick={changeLanguage}
        style={{ 
            cursor: 'pointer'}}
        >{nextLanguage}</span>
      </div>
    </div>
  );
};

export default Header;