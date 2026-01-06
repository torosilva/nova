import React from 'react';
import partnerRibbon from '../assets/partners-v6.png';
import clientRibbon from '../assets/clients-v6.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            id="trust-bar"
            style={{
                padding: '6rem 0',
                backgroundColor: 'white',
                borderTop: '1px solid #F1F5F9',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 10,
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment - Bold & Professional */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        marginBottom: '3rem',
                        opacity: 0.9
                    }}>
                        Ecosystem Partners
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={partnerRibbon}
                            alt="Ecosystem Partners"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '120px', // Large, dominant scale
                                objectFit: 'contain',
                                filter: 'grayscale(100%)',
                                opacity: 0.7,
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.opacity = '1';
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%)';
                                e.currentTarget.style.opacity = '0.7';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                </div>

                {/* Clients Segment - Authority List */}
                <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        marginBottom: '3rem',
                        opacity: 0.9
                    }}>
                        Nuestros Clientes
                    </h4>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={clientRibbon}
                            alt="Clientes de confianza"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '140px', // Even larger for multi-logo strips
                                objectFit: 'contain',
                                filter: 'grayscale(100%)',
                                opacity: 0.7,
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.opacity = '1';
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%)';
                                e.currentTarget.style.opacity = '0.7';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
