import { motion } from "framer-motion";
import { Train, Package, Leaf, BarChart3, CheckCircle, Phone, Clock, Shield, Ruler, ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/rail-transport-hero.jpg";
import serviceRail from "@/assets/service-rail.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const benefits = [
  { icon: Package, title: "Khối lượng lớn", desc: "Vận chuyển hàng hóa lên đến hàng trăm tấn mỗi chuyến, tối ưu chi phí cho lô hàng lớn.", stat: "100+ tấn/chuyến" },
  { icon: Leaf, title: "Thân thiện môi trường", desc: "Giảm 75% khí thải CO2 so với đường bộ, góp phần bảo vệ môi trường xanh.", stat: "Giảm 75% CO2" },
  { icon: BarChart3, title: "Chi phí tối ưu", desc: "Tiết kiệm 30-50% chi phí so với đường bộ cho quãng đường dài.", stat: "Tiết kiệm 50%" },
  { icon: Clock, title: "Đúng lịch trình", desc: "Tàu hoạt động theo lịch cố định, đảm bảo thời gian giao hàng chính xác.", stat: "99% đúng giờ" },
];

const processSteps = [
  { step: "01", title: "Tiếp nhận yêu cầu", desc: "Tư vấn viên tiếp nhận thông tin hàng hóa và tuyến đường vận chuyển, phân tích nhu cầu cụ thể." },
  { step: "02", title: "Báo giá & Lên kế hoạch", desc: "Cung cấp báo giá chi tiết, minh bạch và lập kế hoạch vận chuyển phù hợp nhất." },
  { step: "03", title: "Thu gom & Đóng hàng", desc: "Thu gom hàng tại kho khách hàng, đóng gói cẩn thận và xếp lên toa tàu an toàn." },
  { step: "04", title: "Vận chuyển & Giao hàng", desc: "Vận chuyển đến ga đích, dỡ hàng và giao tận nơi cho người nhận." },
];

const railRoutes = [
  { name: "Hà Nội – TP. Hồ Chí Minh", distance: "1.726 km", freq: "Hàng ngày", highlight: true },
  { name: "Hà Nội – Đà Nẵng", distance: "791 km", freq: "Hàng ngày", highlight: false },
  { name: "TP. HCM – Quy Nhơn", distance: "680 km", freq: "3 chuyến/tuần", highlight: false },
  { name: "Hà Nội – Lào Cai", distance: "296 km", freq: "Hàng ngày", highlight: false },
  { name: "Hà Nội – Hải Phòng", distance: "102 km", freq: "Hàng ngày", highlight: false },
  { name: "TP. HCM – Nha Trang", distance: "411 km", freq: "Hàng ngày", highlight: false },
];

const goodsTypes = [
  "Hàng tiêu dùng, nhu yếu phẩm",
  "Vật liệu xây dựng, xi măng, sắt thép",
  "Nông sản, hàng đông lạnh",
  "Máy móc, thiết bị công nghiệp",
  "Hàng hóa xuất nhập khẩu",
  "Container 20ft & 40ft",
];

const RailTransport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Centered with counter overlay at bottom */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center">
        <img src={heroImg} alt="Vận tải đường sắt" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-logistics-navy/80" />
        
        <div className="relative container mx-auto px-4 text-center py-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <Leaf className="h-4 w-4 text-secondary" />
              <span className="text-primary-foreground text-sm font-medium">Vận tải xanh & Bền vững</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 font-heading leading-tight"
          >
            Vận Tải<br />Đường Sắt
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Giải pháp vận tải xanh, tiết kiệm chi phí cho hàng hóa khối lượng lớn. An toàn tuyệt đối trên mọi tuyến đường sắt toàn quốc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#routes" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3.5 rounded-xl transition-colors">
              Xem Tuyến Đường
            </a>
            <a href="tel:08800115266" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2">
              <Phone className="h-5 w-5" /> Nhận Báo Giá
            </a>
          </motion.div>
        </div>

        {/* Counter bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: "75%", label: "Giảm khí thải" },
                { num: "50%", label: "Tiết kiệm chi phí" },
                { num: "6", label: "Tuyến chính" },
                { num: "99%", label: "Đúng lịch trình" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-secondary font-heading">{s.num}</div>
                  <div className="text-xs text-primary-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits - Horizontal cards with stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground font-heading mb-3">
              Ưu Điểm Vượt Trội
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Lựa chọn thông minh cho doanh nghiệp muốn tối ưu logistics
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeIn} className="bg-card rounded-2xl p-6 border border-border shadow-card flex gap-5 hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                  <b.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground font-heading">{b.title}</h3>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{b.stat}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process - Vertical timeline with image */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-black text-foreground mb-3 font-heading">
                Quy Trình Vận Chuyển
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-10">
                4 bước đơn giản để hàng hóa của bạn đến nơi an toàn
              </motion.p>

              <div className="space-y-0">
                {processSteps.map((p, i) => (
                  <motion.div key={p.step} variants={fadeIn} className="flex gap-5 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 z-10">
                        <span className="text-primary-foreground font-black text-sm">{p.step}</span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border my-1" />
                      )}
                    </div>
                    <div className="pb-10 pt-1">
                      <h4 className="font-bold text-foreground text-lg mb-1 font-heading">{p.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sticky top-32"
            >
              <img src={serviceRail} alt="Vận tải đường sắt" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]" />
              
              {/* Goods types overlay */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card mt-6">
                <h4 className="font-bold text-foreground mb-4 font-heading flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Hàng Hóa Vận Chuyển
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {goodsTypes.map((g) => (
                    <div key={g} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Routes - Table style */}
      <section id="routes" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Các Tuyến Đường Sắt Chính
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto space-y-4">
            {railRoutes.map((r) => (
              <motion.div
                key={r.name}
                variants={fadeIn}
                className={`rounded-xl p-5 border flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                  r.highlight ? "bg-primary/5 border-primary/20" : "bg-card border-border"
                } hover:shadow-card transition-shadow`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.highlight ? "bg-primary" : "bg-accent"}`}>
                    <Train className={`h-5 w-5 ${r.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{r.name}</h4>
                    {r.highlight && <span className="text-xs text-primary font-medium">Tuyến chủ lực</span>}
                  </div>
                </div>
                <div className="flex items-center gap-8 text-sm md:text-right">
                  <div>
                    <span className="text-muted-foreground">Khoảng cách</span>
                    <p className="font-bold text-foreground">{r.distance}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tần suất</span>
                    <p className="font-bold text-primary">{r.freq}</p>
                  </div>
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
