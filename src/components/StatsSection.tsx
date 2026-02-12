import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "16+",
    label: "Năm kinh nghiệm",
    description: "Phục vụ hàng ngàn doanh nghiệp",
  },
  {
    icon: Users,
    number: "500+",
    label: "Khách hàng tin tưởng",
    description: "Trên toàn quốc",
  },
  {
    icon: Building2,
    number: "50,000m²",
    label: "Diện tích kho bãi",
    description: "Hiện đại, an toàn",
  },
  {
    icon: Award,
    number: "99%",
    label: "Độ hài lòng",
    description: "Từ khách hàng",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-logistics-navy via-logistics-blue to-logistics-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-logistics-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-logistics-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring" }}
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20"
              >
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-logistics-yellow" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              >
                <h3 className="font-heading font-black text-3xl md:text-5xl text-white mb-2 group-hover:text-logistics-yellow transition-colors">
                  {stat.number}
                </h3>
                <p className="font-bold text-sm md:text-base text-white/90 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs md:text-sm text-white/70">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
