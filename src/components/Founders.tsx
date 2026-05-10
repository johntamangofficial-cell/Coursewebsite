import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Founders() {
  return (
    <section className="py-32 bg-dark-surface/30 relative" id="founders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              MEET OUR <br />
              <span className="text-primary italic">FOUNDERS.</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              "We started TechAltum with a single mission: To bridge the gap between academic learning and industry expectations. Our students don't just learn tools; they learn how to solve real problems."
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#00D2FF" }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/5 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl absolute inset-0 animate-pulse" />
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 glass rounded-3xl overflow-hidden flex items-center justify-center border-2 border-primary/20">
                <div className="text-center">
                  <div className="text-primary text-6xl font-black mb-4">IIT</div>
                  <div className="text-sm font-mono uppercase tracking-[0.3em] opacity-40">Alumnus Foundation</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border-white/20 shadow-2xl z-20">
                <div className="font-bold">IIT Mentors</div>
                <div className="text-xs text-primary font-mono">Expert Faculty</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
