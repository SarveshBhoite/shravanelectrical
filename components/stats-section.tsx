"use client"

import { useEffect, useState, useRef } from "react"
import { mockStats } from "@/lib/mock-data" 
import { Award, TrendingUp, Users, MapPin, Zap, ShieldCheck, Clock } from "lucide-react"

// --- Helper Hooks (useInView, Counter) ---
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
}

interface CounterProps {
  end: number
  duration?: number
  isInView: boolean
  suffix?: string
  className?: string
}

function Counter({ end, duration = 2000, suffix = "", isInView, className }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return;
    let startTime: number, animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span className={className}>{count}{suffix}</span>
}

export function StatsSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });

  // --- HORIZONTAL ELLIPSE CONFIGURATION ---
  const radiusX = 360; // Horizontal radius (longer)
  const radiusY = 280; // Vertical radius (shorter)
  const angleStep = 360 / 7;
  const offFactor = 3.8; // how far circles start off-screen along the same radial

  const stats = [
    { value: mockStats.experience, label: "Experience", description: "Decades of expertise", icon: Award, suffix: '+' },
    { value: mockStats.projects, label: "Projects Done", description: "Across various sectors", icon: TrendingUp, suffix: '+' },
    { value: mockStats.engineers, label: "Expert Engineers", description: "Certified professionals", icon: Users, suffix: '+' },
    { value: mockStats.branches, label: "Service Branches", description: "For national reach", icon: MapPin },
    { value: mockStats.satisfaction, label: "Satisfaction", description: "Client satisfaction rate", icon: ShieldCheck, suffix: '%' },
    { value: mockStats.uptime, label: "Uptime Guarantee", description: "Reliable service delivery", icon: Clock, suffix: '%' },
    { value: mockStats.response, label: "Emergency Response", description: "Avg response efficiency", icon: Zap, suffix: '%' },
  ].map((stat, index) => {
    const angle = index * angleStep - 90; // Start from top
    const angleRad = angle * (Math.PI / 180);

    const x = radiusX * Math.cos(angleRad);
    const y = radiusY * Math.sin(angleRad);

    // Final and initial transforms (initial is further out along same radial)
    const finalTransform = `translate(${x}px, ${y}px)`;
    const initialTransform = `translate(${x * offFactor}px, ${y * offFactor}px)`;

    return {
      ...stat,
      finalTransform,
      initialTransform,
      lineCoords: {
        x2: 50 + 48 * Math.cos(angleRad), // 48% is the horizontal SVG radius
        y2: 50 + 42 * Math.sin(angleRad), // 42% is the vertical SVG radius
      }
    };
  });

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-slate-900 text-white relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[url('/solar.jpeg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full">
          {/* DESKTOP: Horizontal Elliptical Layout */}
          <div className="hidden lg:flex items-center justify-center relative h-[680px]">
            {/* Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              {stats.map((stat, index) => (
                <line 
                  key={index} 
                  x1="50%" 
                  y1="50%" 
                  x2={`${stat.lineCoords.x2}%`} 
                  y2={`${stat.lineCoords.y2}%`} 
                  className={`stroke-current text-blue-500 stroke-2 transition-all duration-1000 ${isInView ? 'animate-line-draw' : ''}`} 
                  style={{animationDelay: `${index * 0.15}s`}} 
                />
              ))}
            </svg>

            {/* Heading */}
            <div
              className={`text-center transition-all duration-1000 mx-auto max-w-md ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '250ms' }}
            >
              <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/10 border border-white/15 text-white/80 mb-3">
                Highlights
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent drop-shadow-sm">
                Our Achievements
              </h2>
              <p className="text-base md:text-lg text-slate-300">
                Numbers that define our journey of excellence.
              </p>
              <div className="h-1.5 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80"></div>
            </div>

            {/* Stat Circles - fly-in from edges, same design + gradient bg */}
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: isInView ? stat.finalTransform : stat.initialTransform,
                    opacity: isInView ? 1 : 0,
                    transition: "transform 1100ms cubic-bezier(.22,.61,.36,1), opacity 700ms ease",
                    transitionDelay: `${index * 120}ms`,
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="w-47 h-47 rounded-full bg-gradient-to-br from-primary/20 via-background to-accent/20 backdrop-blur-sm border border-blue-500/20 shadow-2xl shadow-blue-900/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-600/60 flex flex-col items-center justify-center text-center p-2">
                    <div className="w-10 h-10 mb-1 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                      <IconComponent className="h-5 w-5 text-blue-400" />
                    </div>
                    <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} className="text-3xl text-black font-bold" />
                    <h3 className="text-sm font-semibold text-blue-400 mt-1">{stat.label}</h3>
                    <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-medium text-white bg-slate-900/80 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET: Grid Layout (same design, gradient circle bg) */}
          <div className="block lg:hidden">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/10 border border-white/15 text-white/80 mb-3">
                Highlights
              </div>
              <h2 className="text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                Our Achievements
              </h2>
              <p className="text-lg text-slate-300">Numbers that define our journey.</p>
              <div className="h-1.5 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group rounded-full bg-gradient-to-br from-primary/20 via-background to-accent/20 backdrop-blur-sm border border-blue-500/20 p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-600/60 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-10 h-10 mb-2 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600 mx-auto">
                      <IconComponent className="h-5 w-5 text-blue-400" />
                    </div>
                    <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} className="text-3xl text-black font-bold" />
                    <h3 className="text-sm font-semibold text-blue-400 mt-1">{stat.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}















// "use client"

// import { useEffect, useState, useRef } from "react"
// // Assume mock-data is updated with more stats
// import { mockStats } from "@/lib/mock-data" 
// import { Award, TrendingUp, Users, MapPin, Zap, ShieldCheck, Clock } from "lucide-react"

// // --- Helper Hooks (useInView, Counter) ---
// function useInView(options?: IntersectionObserverInit) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsInView(true);
//         observer.unobserve(entry.target);
//       }
//     }, options);

//     const currentRef = ref.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [options]);

//   return [ref, isInView] as const;
// }

// interface CounterProps {
//   end: number
//   duration?: number
//   isInView: boolean
//   suffix?: string
//   className?: string
// }

// function Counter({ end, duration = 2000, suffix = "", isInView, className }: CounterProps) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (!isInView) return;
//     let startTime: number, animationFrame: number;
//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / duration, 1);
//       setCount(Math.floor(progress * end));
//       if (progress < 1) animationFrame = requestAnimationFrame(animate);
//     };
//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [end, duration, isInView]);

//   return <span className={className}>{count}{suffix}</span>
// }


// export function StatsSection() {
//   const [sectionRef, isInView] = useInView({ threshold: 0.2 });

//   // --- HORIZONTAL ELLIPSE CONFIGURATION ---
//   const radiusX = 380; // Horizontal radius (longer)
//   const radiusY = 300; // Vertical radius (shorter)
//   const angleStep = 360 / 7;

//   // Mock data structure (Assuming mockStats is available)
//   const mockStats = { experience: 25, projects: 1200, engineers: 85, branches: 15, satisfaction: 98, uptime: 99.9, response: 15 };

//   const stats = [
//     { value: mockStats.experience, label: "Experience", description: "Decades of expertise in industrial and commercial electrical solutions.", icon: Award },
//     { value: mockStats.projects, label: "Projects Done", description: "Successfully delivered projects across various sectors including manufacturing and data centers.", icon: TrendingUp },
//     { value: mockStats.engineers, label: "Expert Engineers", description: "Team of certified, highly-skilled electrical professionals.", icon: Users },
//     { value: mockStats.branches, label: "Service Branches", description: "Strategically located branches ensuring national reach and fast service.", icon: MapPin },
//     { value: mockStats.satisfaction, label: "Satisfaction", description: "Our commitment to quality results in a high client satisfaction rate.", icon: ShieldCheck, suffix: '%' },
//     { value: mockStats.uptime, label: "Uptime Guarantee", description: "We ensure reliable power and minimal operational disruption.", icon: Clock, suffix: '%' },
//     { value: mockStats.response, label: "Emergency Response", description: "Average rapid response time for urgent electrical issues.", icon: Zap },
//   ].map((stat, index) => {
//     const angle = index * angleStep - 90; // Start from top
//     const angleRad = angle * (Math.PI / 180);

//     const x = radiusX * Math.cos(angleRad);
//     const y = radiusY * Math.sin(angleRad);
//     
//     return {
//       ...stat,
//       style: {
//         transform: `translate(${x}px, ${y}px)`
//       },
//       // SVG line coordinates adjusted for the horizontal ellipse
//       lineCoords: {
//         x2: 50 + 48 * Math.cos(angleRad), // 48% is the horizontal SVG radius
//         y2: 50 + 42 * Math.sin(angleRad), // 42% is the vertical SVG radius
//       }
//     };
//   });

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-24 bg-slate-900 text-white relative overflow-hidden min-h-screen flex items-center"
//     >
//       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
//       
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="w-full">
//           {/* DESKTOP: Horizontal Elliptical Layout */}
//           <div className="hidden lg:flex items-center justify-center relative h-[680px]"> 
//             <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
//               {stats.map((stat, index) => (
//                 <line 
//                   key={index} 
//                   x1="50%" 
//                   y1="50%" 
//                   x2={`${stat.lineCoords.x2}%`} 
//                   y2={`${stat.lineCoords.y2}%`} 
//                   className={`stroke-current text-blue-500 stroke-2 transition-all duration-1000 ${isInView ? 'animate-line-draw' : ''}`} 
//                   style={{animationDelay: `${index * 0.15}s`}} 
//                 />
//               ))}
//             </svg>

//             <div className={`text-center transition-opacity duration-1000 mx-auto max-w-md ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Achievements</h2>
//               <p className="text-lg text-slate-400">Numbers that define our journey of excellence.</p>
//             </div>

//             {/* ORBIT CONTAINER: This container rotates all its children */}
//             <div className={`absolute inset-0 transition-opacity duration-1000 ${isInView ? 'opacity-100 animate-orbit-spin' : 'opacity-0'}`}>
//                 
//                 {/* Stat Circles - Positioned on a horizontal ellipse */}
//                 {stats.map((stat, index) => {
//                   const IconComponent = stat.icon;
//                   return (
//                     <div
//                       key={index}
//                       className={`group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} 
//                       style={{ ...stat.style, animationDelay: `${index * 0.15}s` }}
//                     >
//                       <div className="w-50 h-50 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 shadow-2xl shadow-blue-900/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-600/60 flex flex-col items-center justify-center text-center p-2 relative">
//                             
//                             {/* CRITICAL FIX: REVERSE SPIN CONTAINER now holds ALL inner content, including the tooltip. 
//                                 It counter-rotates the orbit to keep text and tooltips upright and correctly positioned relative to the circle. */}
//                             <div className="[animation:orbit-spin_60s_linear_infinite_reverse] flex flex-col items-center justify-center"> 
//                                 <div className="w-10 h-10 mb-1 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600"><IconComponent className="h-5 w-5 text-blue-400" /></div>
//                                 <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} className="text-3xl font-bold" />
//                                 <h3 className="text-sm font-semibold text-slate-300 mt-1">{stat.label}</h3>

//                                 {/* TOOLTIP MOVED INSIDE REVERSE-SPIN DIV */}
//                                 <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-medium text-white bg-slate-900/80 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
//                                     {stat.description}
//                                 </div>
//                             </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div> {/* End of ORBIT CONTAINER */}
//           </div>

//           {/* MOBILE & TABLET: Grid Layout (remains the same) */}
//           <div className="block lg:hidden">
//              <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
//               <p className="text-lg text-slate-400">Numbers that define our journey.</p>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//               {stats.map((stat, index) => {
//                 const IconComponent = stat.icon;
//                 return (
//                   <div key={index} className={`group rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-600/60 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
//                      <div className="w-10 h-10 mb-2 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600 mx-auto"><IconComponent className="h-5 w-5 text-blue-400" /></div>
//                     <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} className="text-3xl font-bold" />
//                     <h3 className="text-sm font-semibold text-slate-300 mt-1">{stat.label}</h3>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
