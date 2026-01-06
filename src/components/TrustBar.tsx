import React from 'react';
import partnerLogos from '../assets/partner-logos-v4.png';
import clientLogos from '../assets/client-logos-v4.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '3rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Row */}
                <div style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        opacity: 0.6
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: 'auto',
                                maxWidth: '100%',
                                height: '120px', // Professional visual height for square assets
                                filter: 'grayscale(100%) brightness(0.9)',
                                opacity: 0.6,
                                objectFit: 'contain',
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Row */}
                <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        opacity: 0.6
                    }}>
                        Clientes
                    </h4>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: 'auto',
                                maxWidth: '100%',
                                height: '140px', // Professional visual height for square assets
                                filter: 'grayscale(100%) brightness(0.9)',
                                opacity: 0.6,
                                objectFit: 'contain',
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </div>
                </div>

            </div>

            <style>{`
                img:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transform: scale(1.01);
                }
            `}</style>
        </section>
    );
};
