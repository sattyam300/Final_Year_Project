import React from 'react';

// Mock Link component for demonstration
const Link = ({ to, children, style, ...props }) => (
  <a href={to} style={style} {...props}>
    {children}
  </a>
);

export default function Manufacturer() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        padding: '2rem 0',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              margin: 0,
              background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}>
              Product Verification System
            </h1>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '300',
              margin: '0.5rem 0 0 0',
              opacity: '0.9',
              color: '#cbd5e0'
            }}>
              Powered by Blockchain Technology
            </p>
          </Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav style={{
        background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <ul style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1.5rem 0',
            margin: 0,
            listStyle: 'none'
          }}>
            {[
              { to: "/", text: "Home", icon: "🏠" },
              { to: "/add-product", text: "Add Product", icon: "➕" },
              { to: "/add-seller", text: "Add Seller", icon: "👤" },
              { to: "/sell-product-seller", text: "Sell to Seller", icon: "💼" },
              { to: "/query-seller", text: "Query Seller", icon: "🔍" }
            ].map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.to}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
                    e.target.style.color = '#1a202c';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1rem',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🏭
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(45deg, #ffffff, #f7fafc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            Manufacturer Portal
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '300',
            margin: '0 0 2rem 0',
            opacity: '0.9',
            lineHeight: '1.6',
            color: '#e2e8f0'
          }}>
            Welcome to your manufacturing dashboard. Use the navigation menu above to manage products, sellers, and blockchain transactions.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔗</div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600' }}>Blockchain Verified</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>Secure & Transparent</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600' }}>Real-time Tracking</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>Instant Updates</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            opacity: '0.7',
            color: '#cbd5e0'
          }}>
            © 2025 Product Verification System. Secured by Blockchain Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}