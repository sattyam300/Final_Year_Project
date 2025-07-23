import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';

const SellProductManufacturer = () => {
  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

    const onScanSuccess = (decodedText) => {
      const audio = new Audio('/beep.wav');
      audio.play();

      document.getElementById('qr-reader-results').innerText = decodedText;
      document.getElementById('productSN').value = decodedText;
    };

    qrScanner.render(onScanSuccess);

    // Cleanup on unmount
    return () => {
      qrScanner.clear().catch(error => console.error('QR Scanner cleanup failed', error));
    };
  }, []);

  const headerStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderBottom: '1px solid #e5e7eb'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const headerContentStyle = {
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#1f2937',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    display: 'block',
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '400',
    marginTop: '0.25rem'
  };

  const navStyle = {
    backgroundColor: '#1f2937',
    borderBottom: '1px solid #374151'
  };

  const navContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 0'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const navLinkStyle = {
    color: '#ffffff',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease-in-out',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const navLinkHoverStyle = {
    backgroundColor: '#374151'
  };

  const sectionStyle = {
    padding: '2.5rem 0',
    minHeight: 'calc(100vh - 140px)',
    backgroundColor: '#f9fafb'
  };

  const pageHeadingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const qrScannerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  };

  const qrReaderStyle = {
    width: '320px',
    maxWidth: '100%',
    border: '2px solid #e5e7eb',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const qrResultsStyle = {
    textAlign: 'center',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#059669',
    marginBottom: '2rem',
    minHeight: '1.5rem',
    padding: '0.5rem',
    backgroundColor: '#ecfdf5',
    borderRadius: '0.5rem',
    border: '1px solid #d1fae5'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    color: '#374151',
    fontWeight: '500',
    marginBottom: '0.5rem',
    fontSize: '0.875rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    backgroundColor: '#ffffff'
  };

  const inputFocusStyle = {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    outline: 'none'
  };

  const disabledInputStyle = {
    ...inputStyle,
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    cursor: 'not-allowed'
  };

  const buttonStyle = {
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'block',
    margin: '0 auto'
  };

  const buttonHoverStyle = {
    backgroundColor: '#d97706',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={headerContentStyle}>
            <h1 style={titleStyle}>
              Product Verification System 
              <span style={subtitleStyle}>through Blockchain</span>
            </h1>
          </div>
        </div>
      </header>

      <nav style={navStyle}>
        <div style={containerStyle}>
          <div style={navContentStyle}>
            <div style={navLinksStyle}>
              <Link 
                to="/" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Home
              </Link>
              <Link 
                to="/manufacturer" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Manufacturer
              </Link>
              <Link 
                to="/seller" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Seller
              </Link>
              <Link 
                to="/consumer" 
                style={navLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Consumer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={pageHeadingStyle}>Sell Product to Seller</h2>

          <div style={qrScannerWrapperStyle}>
            <div id="qr-reader" style={qrReaderStyle} />
          </div>
          
          <div id="qr-reader-results" style={qrResultsStyle}></div>

          <div style={formGridStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="productSN" style={labelStyle}>Product Serial Number:</label>
              <input 
                type="text" 
                id="productSN" 
                style={disabledInputStyle}
                disabled 
                placeholder="Scan QR code to populate"
              />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="sellerCode" style={labelStyle}>Seller Code:</label>
              <input 
                type="text" 
                id="sellerCode" 
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = inputFocusStyle.borderColor;
                  e.target.style.boxShadow = inputFocusStyle.boxShadow;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="Enter seller identification code"
              />
            </div>
          </div>

          <button 
            id="register" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.target.style.transform = buttonHoverStyle.transform;
              e.target.style.boxShadow = buttonHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f59e0b';
              e.target.style.transform = 'none';
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Sell to Seller
          </button>
        </div>
      </section>
    </>
  );
};

export default SellProductManufacturer;