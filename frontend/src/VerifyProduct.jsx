import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Link } from 'react-router-dom';

const VerifyProduct = () => {
  const [qrResult, setQrResult] = useState('');
  const [consumerCode, setConsumerCode] = useState('');
  const [productSN, setProductSN] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

    const onScanSuccess = (decodedText) => {
      const audio = new Audio('/beep.wav');
      audio.play();
      setQrResult(decodedText);
      setProductSN(decodedText);
    };

    scanner.render(onScanSuccess);

    return () => {
      scanner.clear().catch(err => console.error('QR Scanner cleanup failed', err));
    };
  }, []);

  const handleVerify = async () => {
    // Replace this with your actual Web3 logic
    // Example (pseudo):
    // const result = await contract.methods.verifyProduct(productSN, consumerCode).call({ from: address });

    // Dummy result for structure
    setVerificationResult(`Product ${productSN} is ${consumerCode === "VALID123" ? 'GENUINE ✅' : 'FAKE ❌'}`);
    setUserAddress("0x123...abc"); // Replace with actual connected wallet
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Verification System <span className="block text-sm text-gray-500">through Blockchain</span>
          </h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
              <Link to="/manufacturer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Manufacturer</Link>
              <Link to="/seller" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Seller</Link>
              <Link to="/consumer" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Consumer</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* QR + Form */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Verify Products</h2>

          <div className="flex justify-center mb-6">
            <div id="qr-reader" className="w-72" />
          </div>

          <div className="mb-6">
            <label htmlFor="productSN" className="block font-medium text-gray-700">Product SN:</label>
            <input
              type="text"
              id="productSN"
              className="w-full border p-2 rounded mb-4"
              value={productSN}
              disabled
            />

            <label htmlFor="consumerCode" className="block font-medium text-gray-700">Consumer Code:</label>
            <input
              type="text"
              id="consumerCode"
              className="w-full border p-2 rounded"
              value={consumerCode}
              onChange={(e) => setConsumerCode(e.target.value)}
              placeholder="Enter Consumer Code"
            />
          </div>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
            onClick={handleVerify}
          >
            Get Product Status
          </button>
        </div>
      </section>

      {/* Verification Result */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Is the product fake or genuine?</h2>

          <table className="table-auto w-full mb-6 border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left px-4 py-2">Product Verification Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="logdata" className="px-4 py-3 text-lg text-green-600 font-semibold">
                  {verificationResult || "Awaiting verification..."}
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-center">Your address is <b>{userAddress || "Not Connected"}</b></p>
        </div>
      </section>
    </>
  );
};

export default VerifyProduct;
