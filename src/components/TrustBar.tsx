import React, { useEffect, useState, useRef } from 'react';
import partnerLogos from '../assets/partner-logos.png';
import clientLogos from '../assets/client-logos.png';

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

    const sectionStyle: React.CSSProperties = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <section
            ref={sectionRef}
            style={{
                padding: '5rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5,
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem', // Breathable gap between categories
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment - Full Width Row */}
                <div style={{ ...sectionStyle, transitionDelay: '0.2s', width: '100%' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '900px' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                color: 'var(--color-brand-blue)',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Ecosystem
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                        </div>

                        <div style={{
                            width: '100%',
                            opacity: 0.6,
                            filter: 'grayscale(100%) contrast(1.1)',
                            transition: 'all 0.5s ease',
                            display: 'flex',
                            justifyContent: 'center'
                        }} className="trust-logos">
                            <img
                                src={partnerLogos}
                                alt="Ecosystem Partners"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '650px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Clients Segment - Full Width Row */}
                <div style={{ ...sectionStyle, transitionDelay: '0.5s', width: '100%' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '900px' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                color: 'var(--color-brand-blue)',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Clientes
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                        </div>

                        <div style={{
                            width: '100%',
                            opacity: 0.6,
                            filter: 'grayscale(100%) contrast(1.1)',
                            transition: 'all 0.5s ease',
                            display: 'flex',
                            justifyContent: 'center'
                        }} className="trust-logos">
                            <img
                                src={clientLogos}
                                alt="Nuestros Clientes"
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

            </div>

            <style>{`
                .trust-logos:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transform: scale(1.02);
                }
                @media (max-width: 768px) {
                    .trust-logos {
                        max-width: 100%;
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </section>
    );
};
