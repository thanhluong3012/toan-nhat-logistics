import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

interface ContactFormDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactFormDialog = ({ open, onClose }: ContactFormDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-[900px] h-fit max-h-[90vh] bg-card rounded-2xl shadow-2xl z-[101] overflow-y-auto"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <CheckCircle className="h-20 w-20 text-primary mb-6" />
                </motion.div>
                <h3 className="text-2xl font-black text-foreground font-heading mb-3">
                  Cảm ơn bạn đã liên hệ!
                </h3>
                <p className="text-muted-foreground">
                  Chúng tôi sẽ phản hồi trong vòng 30 phút trong giờ làm việc.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-5">
                {/* Left side - Info */}
                <div className="md:col-span-2 bg-gradient-hero p-8 md:rounded-l-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-primary-foreground font-heading mb-3">
                      Liên Hệ Với Chúng Tôi
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                      Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7. Hãy để lại thông tin, chúng tôi sẽ liên hệ lại ngay!
                    </p>
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                          <Phone className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/60">Hotline</p>
                          <p className="text-sm font-bold text-primary-foreground">(088) 00-11-52-66</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/60">Email</p>
                          <p className="text-sm text-primary-foreground">cskh1@toannhat.co</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-foreground/60">Văn phòng</p>
                          <p className="text-sm text-primary-foreground">TP. Hồ Chí Minh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-primary-foreground/50 text-xs mt-8">
                    Báo giá trong vòng 30 phút!
                  </p>
                </div>

                {/* Right side - Form */}
                <div className="md:col-span-3 p-8 relative">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <X className="h-4 w-4 text-foreground" />
                  </button>

                  <h4 className="text-lg font-bold text-foreground font-heading mb-6">
                    Gửi yêu cầu báo giá
                  </h4>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Họ và tên *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Số điện thoại *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="0901 234 567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="email@congty.com"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Dịch vụ quan tâm</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">-- Chọn dịch vụ --</option>
                        <option value="road">Vận tải đường bộ</option>
                        <option value="rail">Vận tải đường sắt</option>
                        <option value="warehouse">Kho cho thuê</option>
                        <option value="fullpackage">Trọn gói Logistics</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Nội dung *</label>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Mô tả nhu cầu vận chuyển hoặc thuê kho..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-logistics-blue-dark text-primary-foreground font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Gửi Yêu Cầu
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactFormDialog;
