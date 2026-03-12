import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const searchablePages = [
  { title: "Vận tải đường bộ", href: "/van-tai-duong-bo", keywords: ["đường bộ", "xe tải", "ftl", "ltl", "bắc nam", "vận chuyển"] },
  { title: "Vận tải đường sắt", href: "/van-tai-duong-sat", keywords: ["đường sắt", "tàu hỏa", "rail", "tàu"] },
  { title: "Kho cho thuê", href: "/kho-cho-thue", keywords: ["kho", "kho bãi", "warehouse", "lưu trữ", "thuê kho"] },
  { title: "Tin tức & Chính sách", href: "/tin-tuc-chinh-sach", keywords: ["tin tức", "chính sách", "bảo hiểm", "thanh toán"] },
  { title: "Về Toàn Nhất Logistics", href: "/ve-chung-toi", keywords: ["giới thiệu", "về chúng tôi", "lịch sử", "đội ngũ"] },
  { title: "Trang chủ", href: "/", keywords: ["trang chủ", "home"] },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      setQuery("");
    }
  }, [open]);

  const results = query.length > 0
    ? searchablePages.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.keywords.some((k) => k.includes(query.toLowerCase()))
      )
    : [];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/70 backdrop-blur-md z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 left-0 right-0 z-[101] pt-20 px-4"
          >
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm dịch vụ, trang..."
                    className="flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {query.length > 0 && (
                  <div className="p-3">
                    {results.length > 0 ? (
                      results.map((r) => (
                        <Link
                          key={r.href}
                          to={r.href}
                          onClick={onClose}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-accent transition-colors group"
                        >
                          <span className="font-medium text-foreground">{r.title}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-8 text-sm">
                        Không tìm thấy kết quả cho "{query}"
                      </p>
                    )}
                  </div>
                )}

                {query.length === 0 && (
                  <div className="p-6 text-center text-muted-foreground text-sm">
                    Nhập từ khóa để tìm kiếm dịch vụ
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
