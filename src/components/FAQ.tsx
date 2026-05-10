import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What top courses are offered by Tech Altum?",
    a: "We offer professional training in MERN Stack, Data Science, Salesforce, Data Analytics, and Web Development (React, Node.js, PHP)."
  },
  {
    q: "Do you provide placement guarantee?",
    a: "We provide 100% placement assistance, help with resume building, mock interviews, and connect you with top companies in our network."
  },
  {
    q: "Is there any demo class available?",
    a: "Yes! We offer a free counselling session and demo classes to help you understand our teaching methodology and curriculum."
  },
  {
    q: "What is the qualification required for courses?",
    a: "Requirements vary by course. Generally, graduates or final year students from B.Tech, BCA, MCA, or relevant backgrounds can enroll."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">GOT QUESTIONS?</h2>
          <p className="text-white/40">We've got answers. If you don't find what you're looking for, feel free to contact us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/5 rounded-2xl overflow-hidden bg-white/2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === index ? <Minus className="text-primary" /> : <Plus />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
