import { motion } from "framer-motion";
import { Truck, TrainFront, Warehouse, Package, ChevronRight, ArrowRight, Phone } from "lucide-react";
import serviceRoad from "@/assets/service-road.jpg";
import serviceRail from "@/assets/service-rail.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";
import serviceFullpackage from "@/assets/service-fullpackage.jpg";

const services = [
  {
    icon: Truck,
    title: "Vận tải đường bộ",
    description: "Giải pháp vận tải linh hoạt, nhanh chóng trên toàn quốc",
    image: serviceRoad,
    items: ["Nhận phát tại địa chỉ", "Nhận phát tại kho", "Giao hàng siêu thị", "Thuê xe nguyên chuyến"],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: TrainFront,
    title: "Vận tải đường sắt",
    description: "Vận chuyển hàng hóa lớn hiệu quả, chi phí tối ưu",
    image: serviceRail,
    items: ["Nhận phát tại địa chỉ", "Nhận phát tại kho", "Giao hàng siêu thị", "Thuê nguyên toa"],
    color: "from-green-600 to-green-400",
  },
  {
    icon: Warehouse,
    title: "Cho thuê kho bãi",
    description: "Hệ thống kho hiện đại, an toàn, quy mô linh hoạt",
    image: serviceWarehouse,
    items: ["Cho thuê kho chung", "Cho thuê kho tự quản", "Kho Thương mại điện tử", "Dịch vụ kho bãi"],
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: Package,
    title: "Vận tải trọn gói",
    description: "Giải pháp logistics toàn diện từ A đến Z",
    image: serviceFullpackage,
    items: [
      "Lưu giữ hàng hóa",
      "Dịch vụ kho",
      "Vận chuyển hàng hóa toàn quốc",
      "Phân phối đến người tiêu dùng",
    ],
    color: "from-purple-600 to-purple-400",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block bg-gradient-to-r from-logistics-yellow to-logistics-gold text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              DỊCH VỤ CỦA CHÚNG TÔI
            </span>
          </motion.div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Giải Pháp Logistics<br className="md:hidden" /> Toàn Diện
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-logistics-yellow to-logistics-gold mx-auto rounded-full mb-5" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cung cấp dịch vụ vận tải & kho bãi chuyên nghiệp, đáp ứng mọi nhu cầu logistics của doanh nghiệp
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Icon badge */}
                <div className="absolute top-5 left-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-logistics-navy" />
                  </div>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-heading font-black text-2xl text-white mb-2 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-sm font-medium drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <ul className="space-y-3.5 mb-6">
                  {service.items.map((item, idx) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-logistics-yellow/20 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-logistics-gold" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-logistics-navy hover:text-logistics-gold transition-colors group/link"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-logistics-navy to-logistics-blue rounded-3xl p-10 md:p-14 shadow-2xl">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-4">
              Cần tư vấn giải pháp logistics?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm ra giải pháp tối ưu nhất
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-logistics-yellow hover:bg-logistics-gold text-logistics-navy font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>Liên hệ ngay: (088) 00-11-52-66</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
