"use client";

import { motion, Variants } from "framer-motion";

const concerns = [
  { name: "Bhakti Electrical", desc: "Project Execution & Supply" },
  { name: "Guru Gas Industries", desc: "Industrial Gas Supply" },
  { name: "M/S Siddhi Balaji Kanthewad", desc: "Engineering & Civil Works" },
  { name: "BPCL Petrol Pump", desc: "Retail & Industrial Fuel Supply" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function initials(name: string) {
  const parts = name.replace(/[^\w\s]/g, "").trim().split(/\s+/);
  const pick = parts.slice(0, 3).map(p => p[0]).join("");
  return pick.toUpperCase();
}

export function SisterConcernsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Sister Concern Companies
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
            Our extended capabilities through trusted group entities
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {concerns.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="relative group rounded-2xl overflow-hidden border border-white/10
                         bg-gradient-to-br from-primary/10 via-background to-accent/10
                         shadow-[0_6px_28px_rgba(0,0,0,.06)] transition-all
                         hover:-translate-y-1.5 hover:shadow-[0_16px_46px_rgba(0,0,0,.14)]"
            >
              {/* Rotating conic aura */}
              <div
                className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-60 animate-spin-slower"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(59,130,246,0.18), transparent 35%, transparent 70%, rgba(59,130,246,0.18))",
                }}
              />
              {/* Hover tint */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />

              <div className="relative z-10 p-6 flex items-start gap-4">
                {/* Monogram with glow ring */}
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-xl animate-spin-slowest opacity-70"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(99,102,241,.25), transparent 40%, transparent 70%, rgba(20,184,166,.25))",
                      filter: "blur(1px)",
                    }}
                  />
                  <div className="relative w-14 h-14 rounded-xl bg-background/80 border border-white/15 flex items-center justify-center shadow-sm backdrop-blur">
                    <span className="text-lg font-extrabold text-foreground/90 tracking-wide">
                      {initials(c.name)}
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">
                    {c.name}
                  </h3>
                  <p className="text-sm text-foreground/70 mt-0.5">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="relative z-10 px-6 pb-5">
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary/70 group-hover:w-24 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />

      <style jsx>{`
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower { animation: spin-slower 30s linear infinite; }
        @keyframes spin-slowest {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slowest { animation: spin-slowest 50s linear infinite; }
      `}</style>
    </section>
  );
}