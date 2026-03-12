import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Heart, Phone, MapPin, Mail, Star, Handshake, Globe, CheckCircle } from "lucide-react";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/about-hero.jpg";
import logoImg from "@/assets/logo-toannhat.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const milestones = [
  { year: "2014", title: "Thành lập", desc: "Công ty TNHH Toàn Nhất Logistics chính thức thành lập tại TP. Hồ Chí Minh với đội xe 10 chiếc." },
  { year: "2016", title: "Mở rộng dịch vụ", desc: "Bổ sung vận tải đường sắt và kho bãi, phục vụ đa dạng nhu cầu khách hàng." },
  { year: "2018", title: "Phát triển mạng lưới", desc: "Mở chi nhánh tại Hà Nội và Đà Nẵng, xây dựng mạng lưới Bắc – Trung – Nam." },
  { year: "2020", title: "Đầu tư công nghệ", desc: "Triển khai GPS và phần mềm WMS, nâng cao chất lượng dịch vụ." },
  { year: "2022", title: "500+ khách hàng", desc: "Vượt mốc 500 doanh nghiệp đối tác, trở thành đối tác logistics tin cậy." },
  { year: "2025", title: "Chứng nhận ISO", desc: "Đạt ISO 9001:2015, khẳng định hệ thống quản lý chất lượng đẳng cấp quốc tế." },
];

const values = [
  { icon: Target, title: "Chính xác", desc: "Giao hàng đúng thời gian, đúng địa điểm, đúng chất lượng." },
  { icon: Heart, title: "Tận tâm", desc: "Luôn đặt lợi ích của khách hàng lên hàng đầu." },
  { icon: TrendingUp, title: "Đổi mới", desc: "Không ngừng cải tiến và ứng dụng công nghệ hiện đại." },
  { icon: Handshake, title: "Hợp tác", desc: "Xây dựng quan hệ đối tác bền vững, cùng phát triển." },
];

const stats = [
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "500+", label: "Khách hàng" },
  { number: "200+", label: "Đầu xe" },
  { number: "55.000", label: "m² kho bãi" },
];

const team = [
  { name: "Nguyễn Văn Toàn", role: "Giám đốc điều hành", desc: "20 năm kinh nghiệm trong ngành logistics và quản trị doanh nghiệp." },
  { name: "Trần Thị Nhất", role: "Giám đốc vận hành", desc: "15 năm kinh nghiệm quản lý vận tải và chuỗi cung ứng." },
  { name: "Lê Minh Đức", role: "Trưởng phòng Kinh doanh", desc: "10 năm phát triển thị trường và quan hệ khách hàng." },
  { name: "Phạm Thu Hương", role: "Trưởng phòng Kho vận", desc: "12 năm quản lý kho bãi và logistics nội địa." },
];

const whyChooseUs = [
  { icon: Star, title: "Phương án thông minh", desc: "Thiết kế phương án thông minh, tối ưu cho từng đơn hàng." },
  { icon: CheckCircle, title: "Cam kết sự cố", desc: "Chịu trách nhiệm 100%, đền bù xứng đáng khi phát sinh sự cố." },
  { icon: TrendingUp, title: "Giá cước tiết kiệm", desc: "Loại bỏ khâu trung gian để mang đến chi phí hợp lý nhất." },
  { icon: Globe, title: "Theo dõi xuyên suốt", desc: "Cập nhật toàn bộ thông tin đơn hàng từ lúc gửi đến khi nhận." },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Cinematic with parallax */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img src={heroImg} alt="Về chúng tôi" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-logistics-navy via-logistics-navy/60 to-logistics-navy/30" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img src={logoImg} alt="Logo" className="h-16 mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight max-w-3xl">
              Đồng Hành Cùng<br />Doanh Nghiệp Việt
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Hơn 10 năm kinh nghiệm cung cấp giải pháp logistics toàn diện. Từ một đội xe nhỏ, chúng tôi đã trở thành đối tác tin cậy của hơn 500 doanh nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8 -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-secondary font-heading">{s.number}</div>
                <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-primary rounded-full" />
                <span className="text-primary font-bold text-sm uppercase tracking-widest">Câu chuyện</span>
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground mb-8 font-heading">
                Về Toàn Nhất Logistics
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Được thành lập từ năm 2014, Toàn Nhất Logistics bắt đầu từ một đội xe nhỏ với niềm đam mê cung cấp dịch vụ vận tải chất lượng cao cho doanh nghiệp Việt Nam.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Qua hơn 10 năm phấn đấu không ngừng, chúng tôi đã phát triển thành một trong những công ty logistics hàng đầu khu vực phía Nam với mạng lưới kho bãi rộng khắp.
                  </p>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Với đội xe hiện đại hơn 200 đầu kéo và hệ thống kho 55.000m², Toàn Nhất tự hào phục vụ hơn 500 khách hàng doanh nghiệp trên toàn quốc.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nhiệm vụ của chúng tôi là quản lý khoa học kho hàng, tổ chức vận chuyển an toàn hàng hóa đến đúng địa chỉ một cách kịp thời và hiệu quả.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Full width cards */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 border border-border shadow-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-[100%] opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Tầm Nhìn</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trở thành công ty logistics hàng đầu Việt Nam, được khách hàng tin tưởng nhờ chất lượng dịch vụ vượt trội. Liên tục đổi mới, phát triển bền vững, khẳng định uy tín và thương hiệu trên thị trường.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-10 border border-border shadow-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100%] opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-logistics-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Sứ Mệnh</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cung cấp chuỗi cung ứng dịch vụ từ quản lý hàng hóa đến tổ chức vận chuyển trên phạm vi toàn quốc với chi phí hợp lý, an toàn, kịp thời. Đầu tư mạnh mẽ vào phát triển nguồn nhân lực và công nghệ thông tin.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground font-heading mb-3">
              Vì Sao Chọn Chúng Tôi
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Dịch vụ logistics chuyên nghiệp hàng đầu
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((w) => (
              <motion.div key={w.title} variants={fadeIn} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5 mx-auto">
                  <w.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 font-heading">{w.title}</h3>
                <p className="text-muted-foreground text-sm">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Giá Trị Cốt Lõi
          </motion.h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Horizontal scroll on desktop */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-14 font-heading text-center">
            Hành Trình Phát Triển
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Horizontal timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
              <div className="grid grid-cols-6 gap-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-primary-foreground font-black text-xs">{m.year}</span>
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1 font-heading">{m.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-black text-xs">{m.year}</span>
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-foreground mb-1 font-heading">{m.title}</h4>
                    <p className="text-muted-foreground text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Đội Ngũ Lãnh Đạo
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((t) => (
              <motion.div key={t.name} variants={fadeIn} className="bg-card rounded-2xl overflow-hidden border border-border shadow-card group">
                <div className="h-32 bg-gradient-hero flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/30">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-foreground text-lg mb-0.5 font-heading">{t.name}</h4>
                  <span className="text-primary text-sm font-semibold block mb-2">{t.role}</span>
                  <p className="text-muted-foreground text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4 font-heading">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Hãy để Toàn Nhất Logistics trở thành đối tác logistics đáng tin cậy của bạn
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5 text-secondary" /> (088) 00-11-52-66
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Mail className="h-5 w-5 text-secondary" /> cskh1@toannhat.co
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <MapPin className="h-5 w-5 text-secondary" /> TP. Hồ Chí Minh
              </div>
            </div>
            <a href="tel:08800115266" className="inline-flex items-center gap-2 bg-secondary hover:bg-logistics-gold text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg transition-colors">
              <Phone className="h-5 w-5" /> Gọi Ngay
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
