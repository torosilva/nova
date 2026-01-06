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
                padding: '4rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5,
                overflow: 'hidden'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>

                    {/* Ecosystem Segment */}
                    <div style={{ ...sectionStyle, transitionDelay: '0.2s' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                color: 'var(--color-brand-blue)',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase'
                            }}>
                                Ecosystem
                            </span>

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
                                        maxWidth: '450px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Clients Segment */}
                    <div style={{ ...sectionStyle, transitionDelay: '0.4s' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                color: 'var(--color-brand-blue)',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase'
                            }}>
                                Clientes
                            </span>

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
                                        maxWidth: '500px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
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
