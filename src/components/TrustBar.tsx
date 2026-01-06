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
                padding: '10rem 0', // Massive breathing room
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
                gap: '10rem', // Massive separation for authority
                alignItems: 'center'
            }}>

                {/* Ecosystem Segment - FORCED SCALE */}
                <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.6em',
                        textTransform: 'uppercase',
                        marginBottom: '5rem',
                        opacity: 1
                    }}>
                        Ecosystem Partners
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8rem',
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
                                    height: '120px', // FORCED MASSIVE HEIGHT
                                    width: 'auto',
                                    filter: 'none', // Removed filters for full visibility
                                    opacity: 1,     // Removed opacity for full visibility
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Clients Segment - FORCED SCALE */}
                <div style={{ width: '100%', maxWidth: '1400px', textAlign: 'center' }}>
                    <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue)',
                        letterSpacing: '0.6em',
                        textTransform: 'uppercase',
                        marginBottom: '5rem',
                        opacity: 1
                    }}>
                        Nuestros Clientes
                    </h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '6rem',
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
                                    height: '150px', // FORCED MASSIVE HEIGHT
                                    width: 'auto',
                                    filter: 'none',
                                    opacity: 1,
                                    transition: 'all 0.4s ease',
                                    border: '1px solid transparent' // Placeholder for potential alignment fixes
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
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
