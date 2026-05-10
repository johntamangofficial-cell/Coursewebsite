import { motion } from "motion/react";

export default function Placements() {
  const companies = [
    "Google", "Microsoft", "TCS", "Accenture", "HCL", "Amazon", "Capgemini", "Infosys", "Wipro", "IBM"
  ];

  return (
    <section className="py-32 overflow-hidden" id="placements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic">Top MNC Placements</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Our students are working in world-class organizations. You could be the next.
            </p>
          </motion.div>
        </div>

        {/* Marquee effect for companies */}
        <div className="relative">
          <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-12 sm:gap-24 py-10"
            >
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index} 
                  className="text-2xl md:text-4xl font-display font-black text-white/5 hover:text-primary transition-colors cursor-default"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { name: "Shweta Mishra", role: "Software Developer", company: "TCS", image: "SM" },
            { name: "Jay Lahot", role: "Data Scientist", company: "HCL", image: "JL" },
            { name: "Vandana Kaur", role: "React Developer", company: "Accenture", image: "VK" },
          ].map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-3xl flex items-center gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform">
                {student.image}
              </div>
              <div>
                <div className="font-bold">{student.name}</div>
                <div className="text-xs text-white/40 mb-1">{student.role}</div>
                <div className="text-xs font-mono text-primary font-bold">{student.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
