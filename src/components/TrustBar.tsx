import React, { useEffect, useState, useRef } from 'react';
import partnerLogos from '../assets/partner-logos.png';

export const TrustBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                padding: '1.5rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5,
                overflow: 'hidden'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)',
                    transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                    }}>
                        Nuestra Experiencia está Validada por
                    </span>

                    <div style={{
                        width: '100%',
                        maxWidth: '850px',
                        opacity: 0.6,
                        filter: 'grayscale(100%) brightness(1.1)',
                        transition: 'all 0.5s ease',
                        display: 'flex',
                        justifyContent: 'center'
                    }} className="trust-logos">
                        <img
                            src={partnerLogos}
                            alt="Meta, Google Ads, Shopify, Google Cloud Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '750px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                .trust-logos:hover {
                    opacity: 1;
                    filter: grayscale(0%) brightness(1);
                    transform: scale(1.02);
                }
                @media (max-width: 768px) {
                    .trust-logos {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};
