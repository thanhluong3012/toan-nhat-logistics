import { useState } from "react";
import { motion } from "framer-motion";
import { Warehouse as WarehouseIcon, ShieldCheck, Thermometer, Cctv, CheckCircle, Phone, MapPin, Ruler, Box, Lock, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/warehouse-hero.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const warehouseTypes = [
  { icon: WarehouseIcon, title: "Kho tổng hợp", desc: "Kho chứa hàng đa dụng với diện tích từ 500m² đến 10.000m², phù hợp mọi loại hàng hóa khô. Sàn bê tông chịu tải trọng cao, hệ thống thông gió tốt.", area: "500 - 10.000 m²", price: "Từ 80.000đ/m²" },
  { icon: Thermometer, title: "Kho lạnh", desc: "Hệ thống kho lạnh đạt chuẩn quốc tế, duy trì nhiệt độ từ -25°C đến +15°C cho hàng thực phẩm, dược phẩm và hàng hóa đặc biệt.", area: "200 - 5.000 m²", price: "Từ 150.000đ/m²" },
  { icon: ShieldCheck, title: "Kho ngoại quan", desc: "Kho ngoại quan được cấp phép bởi Hải Quan, phục vụ hàng hóa xuất nhập khẩu chờ thông quan. Thủ tục nhanh gọn.", area: "1.000 - 8.000 m²", price: "Liên hệ" },
  { icon: Cctv, title: "Kho bảo quản đặc biệt", desc: "Kho bảo quản hàng giá trị cao, hóa chất, thiết bị điện tử với hệ thống an ninh 24/7, chống cháy nổ.", area: "300 - 3.000 m²", price: "Liên hệ" },
];

const features = [
  { icon: Lock, text: "Hệ thống PCCC đạt chuẩn quốc gia" },
  { icon: Cctv, text: "Camera giám sát an ninh 24/7" },
  { icon: Box, text: "Sàn bê tông chịu tải trọng cao" },
  { icon: Ruler, text: "Hệ thống kệ hàng đa tầng hiện đại" },
  { icon: WarehouseIcon, text: "Bãi đậu xe container rộng rãi" },
  { icon: ShieldCheck, text: "Đội ngũ quản lý kho chuyên nghiệp" },
  { icon: Wifi, text: "Phần mềm quản lý kho WMS" },
  { icon: CheckCircle, text: "Dịch vụ đóng gói, dán nhãn, phân loại" },
];

const locations = [
  { city: "TP. Hồ Chí Minh", address: "KCN Tân Bình, Quận Tân Phú", area: "15.000 m²", warehouses: 5 },
  { city: "Bình Dương", address: "KCN Mỹ Phước 3, Bến Cát", area: "20.000 m²", warehouses: 4 },
  { city: "Hà Nội", address: "KCN Thăng Long, Đông Anh", area: "12.000 m²", warehouses: 3 },
  { city: "Đà Nẵng", address: "KCN Hòa Khánh, Liên Chiểu", area: "8.000 m²", warehouses: 2 },
];

const Warehouse = () => {
  const [activeType, setActiveType] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Side-by-side with image + gradient overlay */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[65vh]">
          {/* Left - Content */}
          <div className="bg-gradient-hero flex items-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-8 md:px-16 py-16 max-w-xl ml-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-1.5 rounded-full mb-6">
                <WarehouseIcon className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground text-sm font-medium">Hệ thống kho hiện đại</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 font-heading leading-tight">
                Kho Cho Thuê<br />
                <span className="text-secondary">Toàn Quốc</span>
              </h1>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Hệ thống kho bãi hiện đại hơn 55.000m² trên toàn quốc. Đa dạng loại hình kho, đáp ứng mọi nhu cầu lưu trữ hàng hóa.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { num: "55.000", unit: "m²", label: "Tổng diện tích" },
                  { num: "14", unit: "+", label: "Điểm kho" },
                  { num: "4", unit: "", label: "Tỉnh thành" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-secondary font-heading">{s.num}<span className="text-lg">{s.unit}</span></div>
                    <div className="text-xs text-primary-foreground/60">{s.label}</div>
                  </div>
                ))}
              </div>

              <a href="#warehouse-types" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3.5 rounded-xl transition-colors inline-block">
                Xem Loại Hình Kho
              </a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 lg:order-2 min-h-[300px]">
            <img src={heroImg} alt="Kho bãi" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/30 to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* Warehouse Types - Tabbed cards */}
      <section id="warehouse-types" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground mb-3 font-heading">Loại Hình Kho Bãi</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chọn loại kho phù hợp với nhu cầu lưu trữ hàng hóa của doanh nghiệp
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {warehouseTypes.map((w, i) => (
              <button
                key={w.title}
                onClick={() => setActiveType(i)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeType === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-primary/30"
                }`}
              >
                <w.icon className="h-4 w-4" />
                {w.title}
              </button>
            ))}
          </div>

          {/* Active type detail */}
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                    {(() => { const Icon = warehouseTypes[activeType].icon; return <Icon className="h-7 w-7 text-primary" />; })()}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-heading">{warehouseTypes[activeType].title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{warehouseTypes[activeType].desc}</p>
                <div className="flex gap-4">
                  <div className="bg-accent rounded-xl px-4 py-3">
                    <span className="text-xs text-muted-foreground block">Diện tích</span>
                    <span className="text-sm font-bold text-foreground">{warehouseTypes[activeType].area}</span>
                  </div>
                  <div className="bg-accent rounded-xl px-4 py-3">
                    <span className="text-xs text-muted-foreground block">Giá từ</span>
                    <span className="text-sm font-bold text-primary">{warehouseTypes[activeType].price}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 relative min-h-[200px]">
                <img src={serviceWarehouse} alt={warehouseTypes[activeType].title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Icon grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-14 font-heading text-center">
            Tiện Ích & Trang Thiết Bị
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((f) => (
              <motion.div key={f.text} variants={fadeIn} className="bg-card rounded-xl p-5 border border-border text-center hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations - Map-style cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-4 font-heading text-center">
            Hệ Thống Kho Bãi Toàn Quốc
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Vị trí chiến lược tại các khu công nghiệp lớn, thuận tiện giao thông
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locations.map((l) => (
              <motion.div key={l.city} variants={fadeIn} className="bg-card rounded-2xl p-6 border border-border hover:shadow-card-hover transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg font-heading">{l.city}</h4>
                      <p className="text-muted-foreground text-sm">{l.address}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-accent rounded-xl px-4 py-3 text-center">
                    <span className="text-xs text-muted-foreground block">Diện tích</span>
                    <span className="text-sm font-bold text-foreground">{l.area}</span>
                  </div>
                  <div className="bg-accent rounded-xl px-4 py-3 text-center">
                    <span className="text-xs text-muted-foreground block">Số kho</span>
                    <span className="text-sm font-bold text-primary">{l.warehouses} kho</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black text-foreground mb-3 font-heading">Báo Giá Thuê Kho</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Giá thuê kho linh hoạt theo diện tích, thời hạn và loại hình kho. Hỗ trợ thuê ngắn hạn từ 1 tháng hoặc dài hạn với ưu đãi đặc biệt.
                </p>
                <ul className="space-y-2">
                  {["Miễn phí khảo sát kho", "Ký hợp đồng linh hoạt", "Chiết khấu hợp đồng dài hạn"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-4">Nhận báo giá trong 30 phút</p>
                <a href="tel:08800115266" className="inline-flex items-center gap-2 bg-primary hover:bg-logistics-blue-dark text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-colors">
                  <Phone className="h-5 w-5" /> (088) 00-11-52-66
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 font-heading">Cần Thuê Kho Bãi?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Liên hệ ngay để được tư vấn giải pháp kho bãi phù hợp nhất.
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
