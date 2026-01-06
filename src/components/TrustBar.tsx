import React from 'react';
import partnerLogos from '../assets/partner-logos-v5.png';
import clientLogos from '../assets/client-logos-v5.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '3rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                alignItems: 'center'
            }}>

                {/* Ecosystem Row */}
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        opacity: 0.6
                    }}>
                        Ecosystem
                    </h4>
                    <img
                        src={partnerLogos}
                        alt="Ecosystem Partners"
                        style={{
                            maxHeight: '40px',
                            width: 'auto',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* Clients Row */}
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        opacity: 0.6
                    }}>
                        Clientes
                    </h4>
                    <img
                        src={clientLogos}
                        alt="Nuestros Clientes"
                        style={{
                            maxHeight: '50px',
                            width: 'auto',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            objectFit: 'contain'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};
