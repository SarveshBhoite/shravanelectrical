"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ----------------- Helpers ----------------- */
function useInViewOnce(threshold = 0.15) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.unobserve(entry.target);
      }
    }, { threshold });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, inView };
}

// Put your images inside /public/gallery
const images: string[] = [
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
    "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
  "/hero1.png",
  "/hero2.png",
  "/hero1.png",
  "/hero1.png",
];

/* ----------------- Page ----------------- */
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <ImageGlobeSection />
        </div>
      </section>

      <section className="py-20" id="mosaic">
        <div className="container mx-auto px-4">
          <MasonrySection />
        </div>
      </section>

      <Footer />
      <StickyButtons />
    </div>
  );
}

/* ----------------- Hero (video, no carousel) ----------------- */
function Hero() {
  const { ref, inView } = useInViewOnce(0.2);

  return (
    <section className="relative h-[68vh] md:h-[78vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_25%,rgba(0,0,0,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      <div className="relative z-10 container mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
        <Badge variant="outline" className="mb-4 border-white/50 text-white/90">
          Gallery
        </Badge>
        <motion.h1
          ref={ref as any}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Our Journey in Frames
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl"
        >
          People • Projects • Purpose — moments that power our story.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8"
        >
          <Button asChild>
            <a href="#mosaic">Browse Gallery</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------- Image Globe Section (Desktop only) ----------------- */
function ImageGlobeSection() {
  const { ref, inView } = useInViewOnce(0.15);
  const [paused, setPaused] = useState(false);

  // Keep globe inside its column, no spreading before assemble
  const rows = 11;
  const radius = 260; // keep compact
  const tiles = useMemo(() => buildSolidSphere(images, rows), []);

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
          A World of Shravan
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore the energy, innovation, and impact across our sites and communities.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Globe column: hidden on small screens */}
        <div className="hidden lg:flex lg:col-span-7 items-center justify-center relative">
          {/* Soft glow kept within column */}
          <div className="absolute -z-10 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-primary/15 via-accent/15 to-primary/10 blur-3xl opacity-60" />

          <div
            ref={ref as any}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ perspective: 1400 }}
          >
            {/* Wrapper constrained to 2*radius and clipped */}
            <div
              className="relative mx-auto overflow-hidden"
              style={{
                width: radius * 2,
                height: radius * 2,
                transformStyle: "preserve-3d",
                animation: "spinY 36s linear infinite",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {tiles.map((tile, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                  // Place tiles at final position always; only fade/scale the tile inner to avoid outside spread
                  style={{
                    transform: `rotateY(${tile.lon}deg) rotateX(${tile.lat}deg) translateZ(${radius}px) rotateX(${-tile.lat}deg) rotateY(${-tile.lon}deg)`,
                  }}
                >
                  <div
                    className="group relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 via-background to-accent/20 shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:scale-110 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-transform duration-300"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "scale(1)" : "scale(0.96)",
                      transition: "opacity 650ms ease, transform 650ms ease",
                      transitionDelay: `${tile.delay}ms`,
                    }}
                  >
                    <img src={tile.src} alt="globe tile" className="w-full h-full object-cover" />
                    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orbit ring inside column */}
          <div
            className="pointer-events-none absolute rounded-full border border-foreground/10"
            style={{ width: radius * 2 + 28, height: radius * 2 + 28 }}
          />
        </div>

        {/* Right column text/badges (visible on all sizes) */}
        <div className="lg:col-span-5">
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Crafting Power Stories
            </h3>
            <p className="text-muted-foreground mb-6">
              From substations to solar fields, from teams in the field to community initiatives—this is our world in pictures.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Site Excellence",
                "Community Outreach",
                "Safety First",
                "Smart Solutions",
                "Team Culture",
                "Green Energy",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-4 py-3 bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-white/10 shadow-[0_8px_26px_rgba(0,0,0,.12)]"
                >
                  <span className="text-sm font-semibold">{t}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <Button asChild>
                <a href="#mosaic">Browse All Moments</a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spinY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// Build denser “solid” sphere (no off-screen spreading)
function buildSolidSphere(srcs: string[], rows: number) {
  const latitudes: number[] = Array.from({ length: rows }, (_, i) => -75 + (i * 150) / (rows - 1)); // -75..+75
  const lonCounts = latitudes.map((lat) => {
    const k = Math.max(0.25, Math.cos((lat * Math.PI) / 180));
    return Math.max(12, Math.round(22 * k));
  });

  const tiles: { src: string; lat: number; lon: number; delay: number }[] = [];
  let idx = 0;
  latitudes.forEach((lat, row) => {
    const count = lonCounts[row];
    for (let j = 0; j < count; j++) {
      const lon = (360 / count) * j + (row % 2 ? (180 / count) : 0); // offset alternate rings to fill gaps
      const src = srcs[idx % srcs.length];
      tiles.push({ src, lat, lon, delay: 120 + (row * 50 + j * 14) });
      idx++;
    }
  });
  return tiles;
}

/* ----------------- Animated Masonry Grid ----------------- */
function MasonrySection() {
  const { ref, inView } = useInViewOnce(0.1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const list = images.concat(images.slice(0, 16)); // fill

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Moments from the Field
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A quilt of actions, achievements, and everyday excellence.
        </p>
      </div>

      <div
        ref={ref as any}
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance] mx-auto"
      >
        {list.map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            initial={{ opacity: 0, y: 18, rotate: (i % 3) - 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.03 * (i % 20) }}
            className="mb-5 break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-[0_12px_30px_rgba(0,0,0,0.15)] group"
          >
            <div className="relative overflow-hidden">
              <img
                src={src}
                alt="Gallery"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
                onClick={() => setLightbox(src)}
              />
              {/* soft conic sweep on hover */}
              <span className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(from_0deg,rgba(59,130,246,.22),transparent_35%,transparent_70%,rgba(59,130,246,.22))]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox!} alt="Preview" className="w-full h-auto rounded-xl shadow-2xl" />
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 rounded-full h-9 w-9 p-0"
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}