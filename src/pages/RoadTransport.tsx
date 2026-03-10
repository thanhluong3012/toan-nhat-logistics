import { motion } from "framer-motion";
import { Truck, Shield, Clock, MapPin, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/road-transport-hero.jpg";
import serviceRoad from "@/assets/service-road.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Truck,
    title: "Vận tải nguyên xe (FTL)",
    desc: "Dịch vụ vận tải nguyên xe từ 1 tấn đến 25 tấn, phục vụ mọi nhu cầu vận chuyển hàng hóa khối lượng lớn trên toàn quốc.",
  },
  {
    icon: Shield,
    title: "Vận tải ghép hàng (LTL)",
    desc: "Tối ưu chi phí với dịch vụ ghép hàng, phù hợp cho các lô hàng nhỏ lẻ cần vận chuyển liên tỉnh.",
  },
  {
    icon: Clock,
    title: "Giao hàng nhanh",
    desc: "Cam kết thời gian giao hàng nhanh chóng, đúng hẹn với đội ngũ tài xế chuyên nghiệp và hệ thống giám sát GPS.",
  },
  {
    icon: MapPin,
    title: "Vận tải Bắc – Nam",
    desc: "Tuyến vận tải chủ lực Bắc – Nam với lịch trình cố định hàng ngày, đảm bảo hàng hóa luôn lưu thông ổn định.",
  },
];

const routes = [
  { from: "TP. Hồ Chí Minh", to: "Hà Nội", time: "36-48 giờ" },
  { from: "TP. Hồ Chí Minh", to: "Đà Nẵng", time: "24-30 giờ" },
  { from: "Hà Nội", to: "Hải Phòng", time: "4-6 giờ" },
  { from: "TP. Hồ Chí Minh", to: "Cần Thơ", time: "6-8 giờ" },
  { from: "Đà Nẵng", to: "Hà Nội", time: "18-24 giờ" },
  { from: "TP. Hồ Chí Minh", to: "Bình Dương", time: "2-3 giờ" },
];

const advantages = [
  "Đội xe hiện đại hơn 200 đầu kéo và xe tải",
  "Hệ thống GPS giám sát hành trình 24/7",
  "Bảo hiểm hàng hóa 100% giá trị",
  "Nhân viên tư vấn hỗ trợ chuyên nghiệp",
  "Báo giá minh bạch, không phát sinh phí",
  "Cam kết bồi thường nếu giao hàng chậm trễ",
];

const RoadTransport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Vận tải đường bộ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/80 to-logistics-navy/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Dịch vụ hàng đầu
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight">
              Vận Tải Đường Bộ
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Giải pháp vận tải đường bộ toàn diện, an toàn và tiết kiệm chi phí trên toàn quốc với đội xe hiện đại.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-8 py-3 rounded-lg transition-colors text-lg">
                Nhận Báo Giá
              </a>
              <a href="tel:0880011526" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-bold px-8 py-3 rounded-lg transition-colors text-lg flex items-center gap-2">
                <Phone className="h-5 w-5" /> Gọi Ngay
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading">
              Dịch Vụ Vận Tải Đường Bộ
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Đa dạng hình thức vận tải, đáp ứng mọi nhu cầu của doanh nghiệp
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image + Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={serviceRoad} alt="Đội xe vận tải" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-black text-foreground mb-6 font-heading">
                Tại Sao Chọn Toàn Nhất?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực vận tải đường bộ, Toàn Nhất Logistics tự hào là đối tác vận chuyển tin cậy của hàng nghìn doanh nghiệp trên toàn quốc.
              </motion.p>
              <div className="space-y-4">
                {advantages.map((adv) => (
                  <motion.div
                    key={adv}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Routes Table */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading">
              Tuyến Vận Tải Chính
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Lịch trình cố định hàng ngày trên các tuyến đường trọng điểm
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {routes.map((r) => (
              <motion.div
                key={r.from + r.to}
                variants={fadeInUp}
                className="bg-card rounded-xl p-5 border border-border flex items-center gap-3 hover:shadow-card transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                    {r.from} <ArrowRight className="h-4 w-4 text-primary" /> {r.to}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">Thời gian: {r.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 font-heading">
              Bạn Cần Báo Giá Vận Tải?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Liên hệ ngay với chúng tôi để nhận báo giá tốt nhất cho nhu cầu vận chuyển của bạn.
            </p>
            <a
              href="tel:08800115266"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              (088) 00-11-52-66
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadTransport;
