
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2c48] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and about */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                <span className="text-[#1a2c48] font-bold">C</span>
              </div>
              <span className="text-xl font-semibold">Consult</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Professional consulting services that help businesses grow and achieve their goals.
              With over 20 years of experience, we deliver results that matter.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">About Link</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors text-gray-300">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors text-gray-300">Our Blog</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors text-gray-300">Practice Areas</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-blue-400 transition-colors text-gray-300">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors text-gray-300">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="min-w-5" />
                <span className="text-gray-300">1234 Business Plaza, Suite 567<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="min-w-5" />
                <span className="text-gray-300">+1 (212) 456-7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="min-w-5" />
                <span className="text-gray-300">contact@consultexperts.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Subscribe Our Newsletter</h3>
            <div className="flex flex-col space-y-4">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-[#223b5f] border-none text-white placeholder:text-gray-400"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-[#2d4158] text-center">
          <p className="text-gray-400 text-sm">
            © Copyright 2025 Consult | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
