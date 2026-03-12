import { useState } from "react";
import { Menu, X, Phone, Mail, Clock, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoToannhat from "@/assets/logo-toannhat.png";
import ContactFormDialog from "@/components/ContactFormDialog";
import SearchOverlay from "@/components/SearchOverlay";

const navItems = [
  { title: "Vận tải đường bộ", href: "/van-tai-duong-bo" },
  { title: "Vận tải đường sắt", href: "/van-tai-duong-sat" },
  { title: "Kho cho thuê", href: "/kho-cho-thue" },
  { title: "Tin tức & Chính sách", href: "/tin-tuc-chinh-sach" },
  { title: "Về Toàn Nhất Logistics", href: "/ve-chung-toi" },
];

const topNavItems = [
  { title: "Tin tức", href: "/tin-tuc-chinh-sach" },
  { title: "Dịch vụ", href: "/van-tai-duong-bo" },
  { title: "Chính sách", href: "/tin-tuc-chinh-sach" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Top bar - Yellow */}
        <div className="bg-logistics-yellow">
          <div className="container mx-auto flex items-center justify-between px-4 py-2">
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="h-4 w-4 text-logistics-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="h-4 w-4 text-logistics-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <span className="text-sm font-medium text-logistics-navy">
                Dịch vụ Logistics Toàn Cầu
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <nav className="flex items-center gap-4">
                {topNavItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-logistics-navy hover:text-logistics-blue-dark transition-colors font-medium"
                  >
                    {item.title}
                  </Link>
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

            <div className="md:hidden flex-1 text-center">
              <span className="text-sm font-semibold text-logistics-navy">
                Toàn Nhất Logistics
              </span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="bg-card shadow-md border-b border-border">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
              <img src={logoToannhat} alt="Toàn Nhất Logistics" className="h-12 object-contain" />
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className={`px-5 py-2 text-sm font-semibold transition-colors rounded-md ${
                      location.pathname === item.href
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-logistics-yellow/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-logistics-gold" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium block">Liên hệ</span>
                  <span className="text-sm font-bold text-primary">(088) 00-11-52-66</span>
                </div>
              </div>

              <button
                onClick={() => setContactOpen(true)}
                className="bg-primary hover:bg-logistics-blue-dark text-primary-foreground font-bold px-5 py-2.5 rounded-md transition-colors text-sm"
              >
                Liên Hệ Ngay
              </button>

              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Search className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

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
                      <Link
                        to={item.href}
                        className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.href
                            ? "text-primary bg-accent"
                            : "text-foreground hover:text-primary hover:bg-accent"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="px-4 pb-4 space-y-2">
                  <button
                    onClick={() => { setContactOpen(true); setMobileOpen(false); }}
                    className="block w-full text-center bg-primary text-primary-foreground font-bold px-5 py-3 rounded-md text-sm"
                  >
                    Liên Hệ Ngay
                  </button>
                  <button
                    onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
                    className="block w-full text-center border border-border text-foreground font-medium px-5 py-3 rounded-md text-sm"
                  >
                    <Search className="h-4 w-4 inline mr-2" />
                    Tìm kiếm
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <ContactFormDialog open={contactOpen} onClose={() => setContactOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
