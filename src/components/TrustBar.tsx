import React from 'react';
import partnerLogos from '../assets/partner-logos-v3.png';
import clientLogos from '../assets/client-logos-v3.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '4rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 10
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Stable Ribbon Layout */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        opacity: 0.8
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '60px', // Perfect visibility height
                                filter: 'grayscale(100%) contrast(1.1)',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Stable Ribbon Layout */}
                <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        opacity: 0.8
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '70px', // Slightly larger for SME logos
                                filter: 'grayscale(100%) contrast(1.1)',
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
                    transition: all 0.4s ease;
                }
            `}</style>
        </section>
    );
};
