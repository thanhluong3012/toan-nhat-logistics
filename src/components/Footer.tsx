import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-logistics-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-logistics-yellow flex items-center justify-center">
                <span className="font-heading font-black text-logistics-navy text-lg">TN</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">TOÀN NHẤT</span>
                <span className="text-[10px] tracking-[0.2em] text-primary-foreground/60 font-semibold uppercase">Logistics</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              16 năm kinh nghiệm trong lĩnh vực vận tải và kho bãi. Đối tác đáng tin cậy cho mọi doanh nghiệp.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-logistics-yellow">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#road" className="hover:text-logistics-yellow transition-colors">Vận tải đường bộ</a></li>
              <li><a href="#rail" className="hover:text-logistics-yellow transition-colors">Vận tải đường sắt</a></li>
              <li><a href="#warehouse" className="hover:text-logistics-yellow transition-colors">Kho cho thuê</a></li>
              <li><a href="#" className="hover:text-logistics-yellow transition-colors">Vận tải trọn gói</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-logistics-yellow">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-logistics-yellow mt-0.5 flex-shrink-0" />
                123 Nguyễn Văn Linh, Q.7, TP. Hồ Chí Minh
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-logistics-yellow flex-shrink-0" />
                0901 234 567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-logistics-yellow flex-shrink-0" />
                info@toannhat.vn
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © 2024 Toàn Nhất Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
