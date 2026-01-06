import React from 'react';
import partnerLogos from '../assets/partner-logos-v5.png';
import clientLogos from '../assets/client-logos-v5.png';

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

                {/* Ecosystem Segment - Forced Viewport */}
                <div style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '70px', // Precise window height
                        backgroundImage: `url(${partnerLogos})`,
                        backgroundSize: '450% auto', // Forced zoom to fill viewport
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.4s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.filter = 'grayscale(0%)';
                            e.currentTarget.style.backgroundSize = '460% auto';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.6';
                            e.currentTarget.style.filter = 'grayscale(100%)';
                            e.currentTarget.style.backgroundSize = '450% auto';
                        }}
                    />
                </div>

                {/* Clients Segment - Forced Viewport */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        marginBottom: '2rem'
                    }}>
                        Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        height: '90px', // Precise window height
                        backgroundImage: `url(${clientLogos})`,
                        backgroundSize: '450% auto', // Forced zoom for SMEs
                        backgroundPosition: 'center 62%', // Compensate for SME list being slightly lower in asset
                        backgroundRepeat: 'no-repeat',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.4s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.filter = 'grayscale(0%)';
                            e.currentTarget.style.backgroundSize = '460% auto';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.6';
                            e.currentTarget.style.filter = 'grayscale(100%)';
                            e.currentTarget.style.backgroundSize = '450% auto';
                        }}
                    />
                </div>

            </div>
        </section>
    );
};
