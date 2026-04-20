import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post, index }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="group relative cursor-pointer"
    >
      <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:border-emerald-400/40 hover:glow-effect h-full flex flex-col">
        {/* Cover image */}
        {post.coverImage && (
          <div className="relative h-48 sm:h-52 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        )}

        {/* Accent bar (only if no cover image) */}
        {!post.coverImage && (
          <div className="h-1 w-full bg-gradient-to-r from-emerald-400/80 via-emerald-400/40 to-transparent" />
        )}

        <div className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Date */}
          <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <time>{post.date}</time>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-white/[0.06] rounded-md text-emerald-300/80 border border-emerald-400/15"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
            Read more
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
