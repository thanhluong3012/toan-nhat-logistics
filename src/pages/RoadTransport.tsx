import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Shield, Clock, MapPin, CheckCircle, ArrowRight, Phone, Package, Zap, BarChart3, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/road-transport-hero.jpg";
import serviceRoad from "@/assets/service-road.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  { icon: Truck, title: "Vận tải nguyên xe (FTL)", desc: "Dịch vụ vận tải nguyên xe từ 1 tấn đến 25 tấn, phục vụ mọi nhu cầu vận chuyển hàng hóa khối lượng lớn trên toàn quốc.", highlight: "1-25 tấn" },
  { icon: Package, title: "Vận tải ghép hàng (LTL)", desc: "Tối ưu chi phí với dịch vụ ghép hàng, phù hợp cho các lô hàng nhỏ lẻ cần vận chuyển liên tỉnh.", highlight: "Tiết kiệm 40%" },
  { icon: Zap, title: "Giao hàng nhanh", desc: "Cam kết thời gian giao hàng nhanh chóng, đúng hẹn với đội ngũ tài xế chuyên nghiệp và hệ thống giám sát GPS.", highlight: "24/7" },
  { icon: MapPin, title: "Vận tải Bắc – Nam", desc: "Tuyến vận tải chủ lực Bắc – Nam với lịch trình cố định hàng ngày, đảm bảo hàng hóa luôn lưu thông ổn định.", highlight: "Hàng ngày" },
];

const routes = [
  { from: "TP. Hồ Chí Minh", to: "Hà Nội", time: "36-48h", price: "Liên hệ" },
  { from: "TP. Hồ Chí Minh", to: "Đà Nẵng", time: "24-30h", price: "Liên hệ" },
  { from: "Hà Nội", to: "Hải Phòng", time: "4-6h", price: "Liên hệ" },
  { from: "TP. Hồ Chí Minh", to: "Cần Thơ", time: "6-8h", price: "Liên hệ" },
  { from: "Đà Nẵng", to: "Hà Nội", time: "18-24h", price: "Liên hệ" },
  { from: "TP. Hồ Chí Minh", to: "Bình Dương", time: "2-3h", price: "Liên hệ" },
];

const advantages = [
  "Đội xe hiện đại hơn 200 đầu kéo và xe tải",
  "Hệ thống GPS giám sát hành trình 24/7",
  "Bảo hiểm hàng hóa 100% giá trị",
  "Nhân viên tư vấn hỗ trợ chuyên nghiệp",
  "Báo giá minh bạch, không phát sinh phí",
  "Cam kết bồi thường nếu giao hàng chậm trễ",
];

const vehicleTypes = [
  { type: "Xe tải 1-2.5 tấn", suitable: "Hàng lẻ, nội thành", count: "50+ xe" },
  { type: "Xe tải 5-8 tấn", suitable: "Hàng trung, liên tỉnh", count: "80+ xe" },
  { type: "Xe tải 10-15 tấn", suitable: "Hàng lớn, Bắc-Nam", count: "45+ xe" },
  { type: "Đầu kéo container", suitable: "Hàng container 20-40ft", count: "30+ xe" },
];

const stats = [
  { icon: Truck, num: "200+", label: "Đầu xe" },
  { icon: Users, num: "500+", label: "Khách hàng" },
  { icon: MapPin, num: "63", label: "Tỉnh thành" },
  { icon: BarChart3, num: "1M+", label: "Km/năm" },
];

