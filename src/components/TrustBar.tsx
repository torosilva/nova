import React from 'react';
import partnerLogos from '../assets/partner-logos.png';
import clientLogos from '../assets/client-logos.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '0.5rem 0 1.5rem',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 5
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem', // Minimal gap between labels and logos
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '-0.5rem' // Tighten label to image
                    }}>
                        Ecosystem
                    </span>
                    <div style={{
                        width: '100%',
                        height: '100px', // Force a small height to "crop" image whitespace
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                height: '180px', // Scaling it up within a smaller container to crop whitespace
                                width: 'auto',
                                opacity: 0.7,
                                filter: 'grayscale(100%) contrast(1.1)',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment */}
                <div style={{ width: '100%', textAlign: 'center', marginTop: '-1rem' }}>
                    <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '-0.5rem' // Tighten label to image
                    }}>
                        Clientes
                    </span>
                    <div style={{
                        width: '100%',
                        height: '100px', // Force a small height to "crop" image whitespace
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                height: '220px', // Scaling it up within a smaller container to crop whitespace
                                width: 'auto',
                                opacity: 0.7,
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
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};
