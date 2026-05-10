import { motion } from "motion/react";
import { Code2, Database, BarChart3, Cloud, Layout, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "MERN Stack Development",
      description: "Complete Full Stack training with MongoDB, Express, React, and Node.js.",
      icon: <Layout className="w-8 h-8" />,
      tag: "Popular",
      color: "from-blue-500 to-cyan-500",
      features: ["Real Project", "Unit Testing", "AWS Deployment"]
    },
    {
      title: "Data Science & AI",
      description: "Master Python, Machine Learning, and Big Data with expert mentorship.",
      icon: <Database className="w-8 h-8" />,
      tag: "Advanced",
      color: "from-purple-500 to-indigo-500",
      features: ["Deep Learning", "Pandas & NumPy", "NLP Projects"]
    },
    {
      title: "Data Analytics",
      description: "Learn to visualize and analyze data using Power BI, SQL, and Excel.",
      icon: <BarChart3 className="w-8 h-8" />,
      tag: "Fast Track",
      color: "from-orange-500 to-red-500",
      features: ["Tableau", "Statistical Modeling", "Business Case Studies"]
    },
    {
      title: "Salesforce CRM",
      description: "Become a certified Salesforce Developer or Admin with hands-on training.",
      icon: <Cloud className="w-8 h-8" />,
      tag: "Business",
      color: "from-cyan-500 to-blue-600",
      features: ["Apex & LWC", "Process Builder", "Admin Certification"]
    }
  ];

  return (
    <section className="py-32 relative" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Our Curriculum</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              WORLD CLASS <br />
              COURSES FOR YOU.
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-dark-surface border border-white/5 rounded-3xl overflow-hidden p-8 flex flex-col justify-between"
            >
              {/* Gradient Aura */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 transition-opacity blur-2xl`} />

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white`}>
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                    {course.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-white/40 mb-8 max-w-sm">{course.description}</p>

                <div className="space-y-3 mb-12 text-sm text-white/60">
                  {course.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ gap: "1rem" }}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.1em] text-xs"
              >
                Enroll Now
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
