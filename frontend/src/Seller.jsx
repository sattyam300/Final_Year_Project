import React from 'react';
import { Link } from 'react-router-dom';

const Seller = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Verification System <span className="block text-sm text-gray-500">through Blockchain</span>
          </h1>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
              
              <Link to="/sell" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Sell Product To Consumer</Link>
              <Link to="/products" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Products For Sale</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Seller</h2>
          <h3 className="text-xl text-gray-600">Go to navigation bar to perform operations.</h3>
        </div>
      </section>
    </>
  );
};

export default Seller;
