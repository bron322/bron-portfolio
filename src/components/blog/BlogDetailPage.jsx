import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import blogPosts from "../../data/blogPosts";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Lebron Lim`;
    }
    return () => {
      document.title = "Lebron Lim | Portfolio";
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">
            Post not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-emerald-400 hover:underline"
          >
            ← Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-primary/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
          {post.repoUrl && (
            <a
              href={post.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-emerald-400 transition-colors"
            >
              View repo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-28">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-white/40 text-sm mb-5">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-white/[0.06] rounded-full text-emerald-300/80 border border-emerald-400/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14" />

        {/* Sections */}
        <div className="blog-prose">
          {post.content.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className="mb-12"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                {section.heading}
              </h2>

              {/* Inline section image */}
              {section.image && (
                <div className="my-6 rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    className="w-full h-auto object-cover"
                  />
                  {section.imageAlt && (
                    <p className="text-center text-white/30 text-xs py-2 bg-white/[0.02]">
                      {section.imageAlt}
                    </p>
                  )}
                </div>
              )}

              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-white/70 leading-[1.85] mb-4 last:mb-0"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-white/90 font-semibold">$1</strong>'
                      )
                      .replace(
                        /`(.+?)`/g,
                        '<code class="bg-white/[0.06] text-emerald-300/80 px-1.5 py-0.5 rounded text-[0.85em] font-mono">$1</code>'
                      )
                      .replace(
                        /^• /,
                        '<span class="text-emerald-400/60 mr-1">•</span> '
                      ),
                  }}
                />
              ))}
            </motion.section>
          ))}
        </div>

        {/* Footer */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 mb-10" />

        <div className="flex items-center justify-between text-sm">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
          {post.repoUrl && (
            <a
              href={post.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-emerald-400 transition-colors"
            >
              Source on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
