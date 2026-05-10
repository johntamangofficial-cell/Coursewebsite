import { motion } from "motion/react";
import { ArrowRight, Code, Database, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Grid & Gradients */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest">
                IIT Alumnus Run Institute
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              MASTER <br /> 
              <span className="text-primary italic">THE NEXT</span> <br /> 
              GEN TECH.
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              Empowering the next generation of developers with industry-ready skills. 
              Founded and mentored by <span className="text-white font-semibold">IIT Alumnus</span> with 100% placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              >
                View Portfolios
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/40">
              <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-lg border border-white/5">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest">MERN Stack</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-lg border border-white/5">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest">Data Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Visual element representing code/tech */}
            <div className="relative z-10 p-8 glass rounded-[40px] aspect-square flex flex-col justify-between overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-display font-bold">100%</div>
                  <div className="text-[10px] uppercase font-mono tracking-widest opacity-40">Placement Rate</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="h-2 bg-white/10 rounded-full w-full overflow-hidden"
                    >
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ 
                          duration: 2, 
                          delay: i * 0.5, 
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">System Status</span>
                </div>
                <div className="text-sm font-mono text-white/60">
                  Initializing Core Tech Training Module... Success.
                </div>
              </div>

              {/* Decorative nodes */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/20 blur-3xl rounded-full" />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 glass p-4 rounded-2xl border-primary/20 z-20"
            >
              <div className="text-xs font-mono text-primary mb-1">FOUNDER</div>
              <div className="text-sm font-bold">IIT Alumni Mentorship</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 glass p-4 rounded-2xl border-secondary/20 z-20"
            >
              <div className="text-xs font-mono text-secondary mb-1">NETWORK</div>
              <div className="text-sm font-bold">Top MNC Placements</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
