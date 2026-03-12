import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, FileText, Shield, Clock, Search, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/news-hero.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const featuredArticle = {
  date: "08/03/2026",
  category: "Tin tức ngành",
  title: "Xu hướng logistics xanh tại Việt Nam năm 2026",
  excerpt: "Ngành logistics Việt Nam đang chuyển mình mạnh mẽ với các giải pháp vận tải thân thiện môi trường. Các doanh nghiệp đầu tư vào xe điện, năng lượng tái tạo và quy trình kho bãi xanh. Toàn Nhất Logistics tiên phong trong việc áp dụng các tiêu chuẩn ESG trong hoạt động vận tải và kho bãi.",
  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
};

const newsArticles = [
  {
    date: "25/02/2026",
    category: "Tin công ty",
    title: "Toàn Nhất mở rộng hệ thống kho tại Bình Dương",
    excerpt: "Khai trương kho bãi mới tại KCN Mỹ Phước 3 với diện tích 20.000m², nâng tổng diện tích kho lên hơn 55.000m².",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
  },
  {
    date: "15/02/2026",
    category: "Tin tức ngành",
    title: "Quy định mới về vận tải hàng hóa đường bộ",
    excerpt: "Bộ GTVT ban hành thông tư mới về quản lý vận tải đường bộ, ảnh hưởng đến quy trình vận chuyển liên tỉnh.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
  },
  {
    date: "02/02/2026",
    category: "Tin công ty",
    title: "Toàn Nhất đạt chứng nhận ISO 9001:2015",
    excerpt: "Chính thức được cấp chứng nhận ISO 9001:2015 cho hệ thống quản lý chất lượng dịch vụ vận tải và kho bãi.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    date: "20/01/2026",
    category: "Tin tức ngành",
    title: "Thị trường logistics Việt Nam tăng trưởng 15%",
    excerpt: "Doanh thu đạt 45 tỷ USD trong năm 2025, tăng 15% so với năm trước.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    date: "10/01/2026",
    category: "Tin công ty",
    title: "Ưu đãi đầu năm 2026 cho khách hàng mới",
    excerpt: "Giảm 20% phí vận chuyển cho khách hàng đăng ký mới từ nay đến hết tháng 3/2026.",
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(0);

  const filteredArticles = activeFilter === "all"
    ? newsArticles
    : newsArticles.filter((a) => a.category === (activeFilter === "company" ? "Tin công ty" : "Tin tức ngành"));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Newspaper/Magazine style with featured article */}
      <section className="relative bg-logistics-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-3 font-heading">
              Tin Tức & Chính Sách
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Cập nhật thông tin mới nhất về ngành logistics và dịch vụ Toàn Nhất
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{featuredArticle.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {featuredArticle.date}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-foreground mb-4 font-heading leading-tight">{featuredArticle.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm cursor-pointer hover:gap-2 transition-all">
                  Đọc chi tiết <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section with filters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h2 className="text-2xl font-black text-foreground font-heading">Bài Viết Gần Đây</h2>
            <div className="flex gap-2">
              {[
                { key: "all", label: "Tất cả" },
                { key: "company", label: "Tin công ty" },
                { key: "industry", label: "Tin ngành" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === f.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={fadeIn}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all group cursor-pointer"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="md:col-span-1 h-48 md:h-auto">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="md:col-span-3 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {article.date}
                      </span>
                      <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-heading group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Đọc thêm <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Policies - Accordion style */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-black text-foreground mb-3 font-heading">
              Chính Sách Dịch Vụ
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cam kết minh bạch, rõ ràng trong mọi chính sách
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-card"
              >
                <button
                  onClick={() => setExpandedPolicy(expandedPolicy === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-heading">{p.title}</h3>
                  </div>
                  {expandedPolicy === i ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {expandedPolicy === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <ul className="space-y-3 ml-16">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPolicy;
