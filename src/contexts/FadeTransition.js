import React, { useEffect, useState } from 'react';

const FadeTransition = ({ isActive, duration, color, children }) => {
    const [visible, setVisible] = useState(isActive);

    useEffect(() => {
        if (isActive) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), duration);
        }
    }, [isActive, duration]);

    return visible ? (
        <div style={{
            transition: `opacity ${duration}ms`,
            opacity: isActive ? 1 : 0,
            backgroundColor: color,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            {children}
        </div>
    ) : null;
};

export default FadeTransition;