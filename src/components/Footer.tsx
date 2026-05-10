import { motion } from "motion/react";
import { Mail, MapPin, Phone, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark/50 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-dark font-black">T</span>
              </div>
              <span className="text-xl md:text-2xl font-display font-bold tracking-tighter">
                TECH<span className="text-primary italic">ALTUM</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Premium IT training institute run by IIT alumni. Transform your career with high-demand tech skills and expert mentorship.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ scale: 1.1, color: "#00D2FF" }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-white/20 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Courses', 'Placements', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-white/20 mb-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60">C-50, Sector 2, Near Sec-15 Metro, Noida, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60">+91 9015942433</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60">info@techaltum.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center sm:flex sm:justify-between sm:items-center">
          <p className="text-white/20 text-xs mb-4 sm:mb-0">
            © {new Date().getFullYear()} TechAltum. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
