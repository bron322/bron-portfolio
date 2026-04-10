import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, Users } from "lucide-react";

import SectionHeader from "./SectionHeader";
import FreelanceCard from "./FreelanceCard";
import TestimonialCard from "./TestimonialCard";
import ravoImg from "../../assets/ravo.jpeg";
import scoutImg from "../../assets/scout.jpeg";
import distributorImg from "../../assets/distributor.png";
import cartImg from "../../assets/cartdemo.png";

const freelanceProjects = [
  {
    id: 1,
    title: "Scout Mobile Application",
    client: "Private Client(Independent Founder)",
    description:
    "Developed an Android mobile app that helps users discover nearby restaurants based on their preferences. Built the backend integration to fetch place details and images, implemented search/filter flows, and optimized the data pipeline for fast, smooth browsing.",
    image: scoutImg,
    tags: ["Flutter", "Dart", "Google Places API", "REST APIs"],
    liveUrl: "#",
    githubUrl: "#",
    status: "completed",
  },
  {
    id: 2,
    title: "RAVO Business",
    client: "Private Client(Independent Founder)",
    description:
    "Built a MERN-based service provider comparison web platform for SMBs, including authentication, provider onboarding, and listing management. Designed MongoDB schemas and REST APIs for CRUD/search, integrated an admin workflow to manage content, and deployed the system for real-world usage.",  
    image: ravoImg,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    status: "completed",
  },
  {
    id: 3,
    title: "Distributor AI Agent",
    client: "Independent Project",
    description:
      "Built an AI agent for global footwear distributor discovery, enabling lead identification, scoring, and fit analysis across international markets. Designed workflows for structured lead evaluation, outreach generation, and system performance monitoring, demonstrating how AI can support business development and sales research.",
    image: distributorImg,
    tags: ["Next.js", "TypeScript", "AI Agents", "LLM"],
    liveUrl: "#",
    githubUrl: "https://github.com/bron322/GlobalDistributorAgent",
    status: "completed",
  },
  {
    id: 4,
    title: "Cart Rescue AI Agent",
    client: "Independent Project",
    description:
      "Built an AI agent for abandoned cart recovery that detects cart context and recommends targeted customer follow-up actions. Implemented scenario-based handling for standard cart reminders, low-stock urgency prompts, and discount offers for high-value new customers to improve conversion and recover lost revenue.",
    image: cartImg,
    tags: ["React", "Python", "FastAPI", "AI Agents"],
    liveUrl: "#",
    githubUrl: "https://github.com/bron322/CartRescueAIAgent",
    status: "completed",
  },
];

const testimonials = [
  // ... keep your testimonials
];

const stats = [
  { icon: Briefcase, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "12", label: "Happy Clients" },
  { icon: Clock, value: "2+", label: "Years Experience" },
];

const FreelanceSection = () => {
  return (
    <section id="freelance" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <SectionHeader
          subtitle="Freelance Portfolio"
          title="Freelance Work"
          description="Selected client projects that showcase my expertise in building scalable, user-centric applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {freelanceProjects.map((project, index) => (
            <FreelanceCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-center mb-10"
          >
            What <span className="text-gradient">Clients</span> Say
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="mailto:lebron@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:gap-4 hover:shadow-lg hover:shadow-primary/25"
          >
            Let&apos;s Work Together
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FreelanceSection;
