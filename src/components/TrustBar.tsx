import React from 'react';
import partnerLogos from '../assets/partner-logos-v2.png';
import clientLogos from '../assets/client-logos-v2.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '2rem 0 4rem',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.8, filter: 'grayscale(100%)' }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                height: '35px',
                                width: 'auto',
                                maxWidth: '90vw',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        Clientes
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.8, filter: 'grayscale(100%)' }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                height: '40px', // Slightly taller for SME logos
                                width: 'auto',
                                maxWidth: '90vw',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

            </div>

            <style>{`
                img:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};
