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
                padding: '4rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5,
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0.3s'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                }}>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#64748B',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                    }}>
                        Nuestra Experiencia está Validada por
                    </span>

                    <div style={{
                        width: '100%',
                        maxWidth: '650px',
                        opacity: 0.6,
                        filter: 'grayscale(100%) contrast(1.1)',
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
                    transform: scale(1.02);
                }
                @media (max-width: 768px) {
                    .trust-logos {
                        max-width: 100%;
                        padding: 0 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};
