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
            { threshold: 0.1 }
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
                padding: '1rem 0 2rem',
                backgroundColor: 'white',
                borderBottom: '1px solid #F8FAFC',
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
                    gap: '0.75rem',
                }}>
                    <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#94A3B8',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s ease-out',
                        transitionDelay: '0.2s'
                    }}>
                        Nuestra Experiencia está Validada por
                    </span>

                    <div style={{
                        width: '100%',
                        maxWidth: '850px',
                        opacity: isVisible ? 0.6 : 0,
                        filter: isVisible ? 'grayscale(100%) contrast(1.1)' : 'grayscale(100%) blur(5px)',
                        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transitionDelay: '0.4s',
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
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transform: scale(1.02) !important;
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
