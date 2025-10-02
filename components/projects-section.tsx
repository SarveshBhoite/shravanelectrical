"use client"

import { useEffect, useMemo, useRef, useState, useLayoutEffect, CSSProperties } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, Zap } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import Image from "next/image"

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, options)

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView] as const
}

function useTilt(max = 12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rx = (0.5 - py) * max * 2
      const ry = (px - 0.5) * max * 2
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
      el.style.transition = "transform 50ms linear"
    }
    const onLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)"
      el.style.transition = "transform 300ms ease"
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [max])
  return ref
}

// Highlight important words inside descriptions
const HIGHLIGHT_WORDS = [
  "power", "safety", "efficiency", "renewable", "solar",
  "industrial", "commercial", "automation", "energy",
  "substation", "lighting", "earthing", "transformer",
  "HV", "LV", "metering", "maintenance", "reliability"
]
function highlightText(text: string) {
  if (!text) return text
  const re = new RegExp(`(${HIGHLIGHT_WORDS.join("|")})`, "gi")
  const parts = text.split(re)
  return parts.map((part, i) => {
    const isMatch = HIGHLIGHT_WORDS.some(w => w.toLowerCase() === part.toLowerCase())
    if (!isMatch) return <span key={i}>{part}</span>
    return (
      <mark
        key={i}
        className="px-1 rounded-sm bg-gradient-to-r from-yellow-200/70 via-cyan-200/60 to-transparent text-inherit underline decoration-blue-400/40 underline-offset-2"
        style={{ boxShadow: "inset 0 -2px 0 rgba(59,130,246,0.15)" }}
      >
        {part}
      </mark>
    )
  })
}

