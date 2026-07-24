import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-ceti-dark min-h-screen w-full pt-32 md:pt-48 pb-24 text-ceti-cream">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl leading-[1.1] mb-12"
        >
          We are Africa's<br />
          knowledge<br />
          infrastructure.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xl md:text-3xl font-light text-white/70 max-w-3xl mb-32"
        >
          CETI bridges the gap between data, journalism, and policy. We exist to ensure Africa's energy transition is documented, analyzed, and communicated with uncompromising clarity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6 pt-16 border-t border-white/20">
          {[
            { num: "01", title: "Evidence-First", desc: "Data precedes opinion. We deal in facts, flows, and market realities." },
            { num: "02", title: "Pan-African", desc: "A unified perspective across borders. The transition is continental." },
            { num: "03", title: "Independent", desc: "Uncompromised analysis. We report without political allegiance." },
            { num: "04", title: "Action-Oriented", desc: "Knowledge designed to trigger decisions, not sit in archives." }
          ].map((val, i) => (
            <motion.div 
              key={val.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-serif text-ceti-orange text-2xl mb-6 block">{val.num}.</span>
              <h3 className="font-serif text-3xl mb-4">{val.title}</h3>
              <p className="font-sans text-white/60 font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
