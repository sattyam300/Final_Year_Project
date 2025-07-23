import React, { useState } from "react";

// Mock axios for demonstration
const axios = {
  post: async (url, data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: { success: true } };
  }
};

const AddProduct = () => {
  const [manufacturerID, setManufacturerID] = useState("");
  const [productName, setProductName] = useState("");
  const [productSN, setProductSN] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!manufacturerID || !productName || !productSN || !productBrand || !productPrice) {
      setMessage("⚠️ Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/add-product", {
        manufacturerID,
        productName,
        productSN,
        productBrand,
        productPrice,
      });

      if (res.data.success) {
        const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productSN}`;
        setQrSrc(src);
        setShowQR(true);
        setMessage("✅ Product added successfully!");
      } else {
        setMessage("❌ Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error adding product.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveImage = () => {
    const a = document.createElement("a");
    a.href = qrSrc;
    a.download = `${productSN}_qr.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowQR(false);
  };

  const resetForm = () => {
    setManufacturerID("");
    setProductName("");
    setProductSN("");
    setProductBrand("");
    setProductPrice("");
    setQrSrc("");
    setShowQR(false);
    setMessage("");
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
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            📦
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
            Add New Product
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            margin: 0,
            color: '#e2e8f0'
          }}>
            Register a new product on the blockchain
          </p>
        </div>

        {/* Main Form Card */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '24px',
          padding: '2.5rem',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Manufacturer ID */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>🏭</span>
                Manufacturer ID
              </label>
              <input
                style={manufacturerID ? inputFocusStyle : inputStyle}
                type="text"
                value={manufacturerID}
                onChange={(e) => setManufacturerID(e.target.value)}
                placeholder="Enter manufacturer ID"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Product Name */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>🏷️</span>
                Product Name
              </label>
              <input
                style={productName ? inputFocusStyle : inputStyle}
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Product Serial Number */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>🔢</span>
                Product Serial Number
              </label>
              <input
                style={productSN ? inputFocusStyle : inputStyle}
                type="text"
                value={productSN}
                onChange={(e) => setProductSN(e.target.value)}
                placeholder="Enter serial number"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Product Brand */}
            <div>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>⭐</span>
                Product Brand
              </label>
              <input
                style={productBrand ? inputFocusStyle : inputStyle}
                type="text"
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
                placeholder="Enter brand name"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>

            {/* Product Price */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>
                <span style={{ marginRight: '0.5rem' }}>💰</span>
                Product Price
              </label>
              <input
                style={productPrice ? inputFocusStyle : inputStyle}
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Enter price (e.g., $99.99)"
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              style={{
                background: isLoading ? 'rgba(255,215,0,0.5)' : 'linear-gradient(45deg, #ffd700, #ffed4e)',
                color: '#1a202c',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255,215,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '180px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255,215,0,0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.3)';
                }
              }}
            >
              {isLoading ? (
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
                  <span>📦</span>
                  Add Product
                </>
              )}
            </button>

            <button
              onClick={resetForm}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(5px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              🔄 Reset Form
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div style={{
              marginTop: '2rem',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              background: message.includes('✅') 
                ? 'rgba(34, 197, 94, 0.2)' 
                : message.includes('❌') 
                  ? 'rgba(239, 68, 68, 0.2)'
                  : 'rgba(251, 191, 36, 0.2)',
              border: `1px solid ${message.includes('✅') 
                ? 'rgba(34, 197, 94, 0.3)' 
                : message.includes('❌') 
                  ? 'rgba(239, 68, 68, 0.3)'
                  : 'rgba(251, 191, 36, 0.3)'}`,
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              {message}
            </div>
          )}
        </div>

        {/* QR Code Display */}
        {showQR && (
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '2.5rem',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#ffd700'
            }}>
              🎉 Product QR Code Generated!
            </h3>
            
            <div style={{
              display: 'inline-block',
              padding: '1.5rem',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              marginBottom: '2rem'
            }}>
              <img 
                src={qrSrc} 
                alt="QR Code" 
                style={{
                  display: 'block',
                  borderRadius: '8px'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={saveImage}
                style={{
                  background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(34, 197, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
                }}
              >
                <span>📥</span>
                Download QR Code
              </button>

              <button
                onClick={() => setShowQR(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '50px',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
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
                ✖️ Close
              </button>
            </div>

            <p style={{
              marginTop: '1.5rem',
              fontSize: '0.9rem',
              opacity: '0.8',
              color: '#cbd5e0'
            }}>
              Serial Number: <strong>{productSN}</strong>
            </p>
          </div>
        )}

        {/* Add CSS animation keyframe */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AddProduct;