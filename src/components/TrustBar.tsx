import React from 'react';
import partnerLogos from '../assets/partner-logos-v2.png';
import clientLogos from '../assets/client-logos-v2.png';

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

                {/* Ecosystem Segment - Adjusted Window */}
                <div style={{ width: '100%', maxWidth: '950px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '110px',
                        overflow: 'hidden',
                        position: 'relative',
                        opacity: 0.8
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(1.15)',
                                filter: 'grayscale(100%) contrast(1.1)',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Adjusted Window */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '120px',
                        overflow: 'hidden',
                        position: 'relative',
                        opacity: 0.8
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(1.2)',
                                filter: 'grayscale(100%) contrast(1.1)',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </div>

            </div>

            <style>{`
                .container > div:hover div {
                    opacity: 1;
                    transition: all 0.4s ease;
                }
                .container > div:hover img {
                    filter: grayscale(0%) brightness(1) !important;
                    transition: all 0.4s ease;
                }
            `}</style>
        </section>
    );
};
