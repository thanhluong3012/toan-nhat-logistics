import { Phone, Mail, MapPin, Facebook, Send, Globe, Clock, ArrowRight } from "lucide-react";
import logoToannhat from "@/assets/logobanner.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3c4097] text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-logistics-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-logistics-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoToannhat} 
                alt="Toàn Nhất Logistics" 
                className="h-14" 
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Với hơn 16 năm kinh nghiệm, Toàn Nhất Logistics là đối tác tin cậy trong lĩnh vực vận tải và kho bãi, phục vụ hàng trăm doanh nghiệp trên toàn quốc.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-logistics-yellow flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-logistics-yellow flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-logistics-yellow flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                aria-label="Website"
              >
                <Globe className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-logistics-yellow flex items-center gap-2">
              <div className="w-1 h-6 bg-logistics-yellow rounded-full" />
              Dịch vụ
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: "Vận tải đường bộ", href: "#road-transport" },
                { name: "Vận tải đường sắt", href: "#rail-transport" },
                { name: "Kho cho thuê", href: "#warehouse" },
                { name: "Tin tức & Chính sách", href: "#news-policy" },
                { name: "Về Toàn Nhất Logistics", href: "#about" },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-primary-foreground/80 hover:text-logistics-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-logistics-yellow flex items-center gap-2">
              <div className="w-1 h-6 bg-logistics-yellow rounded-full" />
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-logistics-yellow/20 transition-colors">
                  <MapPin className="h-4 w-4 text-logistics-yellow" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">Địa chỉ</p>
                  <p className="text-sm text-primary-foreground/90 leading-relaxed">
                    123 Nguyễn Văn Linh, Quận 7<br />TP. Hồ Chí Minh
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-logistics-yellow/20 transition-colors">
                  <Phone className="h-4 w-4 text-logistics-yellow" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">Hotline</p>
                  <p className="text-sm font-bold text-logistics-yellow">(088) 00-11-52-66</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-logistics-yellow/20 transition-colors">
                  <Mail className="h-4 w-4 text-logistics-yellow" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">Email</p>
                  <p className="text-sm text-primary-foreground/90">cskh1@toannhat.co</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-logistics-yellow flex items-center gap-2">
              <div className="w-1 h-6 bg-logistics-yellow rounded-full" />
              Giờ làm việc
            </h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-logistics-yellow/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-logistics-yellow" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Thời gian phục vụ</p>
                  <p className="text-sm font-bold text-white">24/7</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Thứ 2 - Thứ 6:</span>
                  <span className="font-semibold text-white">8:00 - 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Thứ 7:</span>
                  <span className="font-semibold text-white">8:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Chủ nhật:</span>
                  <span className="font-semibold text-logistics-yellow">Liên hệ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} <span className="font-bold text-logistics-yellow">Toàn Nhất Logistics</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-logistics-yellow transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-logistics-yellow transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-logistics-yellow transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - could be added if needed */}
      <div className="absolute bottom-8 right-8">
        <a 
          href="#top" 
          className="w-12 h-12 rounded-full bg-logistics-yellow hover:bg-logistics-gold flex items-center justify-center shadow-xl hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowRight className="h-5 w-5 text-logistics-navy rotate-[-90deg]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
