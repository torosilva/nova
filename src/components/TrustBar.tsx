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
                gap: '3rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Professional Scale */}
                <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        opacity: 0.6
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{ width: '100%', opacity: 0.7, display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                width: 'auto',
                                maxWidth: '100%',
                                height: '32px', // Strict professional height
                                filter: 'grayscale(100%) brightness(0.8)',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Professional Scale */}
                <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        opacity: 0.6
                    }}>
                        Clientes
                    </h4>
                    <div style={{ width: '100%', opacity: 0.7, display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                width: 'auto',
                                maxWidth: '100%',
                                height: '42px', // Strict professional height
                                filter: 'grayscale(100%) brightness(0.8)',
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
