import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Vận tải đường bộ", href: "#road" },
  { title: "Vận tải đường sắt", href: "#rail" },
  { title: "Kho cho thuê", href: "#warehouse" },
  { title: "Tin tức & Chính sách", href: "#news" },
  { title: "Về Toàn Nhất Logistics", href: "#about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-logistics-navy text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-logistics-yellow" />
              0901 234 567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-logistics-yellow" />
              info@toannhat.vn
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5 text-logistics-yellow" />
            123 Nguyễn Văn Linh, Q.7, TP. Hồ Chí Minh
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-logistics-blue to-logistics-navy flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-lg">TN</span>
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-primary text-lg block">TOÀN NHẤT</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold uppercase">Logistics</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
