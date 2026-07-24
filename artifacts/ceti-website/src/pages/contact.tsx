import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        
        {/* LEFT COLUMN - TEXT */}
        <div className="w-full md:w-5/12 bg-ceti-navy text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {/* Simple geometric pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
              Let's shape the <span className="text-ceti-amber italic">narrative</span>.
            </h1>
            <p className="font-sans text-lg text-white/70 leading-relaxed mb-12">
              Whether you're looking to partner on research, commission a data project, or inquire about our communications workshops, we're ready to engage.
            </p>
            
            <div className="space-y-8 font-sans">
              <div>
                <h4 className="text-xs tracking-widest uppercase text-ceti-amber font-bold mb-2">Headquarters</h4>
                <p className="text-white/80">Nairobi, Kenya</p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-ceti-amber font-bold mb-2">General Inquiries</h4>
                <p className="text-white/80">hello@ceti-africa.org</p>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-ceti-amber font-bold mb-2">Media & Press</h4>
                <p className="text-white/80">press@ceti-africa.org</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="w-full md:w-7/12 bg-ceti-cream p-12 md:p-24 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl w-full mx-auto md:mx-0"
          >
            <h2 className="font-serif text-3xl text-ceti-navy mb-8">Send us a message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">First Name</label>
                  <Input className="rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-orange py-6" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">Last Name</label>
                  <Input className="rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-orange py-6" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">Organization</label>
                <Input className="rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-orange py-6" />
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">Email Address</label>
                <Input type="email" className="rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-orange py-6" />
              </div>
              
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">Subject Area</label>
                <select className="w-full rounded-none border border-ceti-navy/20 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ceti-orange">
                  <option>Partnership Inquiry</option>
                  <option>Africa Energy Pulse</option>
                  <option>AfriEnergy Tracker Data</option>
                  <option>Comms Lab Workshop</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/70">Message</label>
                <Textarea className="rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-orange min-h-[150px] resize-none" />
              </div>
              
              <Button type="submit" className="w-full bg-ceti-orange hover:bg-ceti-orange/90 text-white rounded-none uppercase tracking-wider text-sm font-semibold py-6 mt-4">
                Submit Message
              </Button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
