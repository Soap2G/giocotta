import React, { useState, useEffect } from 'react';
import './BlogList-style.css';
import sadPablo from './Sad-Pablo-Escobar.webp';

const CountdownTimer = () => {
    const targetDate = '2024-06-24'
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
              };
        }
        
        return timeLeft;
        };
        

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const renderTimeLeft = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return `Ritorna fra ${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi.`;
  };

  return (
    <div className='countdown-title'>
    <div >
        
        
    </div>
        {Object.keys(timeLeft).length === 0 ? 
        <h1>Pronti a partire! A breve arriveranno notizie (speriamo)</h1> : 
        <div>
            <h1>Wow, non c'è niente!</h1>
            <p>Perchè? Beh, il viaggio non è ancora cominciato.</p>
            {renderTimeLeft()}
            <div className='countdown-img'>
            <img src={sadPablo} alt=""/>
            </div>
            
            </div>}
    
    
    </div>

  );
};

export default CountdownTimer;
