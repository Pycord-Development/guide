import React from 'react';

interface PYCTitleBarProps {
    title?: string;
    icon?: React.ReactElement | string;
    id?: string;
}

const PYCTitleBar: React.FC<PYCTitleBarProps> = ({ title, icon, id, children, ...props }) => {
    return (
        <div className="pyc-title-bar" id={ id } { ...props }>
            { icon && <PYCTitleBarIcon icon={ icon } /> }
            <h2 className="pyc-title-bar__title">{ title || children }</h2>
        </div>
    );
};

const PYCTitleBarIcon = ({ icon }: React.ReactElement | any) => {
    return (
        <i className="pyc-title-bar__icon">
            { icon }
        </i>
    );
}

export default PYCTitleBar;
