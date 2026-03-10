import { motion } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Heart, Phone, MapPin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/about-hero.jpg";
import logoImg from "@/assets/logo-toannhat.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const milestones = [
  { year: "2014", title: "Thành lập công ty", desc: "Công ty TNHH Toàn Nhất Logistics chính thức được thành lập tại TP. Hồ Chí Minh." },
  { year: "2016", title: "Mở rộng dịch vụ", desc: "Bổ sung dịch vụ vận tải đường sắt và kho bãi, phục vụ đa dạng nhu cầu khách hàng." },
  { year: "2018", title: "Phát triển mạng lưới", desc: "Mở chi nhánh tại Hà Nội và Đà Nẵng, xây dựng mạng lưới vận tải Bắc – Trung – Nam." },
  { year: "2020", title: "Đầu tư công nghệ", desc: "Triển khai hệ thống GPS và phần mềm quản lý WMS, nâng cao chất lượng dịch vụ." },
  { year: "2022", title: "Đạt 500+ khách hàng", desc: "Vượt mốc 500 khách hàng doanh nghiệp, trở thành đối tác logistics tin cậy hàng đầu." },
  { year: "2025", title: "Chứng nhận ISO", desc: "Đạt chứng nhận ISO 9001:2015, khẳng định hệ thống quản lý chất lượng đẳng cấp quốc tế." },
];

const values = [
  { icon: Target, title: "Chính xác", desc: "Cam kết giao hàng đúng thời gian, đúng địa điểm, đúng chất lượng." },
  { icon: Heart, title: "Tận tâm", desc: "Luôn đặt lợi ích của khách hàng lên hàng đầu trong mọi hoạt động." },
  { icon: TrendingUp, title: "Đổi mới", desc: "Không ngừng cải tiến quy trình và ứng dụng công nghệ hiện đại." },
  { icon: Users, title: "Hợp tác", desc: "Xây dựng mối quan hệ đối tác bền vững, cùng phát triển lâu dài." },
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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Về chúng tôi" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/85 to-primary/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Từ năm 2014
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading leading-tight">
              Về Toàn Nhất Logistics
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Đồng hành cùng doanh nghiệp Việt trên hành trình phát triển với giải pháp logistics toàn diện.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
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

      {/* About Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl font-black text-foreground mb-6 font-heading">
                Câu Chuyện Của Chúng Tôi
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-4">
                Được thành lập từ năm 2014, Toàn Nhất Logistics bắt đầu từ một đội xe nhỏ với niềm đam mê cung cấp dịch vụ vận tải chất lượng cao cho doanh nghiệp Việt Nam. Qua hơn 10 năm phấn đấu không ngừng, chúng tôi đã phát triển thành một trong những công ty logistics hàng đầu khu vực phía Nam.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-4">
                Với mạng lưới kho bãi rộng khắp và đội xe hiện đại hơn 200 đầu kéo, Toàn Nhất tự hào phục vụ hơn 500 khách hàng doanh nghiệp trên toàn quốc, từ các công ty sản xuất, thương mại đến các tập đoàn đa quốc gia.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
                Chúng tôi không chỉ đơn thuần là một công ty vận tải – Toàn Nhất Logistics là đối tác chiến lược, đồng hành cùng doanh nghiệp trên hành trình tối ưu chuỗi cung ứng và phát triển bền vững.
              </motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex justify-center">
              <div className="bg-card rounded-2xl shadow-lg p-12 border border-border">
                <img src={logoImg} alt="Toàn Nhất Logo" className="w-64 mx-auto mb-8" />
                <div className="text-center">
                  <h3 className="font-bold text-foreground text-xl mb-2 font-heading">Công ty TNHH Toàn Nhất Logistics</h3>
                  <p className="text-muted-foreground text-sm">Giải pháp logistics toàn diện cho doanh nghiệp Việt</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border shadow-card">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Tầm Nhìn</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trở thành công ty logistics hàng đầu Việt Nam, được khách hàng tin tưởng và lựa chọn đầu tiên nhờ chất lượng dịch vụ vượt trội và ứng dụng công nghệ tiên tiến trong quản lý chuỗi cung ứng.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border shadow-card">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                <Award className="h-7 w-7 text-logistics-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Sứ Mệnh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cung cấp giải pháp logistics toàn diện, an toàn, hiệu quả với chi phí tối ưu, góp phần nâng cao năng lực cạnh tranh của doanh nghiệp Việt Nam trên thị trường trong nước và quốc tế.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Giá Trị Cốt Lõi
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-5 mx-auto">
                  <v.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-heading">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-14 font-heading text-center">
            Hành Trình Phát Triển
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-black text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2 pb-4">
                  <h4 className="font-bold text-foreground text-lg mb-1 font-heading">{m.title}</h4>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading text-center">
            Đội Ngũ Lãnh Đạo
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <motion.div key={t.name} variants={fadeInUp} className="bg-card rounded-xl p-6 border border-border text-center shadow-card">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-lg mb-1 font-heading">{t.name}</h4>
                <span className="text-primary text-sm font-semibold block mb-2">{t.role}</span>
                <p className="text-muted-foreground text-xs">{t.desc}</p>
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
                <Mail className="h-5 w-5 text-secondary" /> cskh@toannhat.vn
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
