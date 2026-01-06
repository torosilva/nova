import React from 'react';
import partnerLogos from '../assets/partner-logos-v4.png';
import clientLogos from '../assets/client-logos-v4.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '4rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Professional Ribbon Lens */}
                <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        opacity: 0.8
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: '60px', // The "Lens" height
                                objectFit: 'cover', // Automatically crops the square white space
                                objectPosition: 'center',
                                filter: 'grayscale(100%)',
                                opacity: 0.6,
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Professional Ribbon Lens */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        opacity: 0.8
                    }}>
                        Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: '100%',
                                maxWidth: '850px',
                                height: '80px', // The "Lens" height
                                objectFit: 'cover', // Automatically crops the square white space
                                objectPosition: 'center',
                                filter: 'grayscale(100%)',
                                opacity: 0.6,
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </div>
                </div>

            </div>

            <style>{`
                img:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) !important;
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
};
