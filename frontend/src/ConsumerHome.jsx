import { Link } from "react-router-dom";

export default function ConsumerHome() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <div className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Product Verification System <span className="text-sm text-gray-600">through Blockchain</span>
        </h1>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/" className="text-white hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/consumer-history" className="text-white hover:text-yellow-400">
                Consumer Purchase History
              </Link>
            </li>
            <li>
              <Link to="/verify-product" className="text-white hover:text-yellow-400">
                Product Verification
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Consumer Info Section */}
      <section className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">Consumer</h2>
        <h3 className="text-lg text-gray-600">
          Go to the navigation bar to perform operations.
        </h3>
      </section>
    </div>
  );
}
