import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232f3e] text-white mt-10">
      {/* Back to Top */}
      <div
        className="text-center py-3 bg-[#37475a] hover:bg-[#485769] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 text-sm">
        <div>
          <h4 className="font-bold mb-2">Get to Know Us</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Connect with Us</h4>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Make Money with Us</h4>
          <ul className="space-y-1">
            <li>Sell on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Let Us Help You</h4>
          <ul className="space-y-1">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
            <li>Amazon App Download</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Amazon Clone by Urmi | For educational purposes only
      </div>
    </footer>
  );
};

export default Footer;
