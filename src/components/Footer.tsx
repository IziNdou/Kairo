import kairoLogo from "figma:asset/035a2d6638b6203d9a9cf60b4103d1195cb5d299.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1A] text-[#F2F2F4]">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Brand */}
          <div>
            <img 
              src={kairoLogo} 
              alt="Kairo" 
              className="w-[200px] h-auto mb-4 mx-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors">
              Support
            </a>
            <a href="#" className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-[#F2F2F4]/70 hover:text-[#F2F2F4] transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#F2F2F4]/50">
            © 2025 Kairo
          </p>
        </div>
      </div>
    </footer>
  );
}
