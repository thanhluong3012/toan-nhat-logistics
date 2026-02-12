import { motion } from "framer-motion";
import { Heart, Award, Sparkles } from "lucide-react";

const partnerLogos = [
  { name: "Vinamilk", tier: "gold" },
  { name: "Masan", tier: "gold" },
  { name: "Unilever", tier: "gold" },
  { name: "Nestlé", tier: "gold" },
  { name: "P&G", tier: "silver" },
  { name: "Acecook", tier: "silver" },
  { name: "TH True Milk", tier: "silver" },
  { name: "Nutifood", tier: "silver" },
  { name: "Pepsi", tier: "bronze" },
  { name: "Coca-Cola", tier: "bronze" },
  { name: "Colgate", tier: "bronze" },
  { name: "Samsung", tier: "bronze" },
];

const ThankYouSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-logistics-yellow/20 to-logistics-gold/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-5 border border-logistics-yellow/30"
          >
            <Heart className="h-5 w-5 text-logistics-gold fill-logistics-gold" />
            <span className="text-sm font-bold text-logistics-gold uppercase tracking-wider">Tri ân khách hàng</span>
            <Sparkles className="h-4 w-4 text-logistics-gold" />
          </motion.div>
          
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-3">
            Dịch Vụ Vận Tải & Kho Bãi
          </h2>
          <p className="font-heading font-bold text-xl md:text-3xl bg-gradient-to-r from-logistics-navy to-logistics-blue bg-clip-text text-transparent">
            Của Toàn Nhất Logistics
          </p>
          <div className="mt-5 w-24 h-1.5 bg-gradient-to-r from-logistics-yellow to-logistics-gold mx-auto rounded-full" />
        </motion.div>

        {/* Thank you letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-logistics-yellow/20 to-transparent rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-logistics-blue/10 to-transparent rounded-tr-[80px]" />
            
            {/* Gold badge */}
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-logistics-yellow to-logistics-gold rounded-full flex items-center justify-center shadow-xl border-4 border-white"
            >
              <Award className="h-10 w-10 text-white" />
            </motion.div>

            <div className="relative z-10">
              <h3 className="font-heading font-black text-lg md:text-2xl text-logistics-gold mb-8 text-center leading-relaxed">
                16 NĂM TRỌN VẸN NIỀM TIN<br />
                LỜI TRI ÂN TỪ TOÀN NHẤT LOGISTICS
              </h3>

              <div className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
                <p className="font-bold text-logistics-navy text-lg">Kính gửi: Quý khách hàng,</p>
                <p className="text-justify">
                  Hơn 16 năm một chặng đường, sự tin tưởng của Quý khách chính là tài sản quý giá nhất mà Toàn Nhất Logistics có được. Chúng tôi xin gửi lời cảm ơn chân thành nhất vì sự đồng hành của Quý vị đối với dịch vụ Kho bãi và Vận tải của chúng tôi trong suốt thời gian qua.
                </p>
                <p className="text-justify">
                  Mỗi kiện hàng được giao đúng hạn, mỗi kho bãi được vận hành an toàn đều là minh chứng cho cam kết của chúng tôi với Quý khách. Sự hài lòng của Quý khách là động lực để Toàn Nhất tiếp tục tối ưu và vươn xa hơn nữa.
                </p>
                <div className="pt-4 border-t-2 border-dashed border-logistics-yellow/30">
                  <p className="font-bold text-logistics-navy text-lg text-right italic">
                    Trân trọng cảm ơn!<br />
                    <span className="text-base">Ban lãnh đạo Toàn Nhất Logistics</span>
                  </p>
                </div>
              </div>
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
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="h-7 w-7 text-logistics-gold" />
            <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground">
              BẢNG VÀNG TRI ÂN
            </h3>
            <Award className="h-7 w-7 text-logistics-gold" />
          </div>

          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Cảm ơn các đối tác đã tin tưởng và đồng hành cùng Toàn Nhất Logistics
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`
                  bg-white rounded-2xl border-2 p-6 flex flex-col items-center justify-center h-28 
                  shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all
                  ${partner.tier === 'gold' ? 'border-logistics-yellow bg-gradient-to-br from-logistics-yellow/5 to-transparent' : 
                    partner.tier === 'silver' ? 'border-gray-300' : 
                    'border-gray-200'}
                `}
              >
                {partner.tier === 'gold' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-logistics-gold rounded-full flex items-center justify-center">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                )}
                <span className="font-heading font-bold text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
