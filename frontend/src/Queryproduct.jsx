import React from "react";

const Queryproduct = () => {
  // Header styles
  const headerSectionStyle = {
    backgroundColor: '#f8fafc',
    padding: '1.5rem 1rem',
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1d4ed8',
    textDecoration: 'none',
    textAlign: 'center',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    display: 'block',
    fontSize: '0.875rem',
    color: '#64748b',
    fontWeight: '400',
    marginTop: '0.25rem'
  };

  // Navigation styles
  const navStyle = {
    backgroundColor: '#111827',
    color: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '3.5rem'
  };

  const menuButtonStyle = {
    display: 'none',
    color: '#ffffff',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem'
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    gap: '2rem'
  };

  const navLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    fontSize: '0.95rem',
    fontWeight: '500'
  };

  const navLinkHoverStyle = {
    color: '#fbbf24',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  };

  // Form section styles
  const formSectionStyle = {
    padding: '2rem 0',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const sectionHeadingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1.5rem'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#374151',
    fontSize: '0.95rem'
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #d1d5db',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#ffffff'
  };

  const inputFocusStyle = {
    outline: 'none',
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  };

  const submitButtonStyle = {
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#d97706',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
  };

  // Table section styles
  const tableSectionStyle = {
    padding: '2rem 0',
    backgroundColor: '#f9fafb'
  };

  const tableWrapperStyle = {
    overflowX: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb'
  };

  const tableStyle = {
    width: '100%',
    fontSize: '0.875rem',
    textAlign: 'left',
    borderCollapse: 'collapse'
  };

  const tableHeaderStyle = {
    backgroundColor: '#f3f4f6',
    borderBottom: '2px solid #d1d5db'
  };

  const thStyle = {
    padding: '1rem',
    borderRight: '1px solid #e5e7eb',
    fontWeight: '600',
    color: '#374151',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const tbodyStyle = {
    backgroundColor: '#ffffff',
    divide: '#f3f4f6'
  };

  const addressInfoStyle = {
    marginTop: '1.5rem',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f0f9ff',
    borderRadius: '0.5rem',
    border: '1px solid #bae6fd'
  };

  const addressTextStyle = {
    color: '#1e40af',
    fontSize: '0.95rem'
  };

  const addressValueStyle = {
    fontWeight: '600',
    color: '#1e3a8a'
  };

  return (
    <>
      {/* Header Section */}
      <section style={headerSectionStyle}>
        <div style={headerContainerStyle}>
          <div>
            <a style={logoStyle} href="/">
              Product Verification System 
              <span style={subtitleStyle}>through Blockchain</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          <button
            style={{
              ...menuButtonStyle,
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
            type="button"
            aria-label="Toggle Menu"
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul style={navListStyle}>
            <li>
              <a 
                href="/" 
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = navLinkHoverStyle.color;
                  e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/manufacturer" 
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = navLinkHoverStyle.color;
                  e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Manufacturer
              </a>
            </li>
            <li>
              <a 
                href="/sell" 
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = navLinkHoverStyle.color;
                  e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Seller
              </a>
            </li>
            <li>
              <a 
                href="/consumer" 
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = navLinkHoverStyle.color;
                  e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Consumer
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Seller Code Input */}
      <section style={formSectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionHeadingStyle}>Products for sale with the seller</h2>
          <div style={formGroupStyle}>
            <label htmlFor="sellerCode" style={labelStyle}>Seller Code</label>
            <input
              type="text"
              style={inputStyle}
              id="sellerCode"
              placeholder="Enter Seller Code"
              name="sellerCode"
              onFocus={(e) => {
                e.target.style.borderColor = inputFocusStyle.borderColor;
                e.target.style.boxShadow = inputFocusStyle.boxShadow;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <button
            type="submit"
            style={submitButtonStyle}
            id="register"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor;
              e.target.style.transform = submitButtonHoverStyle.transform;
              e.target.style.boxShadow = submitButtonHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f59e0b';
              e.target.style.transform = 'none';
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Submit
          </button>
        </div>
      </section>

      {/* Product Table */}
      <section style={tableSectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionHeadingStyle}>Product Details</h2>
          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead style={tableHeaderStyle}>
                <tr>
                  <th style={thStyle}>Product ID</th>
                  <th style={thStyle}>Serial Number</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Brand</th>
                  <th style={thStyle}>Price</th>
                  <th style={{ ...thStyle, borderRight: 'none' }}>Status</th>
                </tr>
              </thead>
              <tbody id="logdata" style={tbodyStyle}>
                {/* Dynamic rows will be inserted here */}
              </tbody>
            </table>
          </div>
          <div style={addressInfoStyle}>
            <p style={addressTextStyle}>
              Your address is <b id="add" style={addressValueStyle}></b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Queryproduct;