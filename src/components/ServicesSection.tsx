import { motion } from "framer-motion";
import { Truck, TrainFront, Warehouse, Package, ChevronRight } from "lucide-react";
import serviceRoad from "@/assets/service-road.jpg";
import serviceRail from "@/assets/service-rail.jpg";
import serviceWarehouse from "@/assets/service-warehouse.jpg";
import serviceFullpackage from "@/assets/service-fullpackage.jpg";

const services = [
  {
    icon: Truck,
    title: "Dịch vụ vận tải đường bộ",
    image: serviceRoad,
    items: ["Nhận phát tại địa chỉ", "Nhận phát tại kho", "Giao hàng siêu thị", "Thuê xe nguyên chuyến"],
  },
  {
    icon: TrainFront,
    title: "Dịch vụ vận tải đường sắt",
    image: serviceRail,
    items: ["Nhận phát tại địa chỉ", "Nhận phát tại kho", "Giao hàng siêu thị", "Thuê nguyên toa"],
  },
  {
    icon: Warehouse,
    title: "Dịch vụ cho thuê kho bãi",
    image: serviceWarehouse,
    items: ["Cho thuê kho chung", "Cho thuê kho tự quản", "Kho Thương mại điện tử", "Dịch vụ kho bãi"],
  },
  {
    icon: Package,
    title: "Dịch vụ vận tải trọn gói",
    image: serviceFullpackage,
    items: [
      "Lưu giữ hàng hóa",
      "Dịch vụ kho",
      "Vận chuyển hàng hóa toàn quốc",
      "Phân phối đến người tiêu dùng",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-3">
            DỊCH VỤ CỦA CHÚNG TÔI
          </h2>
          <div className="w-16 h-1 bg-logistics-yellow mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Giải pháp vận tải & kho bãi toàn diện, phục vụ mọi nhu cầu logistics của doanh nghiệp.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-logistics-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-logistics-yellow flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-logistics-navy" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <ChevronRight className="h-4 w-4 text-logistics-yellow flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-logistics-yellow transition-colors"
                >
                  Xem chi tiết
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
