
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1a2c48] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-[#1a2c48] font-bold">C</span>
          </div>
          <span className="text-xl font-semibold">Consult</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              About Us <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/about" className="w-full text-gray-800">Our Story</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/about#team" className="w-full text-gray-800">Our Team</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Our Services <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/services" className="w-full text-gray-800">All Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/business-growth" className="w-full text-gray-800">Business Growth</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/financial-planning" className="w-full text-gray-800">Financial Planning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/marketing-analysis" className="w-full text-gray-800">Marketing Analysis</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Case Studies <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/case-studies" className="w-full text-gray-800">All Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/case-studies#success-stories" className="w-full text-gray-800">Success Stories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Our Blog <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/blog" className="w-full text-gray-800">All Articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/blog/categories/strategy" className="w-full text-gray-800">Strategy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/blog/categories/growth" className="w-full text-gray-800">Growth</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Pages <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/contact" className="w-full text-gray-800">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/faq" className="w-full text-gray-800">FAQ</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 bg-[#1a2c48]">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-gray-300" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="hover:text-gray-300" onClick={toggleMenu}>Our Services</Link>
            <Link to="/case-studies" className="hover:text-gray-300" onClick={toggleMenu}>Case Studies</Link>
            <Link to="/blog" className="hover:text-gray-300" onClick={toggleMenu}>Our Blog</Link>
            <Link to="/contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact Us</Link>
            
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
