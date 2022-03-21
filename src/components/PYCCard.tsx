import React from 'react';

interface PYCCardProps {
    // Props
}

const PYCCard: React.FC<PYCCardProps> = ({ children }) => {
    return (
        <div className="pyc-card">
            <p>{ children }</p>
        </div>
    );
};

export default PYCCard;
