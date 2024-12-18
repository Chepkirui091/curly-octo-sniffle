import React from 'react';
import Image from 'next/image';

type LogoProps = {
    size?: 'small' | 'medium' | 'large';
    className?: string;
};

const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
    const sizeClasses = {
        small: 'w-32 h-auto',
        medium: 'w-64 h-auto',
        large: 'w-96 h-auto',
    };

    const width = 489;
    const height = 117;

    return (
        <div className={`flex items-center ${className}`}>
            <Image
                src="/static/logo.png"
                alt="Logo"
                width={width}
                height={height}
                className={sizeClasses[size]}
            />
        </div>
    );
};

export default Logo;
