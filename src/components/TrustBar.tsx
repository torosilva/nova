import React from 'react';

// Ecosystem Logos (Individual)
import logoMeta from '../assets/logo-meta.png';
import logoGoogleAds from '../assets/logo-google-ads.png';
import logoShopify from '../assets/logo-shopify.png';
import logoGoogleCloud from '../assets/logo-google-cloud.png';

// Client Batches (Horizontal Strips)
import clientsA from '../assets/client-logos-a.png';
import clientsB from '../assets/client-logos-b.png';

export const TrustBar: React.FC = () => {
    return (
        <section
            style={{
                padding: '4rem 0',
                backgroundColor: 'white',
                borderBottom: '1px solid #F1F5F9'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Ecosystem Segment - Individual Logo Grid */}
                <div style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        opacity: 0.6
                    }}>
                        <img src={logoMeta} alt="Meta Business Partner" style={{ height: '32px', width: 'auto', filter: 'grayscale(100%)' }} />
                        <img src={logoGoogleAds} alt="Google Ads" style={{ height: '32px', width: 'auto', filter: 'grayscale(100%)' }} />
                        <img src={logoShopify} alt="Shopify Partner" style={{ height: '32px', width: 'auto', filter: 'grayscale(100%)' }} />
                        <img src={logoGoogleCloud} alt="Google Cloud Partner" style={{ height: '32px', width: 'auto', filter: 'grayscale(100%)' }} />
                    </div>
                </div>

                {/* Clients Segment - Horizontal Strips */}
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        opacity: 0.6
                    }}>
                        <img src={clientsA} alt="Nuestros Clientes" style={{ height: '50px', width: 'auto', filter: 'grayscale(100%)' }} />
                        <img src={clientsB} alt="Nuestros Clientes" style={{ height: '50px', width: 'auto', filter: 'grayscale(100%)' }} />
                    </div>
                </div>

            </div>

            <style>{`
                img:hover {
                    opacity: 1 !important;
                    filter: grayscale(0%) !important;
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};
