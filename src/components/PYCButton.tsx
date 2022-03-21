import React, { MouseEventHandler } from 'react';
import Link from '@docusaurus/Link';

interface PYCButtonProps {
    label?: string;
    type?: string;
    icon?: React.ReactElement | string;
    link?: string;
    isDisabled?: boolean;
    onClick?: () => MouseEventHandler | void;
    children?: string;
}

const PYCButton: React.FC<PYCButtonProps> = ({
    type,
    label,
    icon,
    link,
    isDisabled,
    onClick,
    children
}) => {
    const assertType = (type: string): string => {
        // const VALID_BUTTON_TYPES: string[] = ['outlined', 'filled'];
        const finalTypes: string[] = [];
        type.split(' ').forEach((type) => {
            finalTypes.push('pyc-button--' + type);
        });
        return finalTypes.join(' ');
    };

    const ButtonBase = (
        <button className={ `pyc-button${ type ? ' ' + assertType(type) : '' }` } aria-label={ label || children?.toString() } disabled={ isDisabled } onClick={ onClick }>
            { icon && <i className="pyc-button__icon" aria-hidden="true">{ icon }</i> }
            { children && <span className="pyc-button__label">{ children }</span> }
        </button>
    );

    if (!link) {
        return ButtonBase;
    } else {
        return (
            <Link className={ `pyc-button${ type ? ' ' + assertType(type) : '' }` } aria-label={ label || children?.toString() } href={ link }>
                { icon && <i className="pyc-button__icon" aria-hidden="true">{ icon }</i> }
                { children && <span className="pyc-button__label">{ children }</span> }
            </Link>
        );
    }
};

export default PYCButton;
