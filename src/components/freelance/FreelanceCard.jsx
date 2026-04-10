import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const FreelanceCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const hasGithubUrl =
    typeof project.githubUrl === "string" &&
    project.githubUrl.trim() !== "" &&
    project.githubUrl !== "#";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
      >
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:border-emerald-400/50 hover:glow-effect">
          {/* Project Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  project.status === "completed"
                    ? "bg-black/70 text-emerald-200 border border-emerald-400/40"
                    : "bg-black/60 text-yellow-200 border border-yellow-400/40"
                }`}
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>
            </div>

            {/* Links Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {hasGithubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-emerald-400 text-black hover:scale-110 transition-transform"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="p-3 rounded-full bg-emerald-400 text-black hover:scale-110 transition-transform"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-emerald-400 text-sm font-medium mb-2">
              {project.client}
            </p>

            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-white/10 rounded-md text-emerald-300 border border-emerald-400/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Popup / Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-md glass-card rounded-2xl p-6 border border-white/10"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-lg bg-white/5 hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white/80" />
              </button>

              <h4 className="text-white text-lg font-semibold mb-2">
                Demo not available
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                This is a private application built for a client, so a public demo link isn’t available.
                If you’d like, I can walk you through the architecture and key features.
              </p>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15"
                >
                  Close
                </button>
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-emerald-400 text-black font-semibold hover:opacity-90"
                >
                Contact me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FreelanceCard;
