import React from 'react';
import partnerLogos from '../assets/partner-logos.png';
import clientLogos from '../assets/client-logos.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '2rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment */}
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                color: '#94A3B8',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Ecosystem
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                        </div>

                        <div style={{
                            width: '100%',
                            opacity: 0.7,
                            filter: 'grayscale(100%) contrast(1.1)',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={partnerLogos}
                                alt="Ecosystem Partners"
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

                {/* Clients Segment */}
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                color: '#94A3B8',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Clientes
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#F1F5F9' }}></div>
                        </div>

                        <div style={{
                            width: '100%',
                            opacity: 0.7,
                            filter: 'grayscale(100%) contrast(1.1)',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img
                                src={clientLogos}
                                alt="Nuestros Clientes"
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

            </div>

            <style>{`
                img:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) brightness(1) !important;
                    transition: all 0.3s ease;
                }
                @media (max-width: 768px) {
                    .container {
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};
