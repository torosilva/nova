import React from 'react';
import partnerLogos from '../assets/partner-logos.png';

export const TrustBar: React.FC = () => {
    return (
        <section style={{
            padding: '2rem 0',
            backgroundColor: 'white',
            borderBottom: '1px solid #F1F5F9',
            position: 'relative',
            zIndex: 5
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase'
                    }}>
                        Nuestra Experiencia está Validada por
                    </span>

                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        opacity: 0.7,
                        filter: 'grayscale(100%) brightness(1.1)',
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        justifyContent: 'center'
                    }} className="trust-logos">
                        <img
                            src={partnerLogos}
                            alt="Meta, Google, Shopify Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '600px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                .trust-logos:hover {
                    opacity: 1;
                    filter: grayscale(0%);
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
