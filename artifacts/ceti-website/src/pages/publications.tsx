import { motion } from "framer-motion";

const publications = [
  { tag: "Analysis", title: "The State of Solar Off-Grid Markets 2026", date: "Oct 12, 2026", color: "text-ceti-teal" },
  { tag: "Report", title: "Navigating Policy Shifts in East Africa", date: "Sep 28, 2026", color: "text-ceti-orange" },
  { tag: "Briefing", title: "Capital Flows: Q3 Energy Investments", date: "Sep 15, 2026", color: "text-ceti-amber" },
  { tag: "Analysis", title: "Grid Defection vs Grid Integration", date: "Aug 30, 2026", color: "text-ceti-teal" },
  { tag: "Report", title: "The Minerals Rush: A Pan-African View", date: "Aug 12, 2026", color: "text-ceti-orange" },
  { tag: "Briefing", title: "Policy Roadblocks in Mini-Grid Expansion", date: "Jul 22, 2026", color: "text-ceti-amber" },
  { tag: "Analysis", title: "Financing the Transition: Local vs Foreign Debt", date: "Jul 05, 2026", color: "text-ceti-teal" },
  { tag: "Report", title: "Women in African Energy Leadership", date: "Jun 18, 2026", color: "text-ceti-orange" },
];

export default function Publications() {
  return (
    <div className="w-full min-h-screen bg-ceti-cream text-ceti-navy pt-32 pb-24">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <h1 className="font-serif text-5xl md:text-8xl mb-24">Publications.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {publications.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className={`font-sans text-sm tracking-wider uppercase mb-4 ${pub.color} font-medium`}>
                {pub.tag}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 group-hover:text-ceti-orange transition-colors">
                {pub.title}
              </h3>
              <div className="mt-auto font-sans text-sm text-ceti-navy/50">
                {pub.date}
              </div>
              <div className="w-full h-px bg-ceti-navy/10 mt-6 group-hover:bg-ceti-orange transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
