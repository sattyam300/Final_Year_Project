import React, { useState } from 'react';

// --- Enhanced Style Definitions ---
const styles = {
  // General page and container styles
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#2d3748',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 25%),
                      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 25%)`,
    backgroundSize: '100px 100px',
    animation: 'float 20s ease-in-out infinite',
    zIndex: 0
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    zIndex: 1
  },
  
  // Enhanced Navbar styles
  nav: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderRadius: '0 0 20px 20px'
  },
  navBrand: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#2d3748',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navBrandHighlight: {
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navLinksContainer: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    color: '#4a5568',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '25px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  },

  // Enhanced Section and Card styles
  section: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    marginTop: '40px',
    border: '1px solid rgba(255,255,255,0.2)',
    position: 'relative',
    overflow: 'hidden'
  },
  sectionGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 3s ease-in-out infinite'
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '32px',
    background: 'linear-gradient(135deg, #2d3748, #4a5568)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative'
  },

  // Enhanced Form element styles
  formGroup: {
    marginBottom: '24px',
    position: 'relative'
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#4a5568',
    fontSize: '16px',
    letterSpacing: '0.5px'
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    outline: 'none'
  },
  button: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '16px 32px',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '0.5px'
  },

  // Enhanced Table styles
  tableContainer: {
    overflowX: 'auto',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
  },
  thead: {
    background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
  },
  th: {
    padding: '20px 24px',
    textAlign: 'left',
    fontWeight: '700',
    color: '#2d3748',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderBottom: '2px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
    backdropFilter: 'blur(10px)'
  },
  tbodyTr: {
    transition: 'all 0.3s ease',
    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
  },
  tbodyTrHover: {
    background: 'rgba(102, 126, 234, 0.05)',
    transform: 'scale(1.02)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  td: {
    padding: '20px 24px',
    textAlign: 'left',
    fontSize: '15px',
    color: '#4a5568',
    fontWeight: '500'
  },
  emptyTable: {
    textAlign: 'center',
    padding: '60px 32px',
    color: '#718096',
    fontSize: '18px',
    fontWeight: '500',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
    borderRadius: '12px',
    margin: '20px'
  },
  
  // Enhanced User Address styles
  addressDisplay: {
    textAlign: 'center',
    marginTop: '32px',
    padding: '24px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    borderRadius: '16px',
    fontSize: '18px',
    border: '1px solid rgba(102, 126, 234, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  addressSpan: {
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },

  // Status badge styles
  statusBadge: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  statusAvailable: {
    background: 'linear-gradient(135deg, #48bb78, #38a169)',
    color: 'white'
  },
  statusSold: {
    background: 'linear-gradient(135deg, #f56565, #e53e3e)',
    color: 'white'
  },
  statusPending: {
    background: 'linear-gradient(135deg, #ed8936, #dd6b20)',
    color: 'white'
  }
};

// Global animations
const globalStyles = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -10px) rotate(1deg); }
    50% { transform: translate(-5px, 5px) rotate(-1deg); }
    75% { transform: translate(-10px, -5px) rotate(0.5deg); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

// Helper for dynamic styles
const mergeStyles = (...styleObjects) => Object.assign({}, ...styleObjects);

const QuerySeller = () => {
  // State for data
  const [sellerCode, setSellerCode] = useState('');
  const [productList, setProductList] = useState([]);
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);

  // State for interactive styles
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSubmit = async () => {
    if (!sellerCode.trim()) return;
    
    setLoading(true);
    try {
      // Simulate API call with mock data for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData = {
        products: [
          { productId: 'P001', serialNumber: 'SN12345', name: 'Smartphone X', brand: 'TechCorp', price: '$599', status: 'Available' },
          { productId: 'P002', serialNumber: 'SN12346', name: 'Laptop Pro', brand: 'CompuBrand', price: '$1299', status: 'Sold' },
          { productId: 'P003', serialNumber: 'SN12347', name: 'Tablet Mini', brand: 'TechCorp', price: '$399', status: 'Pending' }
        ],
        address: '123 Business Street, Commerce City, State 12345'
      };
      
      setProductList(mockData.products || []);
      setUserAddress(mockData.address);
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyle = (status) => {
    const baseStyle = styles.statusBadge;
    switch (status?.toLowerCase()) {
      case 'available':
        return mergeStyles(baseStyle, styles.statusAvailable);
      case 'sold':
        return mergeStyles(baseStyle, styles.statusSold);
      case 'pending':
        return mergeStyles(baseStyle, styles.statusPending);
      default:
        return baseStyle;
    }
  };

  // Dynamic styles based on state
  const buttonStyle = isButtonHovered 
    ? mergeStyles(styles.button, { 
        transform: 'translateY(-2px) scale(1.02)', 
        boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
        background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)'
      })
    : styles.button;
    
  const inputStyle = isInputFocused
    ? mergeStyles(styles.input, { 
        borderColor: '#667eea', 
        boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1)',
        background: 'rgba(255,255,255,0.95)',
        transform: 'translateY(-1px)'
      })
    : styles.input;

  const getNavLinkStyle = (index) => {
    return hoveredLink === index
      ? mergeStyles(styles.navLink, { 
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
        })
      : styles.navLink;
  };

  const getRowStyle = (index) => {
    const baseStyle = styles.tbodyTr;
    return hoveredRow === index
      ? mergeStyles(baseStyle, styles.tbodyTrHover)
      : baseStyle;
  };

  return (
    <>
      <style>{globalStyles}</style>
      <div style={styles.page}>
        <div style={styles.backgroundPattern}></div>
        
        {/* Enhanced Navbar */}
        <nav style={styles.nav}>
          <a href="/" style={styles.navBrand}>
            Product Verification <span style={styles.navBrandHighlight}>System</span>
          </a>
          <div style={styles.navLinksContainer}>
            {['Home', 'Manufacturer', 'Seller', 'Consumer'].map((text, index) => (
              <a 
                key={index}
                href={`/${text.toLowerCase()}`} 
                style={getNavLinkStyle(index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {text}
              </a>
            ))}
          </div>
        </nav>

        <main style={styles.container}>
          {/* Enhanced Input Section */}
          <section style={styles.section}>
            <div style={styles.sectionGlow}></div>
            <h2 style={styles.sectionTitle}>Products for Sale</h2>
            <div style={styles.formGroup}>
              <label htmlFor="sellerCode" style={styles.label}>Seller Code</label>
              <input
                id="sellerCode"
                type="text"
                value={sellerCode}
                onChange={(e) => setSellerCode(e.target.value)}
                placeholder="Enter the seller's unique code"
                style={inputStyle}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Products'}
            </button>
          </section>

          {/* Enhanced Product Table */}
          <section style={styles.section}>
            <div style={styles.sectionGlow}></div>
            <h2 style={styles.sectionTitle}>Product Details</h2>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead style={styles.thead}>
                  <tr>
                    <th style={styles.th}>Product ID</th>
                    <th style={styles.th}>Serial Number</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Brand</th>
                    <th style={styles.th}>Price</th>
                    <th style={styles.th}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.length > 0 ? (
                    productList.map((item, index) => (
                      <tr 
                        key={index} 
                        style={getRowStyle(index)}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td style={styles.td}>{item.productId}</td>
                        <td style={styles.td}>{item.serialNumber}</td>
                        <td style={styles.td}>{item.name}</td>
                        <td style={styles.td}>{item.brand}</td>
                        <td style={styles.td}>{item.price}</td>
                        <td style={styles.td}>
                          <span style={getStatusStyle(item.status)}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={styles.emptyTable}>
                        {loading ? 'Loading products...' : 'Enter a seller code to view product data.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Enhanced User Address */}
            {userAddress && (
              <div style={styles.addressDisplay}>
                <p>Seller's Address: <span style={styles.addressSpan}>{userAddress}</span></p>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default QuerySeller;