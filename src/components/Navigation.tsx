import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="On Point Wellness logo featuring yin-yang symbol and acupuncture needle" 
              className="h-20 w-auto"
            />
          </Link>
          
          <div className="flex gap-8">
            <Link 
              to="/" 
              className={`text-lg font-serif transition-colors hover:text-primary ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/providers" 
              className={`text-lg font-serif transition-colors hover:text-primary ${
                isActive("/providers") ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              Our Providers
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-serif transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
