import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Hiring Partners" },
    { value: "12k+", label: "Students Trained" },
    { value: "100%", label: "Placement Support" },
  ];

  return (
    <section className="py-20 bg-dark-surface border-y border-white/5 relative overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black font-display text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
