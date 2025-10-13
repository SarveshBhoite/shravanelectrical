"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";

// Elegant serif for headings
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

// Array of images for the gallery.
const galleryImages = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery2.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery3.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image" },
  { src: "/gallery/gallery10.jpeg", alt: "Gallery image" },
  { src: "/gallery/gallery11.jpeg", alt: "Gallery image" },
];

export default function GalleryPage() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  // Ring sizes
  const ringDiameter = 450; // must match 2 * radius
  const radius = ringDiameter / 2; // 225

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/video4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-6xl md:text-8xl font-black text-white text-balance leading-tight tracking-tight ${dmSerif.className}`}>
              Our Work in Pictures
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              A visual journey through our projects, people, and progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Globe of Images Section */}
      <section className="py-24 bg-muted/50 overflow-hidden relative">
        {/* Animated Background Gradients (kept) */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(204,102,51,0.1) 0%, rgba(204,102,51,0) 50%), radial-gradient(circle at 90% 80%, rgba(51,153,204,0.1) 0%, rgba(51,153,204,0) 50%)",
          }}
        />

        {/* Corner Images (kept) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-10 left-8 w-80 h-70 overflow-hidden rounded-xl shadow-lg z-10"
        >
          <Image src="/hero1.png" alt="Corner Image 1" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute top-10 right-8 w-80 h-70 overflow-hidden rounded-xl shadow-lg z-10"
        >
          <Image src="/hero3.png" alt="Corner Image 2" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-8 left-8 w-100 h-90 overflow-hidden rounded-xl shadow-lg z-10"
        >
          <Image src="/tower.png" alt="Corner Image 3" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 right-8 w-100 h-90 overflow-hidden rounded-xl shadow-lg z-10"
        >
          <Image src="/repair.png" alt="Corner Image 4" fill style={{ objectFit: "cover" }} />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground leading-tight ${dmSerif.className}`}>
            A Global View of
            <span className="bg-gradient-to-r from-primary via-secondary to-yellow-500 bg-clip-text text-transparent animate-gradient">
              {" "}
              Our Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience our activities and capabilities from a dynamic, new perspective.
          </p>

          {/* Ring */}
          <div className="relative flex items-center justify-center h-[500px] w-full">
            {/* Centered border ring (STATIC, centered) */}
            <div
              className="absolute rounded-full border border-primary/20 z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: ringDiameter, height: ringDiameter }}
            />

            {/* Central Logo (fixed center) */}
            <motion.div
              className="absolute rounded-full overflow-hidden z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: 135, height: 135 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <Image src="/logo.png" alt="Company Logo" fill style={{ objectFit: "contain" }} />
            </motion.div>

            {/* Rotating image ring (CENTERED, images remain upright via counter-rotation) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ring-spin"
              style={{ width: ringDiameter, height: ringDiameter }}
            >
              {galleryImages.map((image, index) => {
                const angle = (index / galleryImages.length) * 360;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={image.src}
                    className="absolute"
                    style={{ left: "50%", top: "50%", transform: `translate(${x - 56}px, ${y - 56}px)` }}
                  >
                    <div className="counter-spin">
                      <motion.div
                        className="relative w-28 h-28 rounded-lg overflow-hidden shadow-lg border-2 border-primary/50 cursor-pointer bg-background/30 backdrop-blur"
                        initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                        animate={{
                          opacity: 1,
                          scale: [0.6, 1.12, 1],
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.18, zIndex: 50 }}
                        onClick={() => openLightbox(image)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="112px"
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spin + counter-spin to keep images upright while ring rotates */}
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spinReverse {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
          .ring-spin {
            animation: spin 60s linear infinite;
          }
          .counter-spin {
            animation: spinReverse 60s linear infinite;
          }
        `}</style>
      </section>

      {/* Animated Masonry Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${dmSerif.className}`}>
              Company Highlights & Activities
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore a collection of moments that define our journey and expertise.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-primary/20 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      filter:
                        hoveredImage === index ? "brightness(1.1) saturate(1.2)" : "brightness(1) saturate(1)",
                      transition: "filter 0.3s ease-in-out",
                    }}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <p className="text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                style={{ objectFit: "contain", maxHeight: "85vh", width: "auto" }}
                className="rounded-lg shadow-xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <StickyButtons />
    </div>
  );
}