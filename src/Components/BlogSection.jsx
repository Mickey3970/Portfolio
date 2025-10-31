import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Coffee } from 'lucide-react';

const BlogSection = () => {
  // Sample blog posts with external URLs
  const blogPosts = [
    {
      id: 1,
      title: "Why I Switched from REST to GraphQL",
      excerpt: "After building several APIs with REST, I decided to dive into GraphQL. Here's what I learned about query efficiency and developer experience...",
      date: "2 days ago",
      readTime: "5 min read",
      category: "Backend",
      featured: true,
      url: "https://mickeydevblogs.com/graphql-switch"
    },
    {
      id: 2,
      title: "Building My First React Native App",
      excerpt: "From web development to mobile - the challenges, surprises, and lessons learned during my mobile development journey...",
      date: "1 week ago",
      readTime: "7 min read",
      category: "Mobile",
      url: "https://mickeydevblogs.com/react-native-journey"
    },
    {
      id: 3,
      title: "Database Design Mistakes I Made (And How to Avoid Them)",
      excerpt: "Three months into my first major project, I had to completely restructure my database. Here's what went wrong and what I learned...",
      date: "2 weeks ago",
      readTime: "4 min read",
      category: "Database",
      url: "https://mickeydevblogs.com/db-mistakes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-emerald-500" />
            <Coffee className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Developer Diaries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing my coding journey, lessons learned, and discoveries along the way.
            From debugging nightmares to breakthrough moments — documenting it all.
          </p>
        </div>

        {/* Featured Post */}
        <a
          href={blogPosts[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-12"
        >
          <div className="bg-gradient-to-r from-emerald-600/10 to-emerald-800/10 rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                FEATURED
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                {blogPosts[0].category}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {blogPosts[0].title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {blogPosts[0].excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{blogPosts[0].readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </a>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h4>

                <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to discuss these topics over coffee? ☕
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I love chatting about development challenges, new technologies, and sharing experiences.
              Let's connect and learn from each other!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mickeydevblogs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 transform hover:scale-105 inline-block text-center"
              >
                Read All Posts
              </a>
              <button className="border border-emerald-600 text-emerald-400 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-emerald-600 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 transform hover:scale-105">
                Schedule Coffee Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
