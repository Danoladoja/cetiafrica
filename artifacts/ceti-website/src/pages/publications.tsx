import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MOCK_PUBLICATIONS = [
  {
    id: 1,
    title: "Africa's Solar Surge: What the Data Really Shows",
    type: "Market Intelligence",
    date: "Oct 12, 2026",
    readTime: "8 min read",
    color: "bg-ceti-teal",
    description: "A comprehensive look at deployment rates across Sub-Saharan Africa, separating the hype from the hard numbers in renewable growth."
  },
  {
    id: 2,
    title: "Bridging the Policy Gap in Sub-Saharan Energy",
    type: "Policy Analysis",
    date: "Oct 05, 2026",
    readTime: "12 min read",
    color: "bg-ceti-orange",
    description: "How regulatory frameworks are evolving to attract private capital while ensuring equitable access for rural communities."
  },
  {
    id: 3,
    title: "The Comms Challenge in Just Transition Narratives",
    type: "Strategic Comms",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    color: "bg-ceti-amber",
    description: "Analyzing how different stakeholders frame the 'just transition' and why alignment remains elusive on the global stage."
  },
  {
    id: 4,
    title: "Quarterly Investment Flow Report: Q3 2026",
    type: "Market Intelligence",
    date: "Sep 15, 2026",
    readTime: "15 min read",
    color: "bg-ceti-teal",
    description: "Tracking foreign direct investment in African renewables, highlighting a shift towards distributed energy systems."
  },
  {
    id: 5,
    title: "The Hidden Costs of Grid Defection",
    type: "Journalism",
    date: "Sep 02, 2026",
    readTime: "10 min read",
    color: "bg-ceti-navy",
    description: "As commercial users move off-grid, state utilities face an existential funding crisis. An investigative report from three cities."
  },
  {
    id: 6,
    title: "Framing the Future: Media Narratives on Gas",
    type: "Strategic Comms",
    date: "Aug 20, 2026",
    readTime: "7 min read",
    color: "bg-ceti-amber",
    description: "A quantitative analysis of how domestic vs international media portray the role of natural gas in Africa's transition."
  }
];

export default function Publications() {
  const [filter, setFilter] = useState("All");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const filteredPubs = filter === "All" 
    ? MOCK_PUBLICATIONS 
    : MOCK_PUBLICATIONS.filter(p => p.type === filter);

  return (
    <div className="w-full bg-ceti-cream min-h-screen pb-32">
      {/* HEADER */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-ceti-navy leading-tight mb-8">
            Evidence, <span className="text-ceti-teal italic">Published</span>.
          </h1>
          <p className="font-sans text-xl text-ceti-navy/70 leading-relaxed max-w-2xl mb-12">
            Search our archive of journalism, market data, policy briefs, and communications research.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ceti-navy/40" />
              <Input 
                placeholder="Search publications..." 
                className="pl-12 py-6 rounded-none border-ceti-navy/20 bg-white focus-visible:ring-ceti-teal text-base"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {["All", "Journalism", "Market Intelligence", "Policy Analysis", "Strategic Comms"].map((f) => (
                <Button
                  key={f}
                  onClick={() => setFilter(f)}
                  variant={filter === f ? "default" : "outline"}
                  className={`rounded-none whitespace-nowrap ${
                    filter === f 
                      ? "bg-ceti-navy text-white hover:bg-ceti-navy/90" 
                      : "border-ceti-navy/20 text-ceti-navy hover:bg-ceti-navy/5"
                  }`}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPubs.map((pub, index) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white group cursor-pointer flex flex-col h-full border border-black/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2 h-2 rounded-full ${pub.color}`}></span>
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-ceti-navy/60">
                    {pub.type}
                  </span>
                </div>
                
                <h4 className="font-serif text-2xl text-ceti-navy mb-4 group-hover:text-ceti-orange transition-colors">
                  {pub.title}
                </h4>
                
                <p className="font-sans text-sm text-ceti-navy/70 line-clamp-3 mb-8 flex-1">
                  {pub.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5">
                  <div className="flex items-center gap-4 text-xs font-sans text-ceti-navy/50 uppercase tracking-wider">
                    <span>{pub.date}</span>
                  </div>
                  <span className="text-xs font-sans text-ceti-navy/50 uppercase tracking-wider">{pub.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredPubs.length === 0 && (
          <div className="text-center py-20 text-ceti-navy/50 font-sans">
            No publications found matching this filter.
          </div>
        )}
      </section>
    </div>
  );
}
