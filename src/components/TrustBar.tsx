import React from 'react';
import partnerLogos from '../assets/partner-logos.png';
import clientLogos from '../assets/client-logos.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '0 0 2rem',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - "Zooming" in to kill the PNG whitespace */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: '0 0 -3.5rem 0', // Pulling image up
                        position: 'relative',
                        zIndex: 2
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '140px', // Visible window
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                height: '400px', // Dramatically scale up to fill the 140px window and hide margins
                                width: 'auto',
                                marginTop: '20px', // Center the logos vertically in the crop
                                filter: 'grayscale(100%) contrast(1.1)',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - "Zooming" in to kill the PNG whitespace */}
                <div style={{ width: '100%', textAlign: 'center', marginTop: '-3rem' }}>
                    <h4 style={{
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: '0 0 -4.5rem 0', // Pulling image up
                        position: 'relative',
                        zIndex: 2
                    }}>
                        Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '140px', // Visible window
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                height: '500px', // Dramatically scale up to hide margins
                                width: 'auto',
                                marginTop: '10px', // Center the logos vertically in the crop
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
