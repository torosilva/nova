import React from 'react';

// Ecosystem Icons
import logoMeta from '../assets/logo-meta.png';
import logoGoogle from '../assets/logo-google.png';
import logoShopify from '../assets/logo-shopify.png';
import logoCloud from '../assets/logo-cloud.png';

// Client Icons
import clientApex from '../assets/client-apex.png';
import clientZenith from '../assets/client-zenith.png';
import clientNexo from '../assets/client-nexo.png';
import clientSolaris from '../assets/client-solaris.png';
import clientAltura from '../assets/client-altura.png';
import clientSummit from '../assets/client-summit.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            id="trust-bar"
            style={{
                padding: '8rem 0',
                backgroundColor: 'white',
                borderTop: '1px solid #F1F5F9',
                borderBottom: '1px solid #F1F5F9',
                position: 'relative',
                zIndex: 10
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8rem',
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment */}
                <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.6em',
                        textTransform: 'uppercase',
                        marginBottom: '4rem',
                        opacity: 0.9
                    }}>
                        Powering our Ecosystem
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '6rem',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { src: logoMeta, alt: "Meta Business Partner" },
                            { src: logoGoogle, alt: "Google Ads" },
                            { src: logoShopify, alt: "Shopify Partner" },
                            { src: logoCloud, alt: "Cloud Partner" }
                        ].map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    height: '56px', // Bold, prominent height
                                    width: 'auto',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.7,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.7';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Clients Segment */}
                <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.6em',
                        textTransform: 'uppercase',
                        marginBottom: '4rem',
                        opacity: 0.9
                    }}>
                        Nuestros Clientes
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5rem',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { src: clientApex, alt: "Apex Solutions" },
                            { src: clientZenith, alt: "Zenith Tech" },
                            { src: clientNexo, alt: "Nexo Systems" },
                            { src: clientSolaris, alt: "Solaris Energy" },
                            { src: clientAltura, alt: "Altura Consulting" },
                            { src: clientSummit, alt: "Summit Enterprises" }
                        ].map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    height: '72px', // Larger for diverse client logos
                                    width: 'auto',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.6,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.6';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
