import React, { useEffect, useState } from "react";

// Mock Html5QrcodeScanner for demonstration
const Html5QrcodeScanner = function(elementId, config) {
  this.render = function(onScanSuccess) {
    // Simulate QR scanning
    setTimeout(() => {
      const mockProductSN = "PROD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
      onScanSuccess(mockProductSN, {});
    }, 2000);
  };
};

const SellProductSeller = () => {
  const [scannedResult, setScannedResult] = useState("");
  const [productSN, setProductSN] = useState("");
  const [consumerCode, setConsumerCode] = useState("");
  const [isScanning, setIsScanning] = useState(true);
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render((decodedText, decodedResult) => {
      // Simulate beep sound
      console.log("Beep! QR Code scanned");
      setScannedResult(decodedText);
      setProductSN(decodedText);
      setIsScanning(false);
      setMessage("✅ QR Code scanned successfully!");
    });
  }, []);

  const handleSellToConsumer = async () => {
    if (!productSN || !consumerCode) {
      setMessage("⚠️ Please scan QR code and enter consumer code");
      return;
    }

    setIsProcessing(true);
    setMessage("🔄 Processing transaction...");

    // Simulate API call
    setTimeout(() => {
      setMessage("🎉 Product successfully sold to consumer!");
      setIsProcessing(false);
    }, 2000);
  };

  const resetScanner = () => {
    setScannedResult("");
    setProductSN("");
    setConsumerCode("");
    setIsScanning(true);
    setMessage("");
    // Reinitialize scanner
    window.location.reload();
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '2px solid rgba(255,255,255,0.2)',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const disabledInputStyle = {
    ...inputStyle,
    background: 'rgba(255,255,255,0.05)',
    color: '#cbd5e0',
    cursor: 'not-allowed'
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#ffd700',
    background: 'rgba(255,255,255,0.15)',
    boxShadow: '0 0 0 3px rgba(255,215,0,0.2)'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#f7fafc',
    letterSpacing: '0.025em'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🛒
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(45deg, #ffffff, #f7fafc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            Sell Product to Consumer
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            margin: 0,
            color: '#e2e8f0'
          }}>
            Scan product QR code and complete the sale transaction
          </p>
        </div>

        {/* QR Scanner Section */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '2.5rem',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#ffd700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>📷</span>
            QR Code Scanner
          </h3>

          {/* QR Reader Container */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <div 
              id="qr-reader" 
              style={{
                width: '320px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '1rem',
                border: '2px solid rgba(255,255,255,0.2)',
                position: 'relative',
                minHeight: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isScanning ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    border: '4px solid rgba(255,255,255,0.3)',
                    borderTop: '4px solid #ffd700',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 1rem'
                  }}></div>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>
                    Scanning for QR code...
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '0.5rem',
                    color: '#22c55e'
                  }}>
                    ✅
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#22c55e' }}>
                    QR Code Detected!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Scanned Result Display */}
          {scannedResult && (
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: '600',
                color: '#22c55e'
              }}>
                📊 Scanned Result: <span style={{ fontFamily: 'monospace' }}>{scannedResult}</span>
              </p>
            </div>
          )}

          <button
            onClick={resetScanner}
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            🔄 Reset Scanner
          </button>
        </div>

        {/* Form Section */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '2.5rem',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#ffd700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>📝</span>
            Transaction Details
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Product Serial Number */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>🔢</span>
                Product Serial Number
              </label>
              <input
                type="text"
                id="productSN"
                name="productSN"
                value={productSN}
                disabled
                style={disabledInputStyle}
                placeholder="Scan QR code to populate..."
              />
            </div>

            {/* Consumer Code */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>👤</span>
                Consumer Code
              </label>
              <input
                type="text"
                id="consumerCode"
                name="consumerCode"
                value={consumerCode}
                onChange={(e) => setConsumerCode(e.target.value)}
                style={consumerCode ? inputFocusStyle : inputStyle}
                placeholder="Enter consumer identification code"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
          </div>

          {/* Action Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <button
              id="register"
              onClick={handleSellToConsumer}
              disabled={isProcessing || !productSN || !consumerCode}
              style={{
                background: (isProcessing || !productSN || !consumerCode) 
                  ? 'rgba(255,215,0,0.5)' 
                  : 'linear-gradient(45deg, #ffd700, #ffed4e)',
                color: '#1a202c',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: (isProcessing || !productSN || !consumerCode) ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255,215,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '200px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (!isProcessing && productSN && consumerCode) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255,215,0,0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isProcessing && productSN && consumerCode) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.3)';
                }
              }}
            >
              {isProcessing ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #1a202c',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Processing...
                </>
              ) : (
                <>
                  <span>💰</span>
                  Sell to Consumer
                </>
              )}
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div style={{
              marginTop: '2rem',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              background: message.includes('✅') || message.includes('🎉')
                ? 'rgba(34, 197, 94, 0.2)' 
                : message.includes('⚠️') 
                  ? 'rgba(251, 191, 36, 0.2)'
                  : 'rgba(59, 130, 246, 0.2)',
              border: `1px solid ${message.includes('✅') || message.includes('🎉')
                ? 'rgba(34, 197, 94, 0.3)' 
                : message.includes('⚠️') 
                  ? 'rgba(251, 191, 36, 0.3)'
                  : 'rgba(59, 130, 246, 0.3)'}`,
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              {message}
            </div>
          )}
        </div>

        {/* Transaction Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔐</div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600' }}>Blockchain Secured</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>All transactions are recorded on blockchain</p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600' }}>Instant Verification</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>Real-time product authenticity check</p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600' }}>Complete Traceability</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: '0.8' }}>Full product journey tracking</p>
          </div>
        </div>

        {/* CSS Animations */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SellProductSeller;