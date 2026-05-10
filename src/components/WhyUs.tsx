import { motion } from "motion/react";
import { GraduationCap, Users, LayoutDashboard, Microscope } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "IIT Alumnus Mentorship",
      desc: "Learn from the best. Our curriculum is designed and updated by industry veterans from IIT.",
      icon: <GraduationCap className="w-12 h-12 text-primary" />
    },
    {
      title: "100% Placement Support",
      desc: "Dedicated placement cell to help you secure interviews at top MNCs and startups.",
      icon: <Users className="w-12 h-12 text-primary" />
    },
    {
      title: "Real-world Portfolio",
      desc: "Build professional projects that showcase your skills to future employers.",
      icon: <LayoutDashboard className="w-12 h-12 text-primary" />
    },
    {
      title: "Interactive Lab",
      desc: "24/7 access to our high-tech lab with high-speed internet and necessary tools.",
      icon: <Microscope className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section className="py-32 bg-dark-surface/50 relative overflow-hidden" id="why-us">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              WHY CHOOSE <br />
              <span className="text-primary italic">TECH ALTUM?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-lg mb-12">
              We don't just teach code; we build careers. Our unique approach focuses on conceptual clarity and practical implementation.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-dark text-3xl font-bold">
                10+
              </div>
              <div>
                <div className="text-xl font-bold">Years of Trust</div>
                <div className="text-white/40 text-sm">Empowering students since 2014.</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 glass rounded-3xl group"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
