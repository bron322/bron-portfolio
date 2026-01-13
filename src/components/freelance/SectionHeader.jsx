import { motion } from "framer-motion";

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-emerald-400 font-medium text-sm uppercase tracking-widest mb-3">
        {subtitle}
      </p>

      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        <span className="text-white">{String(title).split(".")[0]}</span>
        <span className="text-emerald-400">.</span>
      </h2>

      {description ? (
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeader;
