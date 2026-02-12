import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import logoToannhat from "@/assets/logobanner.jpg";
import serviceRoad from "@/assets/service-road.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";

const HeroBanner = () => {
  const features = [
    "LOGISTICS TRỌN GÓI, VẬN HÀNH HIỆU QUẢ",
    "KHO BÃI AN TOÀN, CHI PHÍ TỐI ƯU",
    "ĐỐI TÁC TIN CẦY CHO DOANH NGHIỆP",
  ];

  return (
    <section className="relative overflow-hidden bg-[#4854a8] min-h-[500px] md:min-h-[600px]">
      {/* Decorative dots pattern */}
      <div className="absolute top-8 left-8 hidden lg:block opacity-40">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {/* Decorative curved shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path
            d="M 0 0 Q 200 300 0 600 L 800 600 L 800 0 Z"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="100%" stopColor="#c8954d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              {/* <img src={logoToannhat} alt="Toàn Nhất Logistics" className="h-16 md:h-20 object-contain" /> */}
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-white"
            >
              DỊCH VỤ VẬN TẢI<br />
              VÀ CHO THUÊ KHO BÃI
            </motion.h1>

            {/* Decorative line */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-8 origin-left"
            >
              <div className="h-0.5 w-12 bg-white/60" />
              <div className="h-0.5 w-8 bg-white/40" />
              <div className="h-0.5 w-4 bg-white/20" />
            </motion.div>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3.5 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-[#c8954d] hover:bg-[#d4a574] text-white font-bold px-7 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="text-sm md:text-base uppercase tracking-wide">Xem Chi Tiết</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </a>
              <span className="text-white/90 text-sm md:text-base font-semibold">www.toannhat.co</span>
            </motion.div>
          </motion.div>

          {/* Right Images Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[500px]"
          >
            {/* Top trucks image */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-0 right-0 w-full h-48 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img src={serviceRoad} alt="Trucks" className="w-full h-full object-cover" />
            </motion.div>

            {/* Large circular image - yard with trucks */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute top-32 left-0 w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white/30 z-20"
            >
              <img src={serviceRoad} alt="Truck Yard" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-8 ring-[#c8954d]/40 rounded-full" />
            </motion.div>

            {/* Warehouse image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-0 right-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img src={serviceWarehouse} alt="Warehouse" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative circle accent */}
            <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#c8954d]/30 to-transparent blur-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
