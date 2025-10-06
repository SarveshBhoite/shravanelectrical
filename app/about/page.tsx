"use client";
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Shield,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import framer-motion

function App() {
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    {
      year: 2024,
      event: "Expanded to 50+ countries with AI-powered electronics",
    },
    { year: 2023, event: "Launched Smart Home Division" },
    { year: 2022, event: "Achieved ISO 9001:2015 certification" },
    { year: 2021, event: "Opened state-of-the-art R&D facility" },
    { year: 2020, event: "Reached $100M in annual revenue" },
    { year: 2019, event: "Strategic partnership with major tech companies" },
    { year: 2018, event: "Expanded manufacturing capabilities" },
    { year: 2017, event: "Company founded with vision to innovate" },
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "	INFRASTRUCTURE",
      description:
        "Situated in a well-furnished office catering to all needs of office Management, along with the central Stores, supplying to all the sites, add to the overall performance.We sincerely hope that you will find our services useful and we shall be happy to associate Ourselves in your projects.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "	Customer Satisfaction",
      description:
        "At‘’Shravan Electrical Contractor ’’ constantly working to improve our Quality service to our customers in order to maintain and achieve high standard of quality work. The Management of SHRAVAN believes that customer satisfaction is an important key to the success of our business.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "	Quality Assurance",
      description:
        "SHRAVAN is committed to operate every aspect of Business to those Standards that offer higher possibility of quality of service to all clients. The Management is committed to the continual improvement of the Quality Management System by establishing and reviewing quality objectives for all the area of company. This is ensuring that the company operates effectively and efficiently meets the needs of customer.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "	Health &Safety Policy",
      description:
        "SHRAVAN provide a safe and healthy environment According to the Health and Safety Work Act. The company policies are: Make proper arrangements and protect the health, safety, and welfare of employees and others who may be affected by its activities. Meet its responsibilities as an employer to prevent accidents, injuries, and damages.",
    },
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With over 20 years in the electronics industry, Sarah leads our vision for innovation.",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Michael drives our technological advancement and product development strategies.",
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Operations Officer",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Emily ensures operational excellence across all our manufacturing facilities.",
    },
  ];

  const awards = [
    "Best Electronics Manufacturer 2024",
    "Innovation Excellence Award 2023",
    "Sustainability Leadership Award 2023",
    "Top Employer of the Year 2022",
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[550px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powering Innovation Since 2019
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              A fast-growing electronics company dedicated to delivering
              cutting-edge solutions in consumer electronics, smart home
              systems, and industrial automation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>
      <div className="min-h-screen ">
        {/* About Section */}
        <section id="about" className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  About Sharavan Electrical
                </h2>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  In the year 2009 Established as a proprietary firm and
                  successfully elevated since then. We have undergone
                  significant invasion and entered in the wide spread works of
                  electrical field and increase our Turn Over up to Rs. 101.35
                  crore in the FY 2024-25.
                </p>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  We are PWD registered CLASS ‘A’ electrical and Class IV Civil
                  contractor. Also, we are registered With the M.S.E.D.C.L,
                  M.S.E.T.C.L , PWD. The members of the Company’s senior
                  management team have an average experience of approximately 15
                  years in diverse areas of the energy market including
                  development, engineering, construction, finance, operations,
                  asset management, and energy trading and Contracting.
                </p>
              </div>
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{
                  rotateY: 15,
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
              >
                <img
                  src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Electronics manufacturing"
                  className="w-full h-full object-cover  rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Mission & Vision Section */}{" "}
        <section id="mission" className="py-20 bg-blue-80">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {" "}
              <div className="bg-blue-500 p-10 rounded-2xl text-black shadow-xl">
                {" "}
                <Target className="w-12 h-12 mb-6" />{" "}
                <h3 className="text-3xl font-bold mb-4">Objectives</h3>{" "}
                <p className="text-lg leading-relaxed opacity-90">
                  {" "}
                  To deliver innovative, high-quality electronic solutions that
                  empower individuals and businesses to achieve more, while
                  maintaining environmental responsibility and ethical business
                  practices..{" "}
                </p>{" "}
              </div>{" "}
              <div className="bg-blue-500 p-10 rounded-2xl text-black shadow-xl">
                {" "}
                <Eye className="w-12 h-12 mb-6" />{" "}
                <h3 className="text-3xl font-bold mb-4">AIM</h3>{" "}
                <p className="text-lg leading-relaxed opacity-90">
                  {" "}
                  Our aim is to provide high quality of Services to all our
                  clients and make continual improvement to our services and
                  people. Maintain customer satisfaction is prime factor in our
                  Success.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Core Values */}
            <CoreValuesSection values={values} />
          </div>
        </section>
        {/* CEO Message Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <motion.div
                className="md:col-span-1 cursor-pointer"
                style={{ perspective: 1000 }} // ✅ Add perspective for 3D flip
              >
                <motion.img
                  src="director1.png"
                  alt="CEO"
                  className="w-full rounded-2xl shadow-2xl"
                  initial={{ rotateY: 0 }}
                  whileHover={{
                    rotateY: 360, // 🔄 Full circular flip
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                />
              </motion.div>

              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-slate-900 mb-6">
                  Director
                </h1>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    As we navigate an era of unprecedented technological
                    advancement, ElectroTech remains committed to our founding
                    principles of innovation, quality, and customer
                    satisfaction.
                  </p>
                  <p>
                    The electronics industry is evolving rapidly, with emerging
                    technologies like AI, IoT, and renewable energy reshaping
                    our world. We're investing heavily in research and
                    development to ensure our products not only meet today's
                    needs but anticipate tomorrow's challenges.
                  </p>
                 
                  <div className="mt-6">
                    <p className="font-bold text-slate-900">
                      Mr.Balaji G. Kanthewad
                    </p>
                    <p className="text-slate-600">
                      {" "}
                      (Polytechnic Electrical Eng.) ( BE Computer Eng.) 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-12 items-center">
      {/* Text on Left */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Director
        </h1>
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
          <p>
            As we navigate an era of unprecedented technological
            advancement, ElectroTech remains committed to our founding
            principles of innovation, quality, and customer
            satisfaction.
          </p>
          <p>
            The electronics industry is evolving rapidly, with emerging
            technologies like AI, IoT, and renewable energy reshaping
            our world. We're investing heavily in research and
            development to ensure our products not only meet today's
            needs but anticipate tomorrow's challenges.
          </p>
          <div className="mt-6">
            <p className="font-bold text-slate-900">
             Mrs.Sharmila B. Kanthewad
            </p>
            <p className="text-slate-600">
              BE Computer Enginering
            </p>
          </div>
        </div>
      </div>

      {/* Image on Right */}
      <motion.div
        className="md:col-span-1 cursor-pointer"
        style={{ perspective: 1000 }} // Add perspective for 3D flip
      >
        <motion.img
          src="director2.png"
          alt="Director"
          className="w-full rounded-2xl shadow-2xl"
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: 360, // Full circular flip
            transition: { duration: 1, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </div>
  </div>
</section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Board of Directors
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group cursor-pointer"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  whileHover={{
                    rotateX: 10,
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-slate-600 font-medium mb-4">
                      {leader.position}
                    </p>
                    <p className="text-slate-700">{leader.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

// CoreValuesSection component moved outside App
import { useState } from "react";

type CoreValue = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface CoreValuesSectionProps {
  values: CoreValue[];
}

const CoreValuesSection = ({ values }: CoreValuesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
        Our Core Values
      </h3>
      <div className="grid md:grid-cols-4 gap-8 relative">
        {values.map((value, index) => {
          const isActive = activeIndex === index;
          return (
            <AnimatePresence key={index}>
              {(isActive || activeIndex === null) && (
                <motion.div
                  className={`text-center p-6 rounded-xl shadow-lg cursor-pointer bg-white flex flex-col items-center justify-start`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.2 : 1,
                    zIndex: isActive ? 20 : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 text-slate-800">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h4>
                  {isActive && (
                    <motion.p
                      className="text-slate-600 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.description}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};
