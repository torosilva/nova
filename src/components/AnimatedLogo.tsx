import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/logo.png';

export const AnimatedLogo: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Proton data: x, y (base), size, color
    const protons = [
        { x: 50, yBase: 42, size: 2.5, color: '#00E5FF', delay: 0 },
        { x: 42, yBase: 55, size: 2, color: '#76FF03', delay: 0.5 },
        { x: 58, yBase: 50, size: 3, color: '#2962FF', delay: 0.2 },
        { x: 50, yBase: 65, size: 2.2, color: '#00E5FF', delay: 0.8 }
    ];

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img
                src={logo}
                alt="NOVA Marketing Lab"
                style={{
                    height: 'clamp(70px, 10vw, 110px)',
                    width: 'auto',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1
                }}
            />

            {/* Animation Overlay Container */}
            <div style={{
                position: 'absolute',
                top: '12%', // Calibrated for the flask part of the logo
                left: '26%',
                width: '48%',
                height: '45%',
                pointerEvents: 'none',
                zIndex: 2,
                overflow: 'visible'
            }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {protons.map((p, i) => {
                        // Calculate vertical motion based on scroll
                        // Dampen the scroll effect and add individual speeds
                        const speed = 0.15 + (i * 0.05);
                        const range = 25; // How much it can move
                        const offset = (Math.sin((scrollY * speed) + p.delay) * range);

                        return (
                            <circle
                                key={i}
                                cx={p.x}
                                cy={p.yBase + offset}
                                r={p.size}
                                fill={p.color}
                                style={{
                                    filter: 'url(#glow)',
                                    opacity: 0.8,
                                    transition: 'cy 0.1s ease-out'
                                }}
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.4;0.9;0.4"
                                    dur={`${2 + i}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};
