import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-ceti-dark text-ceti-cream flex flex-col">
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20 shrink-0" />

      <div className="flex-1 flex flex-col lg:flex-row">

        {/* Left — heading */}
        <div className="w-full lg:w-5/12 px-6 md:px-14 py-14 md:py-20 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3rem,7vw,96px)] leading-[0.9] tracking-tight"
          >
            Get in<br />Touch.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 font-sans text-sm text-white/40 leading-relaxed max-w-xs"
          >
            Whether you're a funder, media partner, researcher, or energy actor — we'd love to hear from you.
          </motion.p>
        </div>

        {/* Right — form */}
        <div className="w-full lg:w-7/12 px-6 md:px-14 py-14 md:py-20 flex flex-col justify-center">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="flex flex-col gap-8 w-full max-w-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name + Org side-by-side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col group">
                <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white/20 py-3 text-base md:text-lg focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none text-white placeholder:text-white/20"
                  required
                />
              </div>
              <div className="flex flex-col group">
                <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Organization</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white/20 py-3 text-base md:text-lg focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none text-white placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="flex flex-col group">
              <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Email</label>
              <input
                type="email"
                className="bg-transparent border-b border-white/20 py-3 text-base md:text-lg focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none text-white placeholder:text-white/20"
                required
              />
            </div>

            <div className="flex flex-col group">
              <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Message</label>
              <textarea
                rows={5}
                className="bg-transparent border-b border-white/20 py-3 text-base md:text-lg focus:outline-none focus:border-ceti-orange transition-colors w-full resize-none rounded-none text-white placeholder:text-white/20"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-ceti-orange text-white font-sans text-sm font-semibold tracking-[0.18em] uppercase px-10 py-4 hover:bg-white hover:text-ceti-orange transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

      </div>
    </div>
  );
}
