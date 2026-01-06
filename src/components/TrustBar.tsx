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
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Natural Layout */}
                <div style={{ width: '100%', maxWidth: '850px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{ width: '100%', opacity: 0.8 }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                filter: 'grayscale(100%) contrast(1.1)',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Natural Layout */}
                <div style={{ width: '100%', maxWidth: '950px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        Clientes
                    </h4>
                    <div style={{ width: '100%', opacity: 0.8 }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: '100%',
                                height: 'auto',
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
