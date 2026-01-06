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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: '0 0 0.5rem 0'
                    }}>
                        Ecosystem
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.7, filter: 'grayscale(100%)' }}>
                        <img
                            src={partnerLogos}
                            alt="Ecosystem Partners"
                            style={{
                                height: '40px',
                                width: 'auto',
                                maxWidth: '90vw'
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        color: '#94A3B8',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: '0 0 0.5rem 0'
                    }}>
                        Clientes
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.7, filter: 'grayscale(100%)' }}>
                        <img
                            src={clientLogos}
                            alt="Nuestros Clientes"
                            style={{
                                height: '45px',
                                width: 'auto',
                                maxWidth: '90vw'
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
