import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
          <div className="bg-yellow-400 text-pink-600 rounded-2xl p-6 text-center">
            <p className="text-sm">Trusted by</p>
            <p className="text-xl font-bold">2M+ Parents &<br />Educators</p>
          </div>
          <div className="bg-yellow-400 text-pink-600 rounded-2xl p-6 text-center">
            <p className="text-sm">Available in</p>
            <p className="text-xl font-bold">35+ Countries &<br />Counting</p>
          </div>
          <div className="bg-yellow-400 text-pink-600 rounded-2xl p-6 text-center">
            <p className="text-xl font-bold">20+<br />Educational Toys</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-sm mb-4">Get notified of new launches, product updates, contests, and more exciting news!</p>
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors">
              Join our WhatsApp Community
            </button>
          </div>
          <div>
            <h6 className="text-yellow-400 font-bold mb-4">Shop</h6>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Problem Solving Toys</a>
              <a href="#" className="block hover:underline">STEM Toys</a>
              <a href="#" className="block hover:underline">Birthday Gift Toys</a>
              <a href="#" className="block hover:underline">Super Saver Deals</a>
            </div>
          </div>
          <div>
            <h6 className="text-yellow-400 font-bold mb-4">More</h6>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Device Compatibility</a>
              <a href="#" className="block hover:underline">Free E-Books</a>
              <a href="#" className="block hover:underline">Parent Hub</a>
              <a href="#" className="block hover:underline">About Us</a>
            </div>
          </div>
          <div>
            <h6 className="text-yellow-400 font-bold mb-4">Support</h6>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Contact Us</a>
              <a href="#" className="block hover:underline">Privacy Policy</a>
              <a href="#" className="block hover:underline">Return Policy</a>
              <a href="#" className="block hover:underline">FAQs</a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400 pt-6 pb-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-yellow-400"><Facebook /></a>
            <a href="#" className="hover:text-yellow-400"><Linkedin /></a>
            <a href="#" className="hover:text-yellow-400"><Instagram /></a>
            <a href="#" className="hover:text-yellow-400"><Youtube /></a>
          </div>
          <p className="text-sm">© 2025 PlayShifu.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;