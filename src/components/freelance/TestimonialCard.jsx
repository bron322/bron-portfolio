import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-xl p-6 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
        &quot;{testimonial.content}&quot;
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
        />
        <div>
          <h4 className="font-display font-semibold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
