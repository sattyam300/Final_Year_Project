import { useEffect, useState } from "react";
import Web3 from "web3";

export default function Home() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      console.log("Connected wallet:", accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 py-5 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="text-2xl font-bold uppercase tracking-wide hover:text-blue-400">
            Product Verification System
          </a>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Home</a>
            <a href="/manufacturer" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Manufacturer</a>
            <a href="/seller" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Seller</a>
            <a href="/consumer" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Consumer</a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">
          Welcome to the Product Verification System
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Ensure the authenticity of your products using Blockchain technology. Join us in making the world a safer place for consumers!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Get Started</a>
          <a href="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Register to Verify Your Product</a>
        </div>
        <button onClick={connectWallet} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded">
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </button>
      </section>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-2xl my-6">
        <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
        <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-sm py-4">
        &copy; 2025 Product Verification System |{' '}
        <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a> |{' '}
        <a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a>
      </footer>
    </div>
  );
}
// import { useEffect, useState } from "react";
// import Web3 from "web3";

// export default function Home() {
//   const [account, setAccount] = useState(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//     } else {
//       alert("MetaMask not detected. Please install MetaMask.");
//     }
//   }, []);

//   const connectWallet = async () => {
//     try {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setAccount(accounts[0]);
//       console.log("Connected wallet:", accounts[0]);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      
//       {/* Navbar only shown if wallet is connected */}
//       {account && (
//         <nav className="bg-gray-900 py-5 shadow-md sticky top-0 z-50">
//           <div className="container mx-auto flex justify-between items-center px-4">
//             <a href="/" className="text-2xl font-bold uppercase tracking-wide hover:text-blue-400">
//               Product Verification System
//             </a>
//             <div className="flex space-x-4">
//               <a href="/" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Home</a>
//               <a href="/manufacturer" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Manufacturer</a>
//               <a href="/seller" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Seller</a>
//               <a href="/consumer" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400">Consumer</a>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Main Section */}
//       <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 animate-fade-in">
//         <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">
//           Welcome to the Product Verification System
//         </h1>
//         <p className="text-lg md:text-xl mb-8 max-w-2xl">
//           Ensure the authenticity of your products using Blockchain technology. Join us in making the world a safer place for consumers!
//         </p>
//         <div className="flex flex-col md:flex-row gap-4">
//           <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Get Started</a>
//           <a href="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold uppercase">Register to Verify Your Product</a>
//         </div>
//         <button onClick={connectWallet} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded">
//           {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
//         </button>
//       </section>

//       {/* Social Media Icons */}
//       <div className="flex justify-center gap-6 text-2xl my-6">
//         <i className="fa fa-facebook hover:text-yellow-400 cursor-pointer"></i>
//         <i className="fa fa-twitter hover:text-yellow-400 cursor-pointer"></i>
//         <i className="fa fa-linkedin hover:text-yellow-400 cursor-pointer"></i>
//         <i className="fa fa-instagram hover:text-yellow-400 cursor-pointer"></i>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-center text-sm py-4">
//         &copy; 2025 Product Verification System |{' '}
//         <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a> |{' '}
//         <a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a>
//       </footer>
//     </div>
//   );
// }
