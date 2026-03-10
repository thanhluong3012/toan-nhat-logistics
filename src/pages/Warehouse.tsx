import { motion } from "framer-motion";
import { Warehouse as WarehouseIcon, ShieldCheck, Thermometer, Cctv, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/warehouse-hero.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const warehouseTypes = [
  {
    icon: WarehouseIcon,
    title: "Kho tổng hợp",
    desc: "Kho chứa hàng đa dụng với diện tích từ 500m² đến 10.000m², phù hợp mọi loại hàng hóa khô.",
    area: "500 - 10.000 m²",
  },
  {
    icon: Thermometer,
    title: "Kho lạnh",
    desc: "Hệ thống kho lạnh đạt chuẩn quốc tế, duy trì nhiệt độ từ -25°C đến +15°C cho hàng hóa đặc biệt.",
    area: "200 - 5.000 m²",
  },
  {
    icon: ShieldCheck,
    title: "Kho ngoại quan",
    desc: "Kho ngoại quan được cấp phép bởi Hải Quan, phục vụ hàng hóa xuất nhập khẩu chờ thông quan.",
    area: "1.000 - 8.000 m²",
  },
  {
    icon: Cctv,
    title: "Kho bảo quản đặc biệt",
    desc: "Kho bảo quản hàng giá trị cao, hóa chất, thiết bị điện tử với hệ thống an ninh 24/7.",
    area: "300 - 3.000 m²",
  },
];

const features = [
  "Hệ thống PCCC đạt chuẩn quốc gia",
  "Camera giám sát an ninh 24/7",
  "Sàn bê tông chịu tải trọng cao",
  "Hệ thống kệ hàng đa tầng hiện đại",
  "Bãi đậu xe container rộng rãi",
  "Đội ngũ quản lý kho chuyên nghiệp",
  "Phần mềm quản lý kho WMS",
  "Dịch vụ đóng gói, dán nhãn, phân loại",
];

const locations = [
  { city: "TP. Hồ Chí Minh", address: "KCN Tân Bình, Quận Tân Phú", area: "15.000 m²" },
  { city: "Bình Dương", address: "KCN Mỹ Phước 3, Bến Cát", area: "20.000 m²" },
  { city: "Hà Nội", address: "KCN Thăng Long, Đông Anh", area: "12.000 m²" },
  { city: "Đà Nẵng", address: "KCN Hòa Khánh, Liên Chiểu", area: "8.000 m²" },
];

const Warehouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Kho bãi" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/85 to-logistics-navy/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Kho bãi hiện đại
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight">
              Dịch Vụ Kho Cho Thuê
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Hệ thống kho bãi hiện đại trên toàn quốc, đáp ứng mọi nhu cầu lưu trữ và quản lý hàng hóa cho doanh nghiệp.
            </p>
            <a href="#contact" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3 rounded-lg transition-colors text-lg">
              Xem Bảng Giá
            </a>
          </motion.div>
        </div>
      </section>

      {/* Warehouse Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading">Loại Hình Kho Bãi</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Đa dạng loại hình kho bãi phù hợp với từng ngành hàng và nhu cầu cụ thể
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {warehouseTypes.map((w) => (
              <motion.div key={w.title} variants={fadeInUp} className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <w.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{w.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{w.desc}</p>
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Diện tích: {w.area}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features + Image */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={serviceWarehouse} alt="Kho bãi hiện đại" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-black text-foreground mb-6 font-heading">
                Tiện Ích & Trang Thiết Bị
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <motion.div key={f} variants={fadeInUp} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm font-medium">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Hệ Thống Kho Bãi Toàn Quốc
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((l) => (
              <motion.div key={l.city} variants={fadeInUp} className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-card transition-shadow">
                <h4 className="font-bold text-foreground text-lg mb-2 font-heading">{l.city}</h4>
                <p className="text-muted-foreground text-sm mb-3">{l.address}</p>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{l.area}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 font-heading">Cần Thuê Kho Bãi?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Liên hệ ngay để được tư vấn giải pháp kho bãi phù hợp nhất với nhu cầu doanh nghiệp.
            </p>
            <a href="tel:08800115266" className="inline-flex items-center gap-2 bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg transition-colors">
              <Phone className="h-5 w-5" /> (088) 00-11-52-66
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warehouse;
