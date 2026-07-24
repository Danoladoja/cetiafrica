import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-ceti-dark text-ceti-cream pt-20 flex">
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-6 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-6xl md:text-[8vw] leading-[0.9] tracking-tight"
          >
            Get in<br />Touch.
          </motion.h1>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-24 flex flex-col justify-center">
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-12 w-full max-w-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col relative group">
              <label className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Name</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-white/20 py-3 text-xl focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none"
                required
              />
            </div>
            
            <div className="flex flex-col relative group">
              <label className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Organization</label>
              <input 
                type="text" 
                className="bg-transparent border-b border-white/20 py-3 text-xl focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none"
              />
            </div>
            
            <div className="flex flex-col relative group">
              <label className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Email</label>
              <input 
                type="email" 
                className="bg-transparent border-b border-white/20 py-3 text-xl focus:outline-none focus:border-ceti-orange transition-colors w-full rounded-none"
                required
              />
            </div>
            
            <div className="flex flex-col relative group">
              <label className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Message</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-white/20 py-3 text-xl focus:outline-none focus:border-ceti-orange transition-colors w-full resize-none rounded-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="self-start bg-ceti-orange text-white font-sans text-lg font-medium px-12 py-5 hover:bg-white hover:text-ceti-orange transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>

      </div>
    </div>
  );
}
