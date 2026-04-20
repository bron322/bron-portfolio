import SectionHeader from "../freelance/SectionHeader";
import BlogCard from "./BlogCard";
import blogPosts from "../../data/blogPosts";

const LearningBlogs = () => {
  return (
    <section id="blog" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Learning Blog"
          title="Learning Blogs"
          description="Personal technical write-ups documenting what I learn by building projects from scratch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningBlogs;