const RoadTransport = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Diagonal split layout */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={heroImg} alt="Vận tải đường bộ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-logistics-navy/90 via-logistics-navy/70 to-transparent" />
        
        {/* Diagonal decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        
        <div className="relative container mx-auto px-4 h-full flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-secondary rounded-full" />
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">Dịch vụ hàng đầu</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 font-heading leading-tight">
                Vận Tải<br />
                <span className="text-secondary">Đường Bộ</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-lg">
                Giải pháp vận tải đường bộ toàn diện với đội xe hơn 200 chiếc, phục vụ 63 tỉnh thành trên toàn quốc. An toàn – Nhanh chóng – Tiết kiệm.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3.5 rounded-xl transition-colors text-base">
                  Xem Dịch Vụ
                </a>
                <a href="tel:08800115266" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Gọi Ngay
                </a>
              </div>
            </motion.div>

            {/* Stats cards floating */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 text-center"
                >
                  <s.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <div className="text-3xl font-black text-primary-foreground font-heading">{s.num}</div>
                  <div className="text-sm text-primary-foreground/70">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Card with highlight badges */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-primary rounded-full" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Dịch vụ</span>
              <div className="w-8 h-1 bg-primary rounded-full" />
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground font-heading">
              Dịch Vụ Vận Tải Đường Bộ
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeIn} className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {s.highlight}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vehicle Fleet - Tabbed layout */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img src={serviceRoad} alt="Đội xe vận tải" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-5 shadow-lg">
                  <div className="text-3xl font-black text-secondary-foreground font-heading">200+</div>
                  <div className="text-sm text-secondary-foreground/80">Đầu xe</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-3xl font-black text-foreground mb-4 font-heading">
                Đội Xe Đa Dạng
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-8 leading-relaxed">
                Đáp ứng mọi loại hàng hóa từ nhỏ lẻ đến container với đội xe hiện đại, được bảo dưỡng định kỳ.
              </motion.p>

              <div className="space-y-3">
                {vehicleTypes.map((v, i) => (
                  <motion.div
                    key={v.type}
                    variants={fadeIn}
                    onClick={() => setActiveTab(i)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all ${
                      activeTab === i
                        ? "bg-primary border-primary shadow-lg"
                        : "bg-card border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-bold text-base ${activeTab === i ? "text-primary-foreground" : "text-foreground"}`}>{v.type}</h4>
                        <p className={`text-sm mt-0.5 ${activeTab === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{v.suitable}</p>
                      </div>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        activeTab === i ? "bg-primary-foreground/20 text-primary-foreground" : "bg-accent text-accent-foreground"
                      }`}>{v.count}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-5xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
              Tại Sao Chọn Toàn Nhất?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {advantages.map((adv, i) => (
                <motion.div key={adv} variants={fadeIn} className="flex items-start gap-3 bg-card p-5 rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium leading-relaxed">{adv}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Routes Table */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-4 font-heading text-center">
            Tuyến Vận Tải Chính
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Lịch trình cố định hàng ngày trên các tuyến đường trọng điểm
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground py-3 px-6 text-sm font-bold">
                <span>Tuyến đường</span>
                <span className="text-center">Thời gian</span>
                <span className="text-right">Báo giá</span>
              </div>
              {routes.map((r, i) => (
                <motion.div
                  key={r.from + r.to}
                  variants={fadeIn}
                  className={`grid grid-cols-3 py-4 px-6 items-center text-sm ${i !== routes.length - 1 ? "border-b border-border" : ""} hover:bg-accent/50 transition-colors`}
                >
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    {r.from} <ArrowRight className="h-3 w-3 text-primary shrink-0" /> {r.to}
                  </div>
                  <span className="text-center text-muted-foreground">{r.time}</span>
                  <span className="text-right text-primary font-semibold">{r.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-14 font-heading text-center">
            Quy Trình Vận Chuyển
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Tiếp nhận", desc: "Nhận yêu cầu & báo giá trong 30 phút" },
              { step: "02", title: "Thu gom", desc: "Thu gom hàng tại kho hoặc địa chỉ khách" },
              { step: "03", title: "Vận chuyển", desc: "Giám sát GPS, cập nhật trạng thái liên tục" },
              { step: "04", title: "Giao hàng", desc: "Giao tận nơi, ký nhận, hoàn thành" },
            ].map((p, i) => (
              <motion.div key={p.step} variants={fadeIn} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-black text-lg">{p.step}</span>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />}
                <h4 className="font-bold text-foreground mb-2 font-heading">{p.title}</h4>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
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
              Bạn Cần Báo Giá Vận Tải?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Liên hệ ngay để nhận báo giá tốt nhất – phản hồi trong 30 phút!
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

export default RoadTransport;