export function ProjectsSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 })
  const [active, setActive] = useState(0)

  // Track which list item is in view
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      { threshold: 0.6, rootMargin: "-20% 0px -30% 0px" }
    )
    itemsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Spotlight cursor
  const [spot, setSpot] = useState({ x: -9999, y: -9999 })
  const spotlightStyle = useMemo(
    () => ({ "--x": `${spot.x}px`, "--y": `${spot.y}px` }) as CSSProperties,
    [spot]
  )

  // Sticky preview height -> dynamic spacer to prevent cutoff
  const previewRef = useRef<HTMLDivElement>(null)
  const [previewHeight, setPreviewHeight] = useState(0)
  useLayoutEffect(() => {
    const el = previewRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const h = entries[0].contentRect.height
      setPreviewHeight(h)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const tiltRef = useTilt(10)

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      className="relative py-24 overflow-visible bg-gradient-to-br from-blue-50 via-white to-yellow-50"
      style={spotlightStyle}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-300 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-yellow-300 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="[background:radial-gradient(rgba(59,130,246,0.14)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent_5%,black_20%,black_80%,transparent_95%)] w-full h-full" />
        <div className="absolute inset-0 [mask-image:radial-gradient(200px_200px_at_var(--x)_var(--y),#000_10%,transparent_70%)] bg-gradient-to-r from-blue-200/35 via-cyan-200/25 to-yellow-200/35" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-blue-200 text-blue-700 backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Shravan Electricals</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight">
            Projects that
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Power Possibilities</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            A scrollable showcase of <span className="font-semibold text-blue-800">reliable</span>, <span className="font-semibold text-cyan-700">efficient</span>, and <span className="font-semibold text-yellow-700">future-ready</span> electrical work.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline list */}
          <div
            className="lg:col-span-6"
            // Spacer equals preview height + some breathing room, so bottom projects aren't hidden
            style={{ paddingBottom: previewHeight ? previewHeight + 32 : 0 }}
          >
            <ul className="relative">
              {/* Vertical gradient line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300/60 via-cyan-300/60 to-yellow-300/60" />
              {mockProjects.map((project, index) => {
                const isActive = index === active
                return (
                  <li key={project.id} className="relative pl-12 pb-8 last:pb-0 scroll-mt-28">
                    {/* Dot */}
                    <span
                      className={`absolute left-0 top-2 w-8 h-8 rounded-full grid place-items-center
                      ${isActive ? "bg-white shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" : "bg-white/80 border border-blue-100"}`}
                    >
                      <span
                        className={`block w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-yellow-400
                        ${isActive ? "ring-4 ring-blue-200/40" : "opacity-70"}`}
                      />
                      <span className={`pointer-events-none absolute inset-0 rounded-full ${isActive ? "animate-slow-spin bg-[conic-gradient(from_0deg,transparent_0_40%,rgba(59,130,246,0.35)_40%_60%,transparent_60%_100%)]" : ""}`} />
                    </span>

                    {/* Card */}
                    <div
                      ref={(el) => (itemsRef.current[index] = el)}
                      data-index={index}
                      onClick={() => setActive(index)}
                      className={`group cursor-pointer rounded-xl border backdrop-blur-sm transition-all
                        ${isActive ? "border-blue-300 bg-white/80 shadow-xl shadow-blue-200/40" : "border-blue-100/60 bg-white/60 hover:bg-white/70 hover:shadow-md"}`}
                    >
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold
                            ${isActive ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" : "bg-blue-50 text-blue-700"}`}>
                            {project.category}
                          </span>
                          {isActive && (
                            <span className="text-[11px] font-medium text-blue-700/80">In view</span>
                          )}
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold text-blue-900 mb-2 transition-colors ${isActive ? "" : "group-hover:text-blue-800"}`}>
                          {project.name}
                        </h3>
                        <p className="text-gray-700/90 mb-4">
                          {highlightText(project.description)}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">{project.completedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`h-0.5 rounded-b-xl transition-all ${isActive ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-400" : "bg-gradient-to-r from-blue-100 via-cyan-100 to-yellow-100"}`} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Sticky preview (desktop only) */}
          <aside className="lg:col-span-6 lg:sticky top-24 self-start">
            <div className="relative" ref={previewRef}>
              {/* Glow frame */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-yellow-400/50 blur opacity-50" />
              <Card className="relative rounded-2xl overflow-hidden border-2 border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl">
                <div ref={tiltRef} className="relative" style={{ transformStyle: "preserve-3d" } as CSSProperties}>
                  <div className="relative h-[280px] md:h-[360px] w-full">
                    <Image
                      src={mockProjects[active].image || "/blog2.jpeg?height=600&width=900"}
                      alt={mockProjects[active].name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40" />
                  </div>

                  <CardContent className="p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        {mockProjects[active].category}
                      </span>
                      <span className="text-[11px] font-medium text-gray-600">Featured preview</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
                      {mockProjects[active].name}
                    </h3>
                    <p className="text-gray-700 mb-5">{highlightText(mockProjects[active].description)}</p>
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="text-sm">{mockProjects[active].completedDate}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="text-sm">{mockProjects[active].location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold group">
                        View Project Details
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                      <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                        All Projects
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes slow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-slow-spin { animation: slow-spin 8s linear infinite; }
      `}</style>
    </section>
  )
}














// "use client"

// import { useEffect, useMemo, useRef, useState, CSSProperties } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Calendar, MapPin, ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react"
// import { mockProjects } from "@/lib/mock-data"
// import Image from "next/image"

// // Simple "fade-in" on enter view
// function useInView(options?: IntersectionObserverInit) {
//   const ref = useRef<HTMLDivElement>(null)
//   const [isInView, setIsInView] = useState(false)
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsInView(true)
//         observer.unobserve(entry.target)
//       }
//     }, options)
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [options])
//   return [ref, isInView] as const
// }

// // Highlight important words inside descriptions
// const HIGHLIGHT_WORDS = [
//   "power", "safety", "efficiency", "renewable", "solar",
//   "industrial", "commercial", "automation", "energy",
//   "substation", "lighting", "earthing", "transformer",
//   "HV", "LV", "metering", "maintenance", "reliability"
// ]
// function highlightText(text: string) {
//   if (!text) return text
//   const re = new RegExp(`(${HIGHLIGHT_WORDS.join("|")})`, "gi")
//   const parts = text.split(re)
//   return parts.map((part, i) => {
//     const isMatch = HIGHLIGHT_WORDS.some(w => w.toLowerCase() === part.toLowerCase())
//     if (!isMatch) return <span key={i}>{part}</span>
//     return (
//       <mark
//         key={i}
//         className="px-1 rounded-sm bg-gradient-to-r from-yellow-200/70 via-cyan-200/60 to-transparent text-inherit underline decoration-blue-400/40 underline-offset-2"
//         style={{ boxShadow: "inset 0 -2px 0 rgba(59,130,246,0.15)" }}
//       >
//         {part}
//       </mark>
//     )
//   })
// }

// export function ProjectsSection() {
//   const [sectionRef, isInView] = useInView({ threshold: 0.15 })
//   const scrollerRef = useRef<HTMLDivElement>(null)
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([])
//   const [active, setActive] = useState(0)

//   // Determine the active card by which is closest to the center of the scroller
//   useEffect(() => {
//     const el = scrollerRef.current
//     if (!el) return

//     const updateActive = () => {
//       const center = el.scrollLeft + el.clientWidth / 2
//       let bestIdx = 0
//       let bestDist = Infinity
//       cardsRef.current.forEach((card, i) => {
//         if (!card) return
//         const mid = card.offsetLeft + card.offsetWidth / 2
//         const dist = Math.abs(center - mid)
//         if (dist < bestDist) {
//           bestDist = dist
//           bestIdx = i
//         }
//       })
//       setActive(bestIdx)
//     }

//     updateActive()
//     const onScroll = () => updateActive()
//     const onResize = () => updateActive()
//     el.addEventListener("scroll", onScroll, { passive: true })
//     window.addEventListener("resize", onResize)
//     return () => {
//       el.removeEventListener("scroll", onScroll)
//       window.removeEventListener("resize", onResize)
//     }
//   }, [])

//   // Spotlight cursor for the whole section
//   const [spot, setSpot] = useState({ x: -9999, y: -9999 })
//   const spotlightStyle = useMemo(
//     () => ({ "--x": `${spot.x}px`, "--y": `${spot.y}px` }) as CSSProperties,
//     [spot]
//   )

//   const scrollToIndex = (i: number) => {
//     const target = cardsRef.current[i]
//     if (target) target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
//   }

//   const next = () => scrollToIndex(Math.min(active + 1, mockProjects.length - 1))
//   const prev = () => scrollToIndex(Math.max(active - 1, 0))

//   return (
//     <section
//       ref={sectionRef}
//       onMouseMove={(e) => {
//         const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
//         setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
//       }}
//       className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50"
//       style={spotlightStyle}
//     >
//       {/* Background: blobs + grid + spotlight */}
//       <div className="pointer-events-none absolute inset-0 opacity-30">
//         <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-300 blur-3xl animate-float" />
//         <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-yellow-300 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
//       </div>
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="[background:radial-gradient(rgba(59,130,246,0.14)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent_5%,black_20%,black_80%,transparent_95%)] w-full h-full" />
//         <div className="absolute inset-0 [mask-image:radial-gradient(220px_220px_at_var(--x)_var(--y),#000_12%,transparent_70%)] bg-gradient-to-r from-blue-200/35 via-cyan-200/25 to-yellow-200/35" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         {/* Header */}
//         <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-blue-200 text-blue-700 backdrop-blur-sm mb-4">
//             <Zap className="w-4 h-4" />
//             <span className="text-sm font-medium">Shravan Electricals</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight">
//             Case Studies that
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Spark Results</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-3">
//             Swipe through our most impactful electrical projects — <span className="font-semibold text-blue-800">reliable</span>, <span className="font-semibold text-cyan-700">efficient</span>, and <span className="font-semibold text-yellow-700">future‑ready</span>.
//           </p>
//         </div>

//         {/* Controls */}
//         <div className="relative">
//           {/* Edge fades */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-white to-transparent" />
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-white to-transparent" />

//           {/* Arrow buttons */}
//           <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-0 right-0 px-1">
//             <Button
//               aria-label="Previous project"
//               variant="outline"
//               size="icon"
//               onClick={prev}
//               className="rounded-full bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-100 hover:border-blue-300 shadow-sm"
//             >
//               <ChevronLeft className="h-5 w-5 text-blue-600" />
//             </Button>
//             <Button
//               aria-label="Next project"
//               variant="outline"
//               size="icon"
//               onClick={next}
//               className="rounded-full bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-100 hover:border-blue-300 shadow-sm"
//             >
//               <ChevronRight className="h-5 w-5 text-blue-600" />
//             </Button>
//           </div>

//           {/* Horizontal snap rail */}
//           <div
//             ref={scrollerRef}
//             className="relative -mx-4 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
//           >
//             {mockProjects.map((project, index) => {
//               const isActive = index === active
//               return (
//                 <article
//                   key={project.id}
//                   ref={(el) => (cardsRef.current[index] = el)}
//                   className={`group relative snap-center shrink-0
//                   w-[85%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[38%] 2xl:w-[32%]`}
//                 >
//                   {/* Glow ring when centered */}
//                   <div
//                     className={`absolute -inset-0.5 rounded-2xl transition-all duration-500
//                     ${isActive ? "opacity-70 blur bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-yellow-400/50" : "opacity-0"}`}
//                     aria-hidden
//                   />
//                   <Card
//                     className={`relative rounded-2xl overflow-hidden border-2 backdrop-blur-xl
//                     transition-all duration-500
//                     ${isActive ? "border-white/70 bg-white/85 shadow-2xl shadow-blue-200/50" : "border-white/50 bg-white/70 shadow-lg"}`}
//                     onMouseMove={(e) => {
//                       // subtle parallax for image
//                       const card = e.currentTarget
//                       const rect = card.getBoundingClientRect()
//                       const px = (e.clientX - rect.left) / rect.width - 0.5
//                       const py = (e.clientY - rect.top) / rect.height - 0.5
//                       const tx = Math.max(Math.min(px * 10, 8), -8)
//                       const ty = Math.max(Math.min(py * 10, 8), -8)
//                       card.style.setProperty("--tx", `${tx}px`)
//                       card.style.setProperty("--ty", `${ty}px`)
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.setProperty("--tx", "0px")
//                       e.currentTarget.style.setProperty("--ty", "0px")
//                     }}
//                   >
//                     <div className="relative h-[220px] md:h-[280px]">
//                       <Image
//                         src={project.image || "/blog2.jpeg?height=600&width=900"}
//                         alt={project.name}
//                         fill
//                         className="object-cover transition-transform duration-300 will-change-transform"
//                         style={{ transform: "translate3d(var(--tx,0), var(--ty,0), 0)" }}
//                         priority={index < 2}
//                       />
//                       {/* Gloss + bottom gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none" />
//                       {/* Active shimmer */}
//                       {isActive && (
//                         <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-400" />
//                       )}
//                     </div>

//                     <CardContent className="p-5">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold
//                           ${isActive ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" : "bg-blue-50 text-blue-700"}`}>
//                           {project.category}
//                         </span>
//                         {isActive && <span className="text-[11px] font-medium text-blue-700/80">Featured</span>}
//                       </div>

//                       <h3 className="text-2xl font-extrabold text-blue-900 mb-2 leading-snug">
//                         {project.name}
//                       </h3>

//                       <p className="text-gray-700/90 mb-4 line-clamp-3">
//                         {highlightText(project.description)}
//                       </p>

//                       <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-5">
//                         <div className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-2 text-blue-600" />
//                           <span className="text-sm">{project.completedDate}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="w-4 h-4 mr-2 text-blue-600" />
//                           <span className="text-sm">{project.location}</span>
//                         </div>
//                       </div>

//                       <div className="flex gap-3">
//                         <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold group">
//                           View Project
//                           <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
//                         </Button>
//                         <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
//                           Details
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </article>
//               )
//             })}
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {mockProjects.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => scrollToIndex(i)}
//                 aria-label={`Go to project ${i + 1}`}
//                 className={`h-2.5 w-2.5 rounded-full transition-all
//                   ${i === active ? "bg-blue-600 scale-125 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" : "bg-blue-200 hover:bg-blue-300"}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .hide-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//         .hide-scrollbar::-webkit-scrollbar { display: none; } /* Chrome/Safari */
//       `}</style>
//     </section>
//   )
// }