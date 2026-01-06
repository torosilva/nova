import React from 'react';
import partnerLogos from '../assets/partner-logos.png';
import clientLogos from '../assets/client-logos.png';

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
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment - Large & Horizontal */}
                <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2.5rem',
                    }}>
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: 'var(--color-brand-blue)',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                        }}>
                            Ecosystem
                        </span>

                        <div style={{
                            width: '100%',
                            opacity: 0.8,
                            filter: 'grayscale(100%) contrast(1.1)',
                            display: 'flex',
                            justifyContent: 'center'
                        }} className="logos-row">
                            <img
                                src={partnerLogos}
                                alt="Ecosystem Partners"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '75px',
                                    maxWidth: '850px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Clients Segment - Large & Horizontal */}
                <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2.5rem',
                    }}>
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: 'var(--color-brand-blue)',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                        }}>
                            Clientes
                        </span>

                        <div style={{
                            width: '100%',
                            opacity: 0.8,
                            filter: 'grayscale(100%) contrast(1.1)',
                            display: 'flex',
                            justifyContent: 'center'
                        }} className="logos-row">
                            <img
                                src={clientLogos}
                                alt="Nuestros Clientes"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '90px',
                                    maxWidth: '950px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .logos-row:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transform: scale(1.01);
                    transition: all 0.4s ease;
                }
                @media (max-width: 768px) {
                    .container { gap: 3rem; }
                    img { max-height: 50px !important; }
                }
            `}</style>
        </section>
    );
};
