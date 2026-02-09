import { useState } from "react";
import { Menu, X, Phone, Mail, Clock, Search, Facebook, Twitter, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoToannhat from "@/assets/logo-toannhat.png";

const navItems = [
  { title: "Trang Chủ", href: "#" },
  { title: "Giới Thiệu", href: "#about" },
  { title: "Tin Tức", href: "#news" },
  { title: "Dịch Vụ", href: "#services" },
  { title: "Đối Tác", href: "#partners" },
];

const topNavItems = [
  { title: "Tin tức", href: "#news" },
  { title: "Dịch vụ", href: "#services" },
  { title: "Chính sách", href: "#policy" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - Yellow */}
      <div className="bg-logistics-yellow">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left side - Social icons + Slogan */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-logistics-navy/10 flex items-center justify-center hover:bg-logistics-navy/20 transition-colors">
                <Facebook className="h-3.5 w-3.5 text-logistics-navy" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-logistics-navy/10 flex items-center justify-center hover:bg-logistics-navy/20 transition-colors">
                <Twitter className="h-3.5 w-3.5 text-logistics-navy" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-logistics-navy/10 flex items-center justify-center hover:bg-logistics-navy/20 transition-colors">
                <Globe className="h-3.5 w-3.5 text-logistics-navy" />
              </a>
            </div>
            <span className="text-sm font-semibold text-logistics-navy">
              Dịch vụ Logistics Toàn Cầu
            </span>
          </div>

          {/* Right side - Links + Info */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-4">
              {topNavItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-logistics-navy hover:text-logistics-blue-dark transition-colors font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <div className="h-4 w-px bg-logistics-navy/20" />
            <span className="flex items-center gap-1.5 text-logistics-navy">
              <Clock className="h-3.5 w-3.5" />
              Thứ 2 – Thứ 6, 8:00 – 18:30
            </span>
            <span className="flex items-center gap-1.5 text-logistics-navy">
              <Mail className="h-3.5 w-3.5" />
              cskh@toannhat.vn
            </span>
          </div>

          {/* Mobile - Centered slogan */}
          <div className="md:hidden flex-1 text-center">
            <span className="text-sm font-semibold text-logistics-navy">
              Toàn Nhất Logistics
            </span>
          </div>
        </div>
      </div>

      {/* Main nav - White */}
      <nav className="bg-card shadow-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoToannhat} alt="Toàn Nhất Logistics" className="h-12 object-contain" />
          </a>

          {/* Desktop nav - Center */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="px-5 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side - Contact + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-logistics-yellow/20 flex items-center justify-center">
                <Phone className="h-4 w-4 text-logistics-gold" />
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium block">Liên hệ</span>
                <span className="text-sm font-bold text-primary">(088) 00-11-52-66</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-primary hover:bg-logistics-blue-dark text-primary-foreground font-bold px-5 py-2.5 rounded-md transition-colors text-sm"
            >
              Liên Hệ Ngay
            </a>

            {/* Search */}
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Search className="h-4 w-4 text-foreground" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t"
            >
              <ul className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="block px-4 py-2.5 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-4">
                <a
                  href="#contact"
                  className="block w-full text-center bg-primary text-primary-foreground font-bold px-5 py-3 rounded-md text-sm"
                >
                  Liên Hệ Ngay
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
