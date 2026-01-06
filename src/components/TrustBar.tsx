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
                zIndex: 10 // Ensure it sits above the Hero glow
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Absolute Window Cropping */}
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
                        height: '45px', // Exact height of the logo strip
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'white'
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100%',
                                height: 'auto',
                                transform: 'translate(-50%, -50%) scale(4.5)', // Aggressive zoom to crop white space
                                filter: 'grayscale(100%)',
                                opacity: 0.6,
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Absolute Window Cropping */}
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
                        height: '60px', // Exact height of the logo strip
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'white'
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100%',
                                height: 'auto',
                                transform: 'translate(-50%, -50%) scale(4.5)', // Aggressive zoom to crop white space
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
                    transform: translate(-50%, -50%) scale(4.7) !important;
                }
            `}</style>
        </section>
    );
};
