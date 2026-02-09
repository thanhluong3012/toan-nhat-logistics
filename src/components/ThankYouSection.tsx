import { motion } from "framer-motion";
import { Heart, Award } from "lucide-react";

const partnerLogos = [
  "Vinamilk", "Masan", "Unilever", "Nestle",
  "P&G", "Acecook", "TH True Milk", "Nutifood",
  "Pepsi", "Coca-Cola", "Colgate", "Samsung",
];

const ThankYouSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-logistics-yellow/15 rounded-full px-5 py-2 mb-4">
            <Heart className="h-4 w-4 text-logistics-gold" />
            <span className="text-sm font-bold text-logistics-gold uppercase tracking-wider">Tri ân khách hàng</span>
          </div>
          <h2 className="font-heading font-black text-2xl md:text-4xl text-foreground mb-2">
            DỊCH VỤ VẬN TẢI VÀ KHO BÃI
          </h2>
          <p className="font-heading font-bold text-xl md:text-2xl text-primary">
            CỦA TOÀN NHẤT LOGISTICS
          </p>
          <div className="mt-4 w-20 h-1 bg-logistics-yellow mx-auto rounded-full" />
        </motion.div>

        {/* Thank you letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-logistics-yellow/10 rounded-bl-[80px]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-[60px]" />

            <h3 className="font-heading font-bold text-lg md:text-xl text-logistics-gold mb-6 text-center">
              16 NĂM TRỌN VẸN NIỀM TIN – LỜI TRI ÂN TỪ TOÀN NHẤT LOGISTICS
            </h3>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="font-semibold text-foreground">Kính gửi: Quý khách hàng,</p>
              <p>
                Hơn 16 năm một chặng đường, sự tin tưởng của Quý khách chính là tài sản quý giá nhất mà Toàn Nhất Logistics có được. Chúng tôi xin gửi lời cảm ơn chân thành nhất vì sự đồng hành của Quý vị đối với dịch vụ Kho bãi và Vận tải của chúng tôi trong suốt thời gian qua.
              </p>
              <p>
                Sự hài lòng của Quý khách là động lực để Toàn Nhất tiếp tục tối ưu và vươn xa hơn nữa.
              </p>
              <p className="font-semibold text-primary text-right">Trân trọng!</p>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="h-6 w-6 text-logistics-gold" />
            <h3 className="font-heading font-black text-xl md:text-2xl text-foreground">
              BẢNG VÀNG TRI ÂN
            </h3>
            <Award className="h-6 w-6 text-logistics-gold" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {partnerLogos.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-4 flex items-center justify-center h-20 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <span className="font-heading font-bold text-sm text-muted-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
