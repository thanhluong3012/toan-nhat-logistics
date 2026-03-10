import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, FileText, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/news-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const newsArticles = [
  {
    date: "08/03/2026",
    category: "Tin tức ngành",
    title: "Xu hướng logistics xanh tại Việt Nam năm 2026",
    excerpt: "Ngành logistics Việt Nam đang chuyển mình mạnh mẽ với các giải pháp vận tải thân thiện môi trường. Các doanh nghiệp đầu tư vào xe điện, năng lượng tái tạo và quy trình kho bãi xanh.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    date: "25/02/2026",
    category: "Tin công ty",
    title: "Toàn Nhất mở rộng hệ thống kho tại Bình Dương",
    excerpt: "Chúng tôi vui mừng thông báo khai trương kho bãi mới tại KCN Mỹ Phước 3 với diện tích 20.000m², nâng tổng diện tích kho trên toàn quốc lên hơn 55.000m².",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
  },
  {
    date: "15/02/2026",
    category: "Tin tức ngành",
    title: "Cập nhật quy định mới về vận tải hàng hóa đường bộ",
    excerpt: "Bộ GTVT ban hành thông tư mới về quản lý vận tải đường bộ, ảnh hưởng đến quy trình vận chuyển hàng hóa liên tỉnh từ tháng 4/2026.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
  },
  {
    date: "02/02/2026",
    category: "Tin công ty",
    title: "Toàn Nhất đạt chứng nhận ISO 9001:2015",
    excerpt: "Công ty TNHH Toàn Nhất Logistics chính thức được cấp chứng nhận ISO 9001:2015 cho hệ thống quản lý chất lượng dịch vụ vận tải và kho bãi.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    date: "20/01/2026",
    category: "Tin tức ngành",
    title: "Thị trường logistics Việt Nam tăng trưởng 15% năm 2025",
    excerpt: "Theo báo cáo của VLA, thị trường logistics Việt Nam đạt doanh thu 45 tỷ USD trong năm 2025, tăng 15% so với năm trước, khẳng định tiềm năng phát triển mạnh mẽ.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    date: "10/01/2026",
    category: "Tin công ty",
    title: "Chương trình ưu đãi đầu năm 2026 cho khách hàng mới",
    excerpt: "Nhân dịp năm mới, Toàn Nhất Logistics triển khai chương trình giảm 20% phí vận chuyển cho khách hàng đăng ký mới từ nay đến hết tháng 3/2026.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop",
  },
];

const policies = [
  {
    icon: FileText,
    title: "Chính sách vận chuyển",
    items: [
      "Giao hàng đúng thời gian cam kết hoặc giảm 10% phí vận chuyển",
      "Hàng hóa được bảo hiểm 100% giá trị khai báo",
      "Miễn phí thu gom hàng trong bán kính 30km từ kho",
      "Hỗ trợ đóng gói, dán nhãn theo yêu cầu khách hàng",
    ],
  },
  {
    icon: Shield,
    title: "Chính sách bồi thường",
    items: [
      "Bồi thường 100% giá trị hàng hóa nếu hư hỏng do lỗi vận chuyển",
      "Thời gian xử lý khiếu nại tối đa 7 ngày làm việc",
      "Hoàn phí vận chuyển nếu giao hàng chậm quá 24 giờ",
      "Hỗ trợ khách hàng khiếu nại qua hotline 24/7",
    ],
  },
  {
    icon: Clock,
    title: "Chính sách thanh toán",
    items: [
      "Thanh toán linh hoạt: tiền mặt, chuyển khoản, COD",
      "Công nợ lên đến 30 ngày cho khách hàng doanh nghiệp",
      "Xuất hóa đơn VAT đầy đủ theo quy định",
      "Chiết khấu từ 5-15% cho hợp đồng dài hạn",
    ],
  },
];

const NewsPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={heroImg} alt="Tin tức" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/85 to-logistics-navy/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4 font-heading">
              Tin Tức & Chính Sách
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Cập nhật tin tức ngành logistics và các chính sách dịch vụ mới nhất từ Toàn Nhất
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-black text-foreground mb-12 font-heading">
            Tin Tức Mới Nhất
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={fadeInUp}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                      <Tag className="h-3 w-3" /> {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Đọc thêm <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading">
              Chính Sách Dịch Vụ
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cam kết minh bạch, rõ ràng trong mọi chính sách dịch vụ
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {policies.map((p) => (
              <motion.div key={p.title} variants={fadeInUp} className="bg-card rounded-xl p-8 border border-border shadow-card">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <p.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPolicy;
