import { motion } from "framer-motion";
import { Truck, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[520px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/90 via-logistics-blue/70 to-transparent" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-logistics-yellow/20 border border-logistics-yellow/40 rounded-full px-4 py-1.5 mb-6">
            <Truck className="h-4 w-4 text-logistics-yellow" />
            <span className="text-sm font-semibold text-logistics-yellow">16 năm trọn vẹn niềm tin</span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-primary-foreground">
            DỊCH VỤ VẬN TẢI<br />
            <span className="text-logistics-yellow">& KHO BÃI</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Toàn Nhất Logistics – Đối tác vận chuyển và lưu trữ hàng hóa đáng tin cậy trên toàn quốc.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-logistics-yellow text-logistics-navy font-heading font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-lg"
            >
              Xem dịch vụ
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Về chúng tôi
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom yellow strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-logistics-yellow" />
    </section>
  );
};

export default HeroBanner;
