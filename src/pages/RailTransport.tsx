import { motion } from "framer-motion";
import { Train, Package, Leaf, BarChart3, CheckCircle, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/rail-transport-hero.jpg";
import serviceRail from "@/assets/service-rail.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const benefits = [
  { icon: Package, title: "Khối lượng lớn", desc: "Vận chuyển hàng hóa số lượng lớn lên đến hàng trăm tấn mỗi chuyến, tiết kiệm chi phí đáng kể." },
  { icon: Leaf, title: "Thân thiện môi trường", desc: "Giảm 75% lượng khí thải CO2 so với vận tải đường bộ, góp phần bảo vệ môi trường." },
  { icon: BarChart3, title: "Chi phí tối ưu", desc: "Tiết kiệm 30-50% chi phí so với đường bộ cho các lô hàng lớn trên quãng đường dài." },
  { icon: Clock, title: "Đúng lịch trình", desc: "Tàu hỏa hoạt động theo lịch trình cố định, đảm bảo thời gian giao hàng chính xác." },
];

const process = [
  { step: "01", title: "Tiếp nhận yêu cầu", desc: "Tư vấn viên tiếp nhận thông tin hàng hóa và tuyến đường vận chuyển." },
  { step: "02", title: "Báo giá & lên kế hoạch", desc: "Cung cấp báo giá chi tiết và lập kế hoạch vận chuyển phù hợp." },
  { step: "03", title: "Thu gom & đóng hàng", desc: "Thu gom hàng tại kho khách hàng, đóng gói và xếp lên toa tàu." },
  { step: "04", title: "Vận chuyển & giao hàng", desc: "Vận chuyển đến ga đích, giao hàng tận nơi cho người nhận." },
];

const railRoutes = [
  { name: "Hà Nội – TP. Hồ Chí Minh", distance: "1.726 km", freq: "Hàng ngày" },
  { name: "Hà Nội – Đà Nẵng", distance: "791 km", freq: "Hàng ngày" },
  { name: "TP. HCM – Quy Nhơn", distance: "680 km", freq: "3 chuyến/tuần" },
  { name: "Hà Nội – Lào Cai", distance: "296 km", freq: "Hàng ngày" },
  { name: "Hà Nội – Hải Phòng", distance: "102 km", freq: "Hàng ngày" },
  { name: "TP. HCM – Nha Trang", distance: "411 km", freq: "Hàng ngày" },
];

const RailTransport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Vận tải đường sắt" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/85 to-primary/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Tiết kiệm & Bền vững
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight">
              Vận Tải Đường Sắt
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Giải pháp vận tải xanh, tiết kiệm chi phí cho hàng hóa khối lượng lớn trên các tuyến đường dài.
            </p>
            <a href="#contact" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3 rounded-lg transition-colors text-lg">
              Tìm Hiểu Thêm
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading text-center">
              Ưu Điểm Vận Tải Đường Sắt
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
              Lựa chọn thông minh cho doanh nghiệp muốn tối ưu chi phí logistics
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5 mx-auto">
                  <b.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image + Content */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-black text-foreground mb-6 font-heading">
                Quy Trình Vận Chuyển
              </motion.h2>
              <div className="space-y-6">
                {process.map((p) => (
                  <motion.div key={p.step} variants={fadeInUp} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-black text-sm">{p.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{p.title}</h4>
                      <p className="text-muted-foreground text-sm">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={serviceRail} alt="Vận tải đường sắt" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Các Tuyến Đường Sắt Chính
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {railRoutes.map((r) => (
              <motion.div key={r.name} variants={fadeInUp} className="bg-card rounded-xl p-5 border border-border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Train className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground text-sm">{r.name}</h4>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Khoảng cách: {r.distance}</span>
                  <span className="text-primary font-semibold">{r.freq}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 font-heading">
              Liên Hệ Tư Vấn Ngay
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Đội ngũ chuyên gia sẵn sàng tư vấn giải pháp vận tải đường sắt tối ưu cho doanh nghiệp bạn.
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

export default RailTransport;
