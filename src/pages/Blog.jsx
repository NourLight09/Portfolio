import { Search, User, Calendar, MessageSquare, ArrowUpRight, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ALL_POSTS } from '../data/blogData';

// Catégories harmonisées avec blogData.js
const categories = [
  "Tout",
  "Productivité",
  "Outils",
  "Tendances & IA"
]

const tags = [
  "React", "Tailwind", "Veille", "IA", "Productivité", "Frontend", "Career"
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  // Logique de filtrage
  const filteredPosts = selectedCategory === "Tout" 
    ? ALL_POSTS 
    : ALL_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
      
      {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & Actualités</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Nourath</span>
            <span>•</span>
            <span className="text-[#7cf7ad]">Blog</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Blog Posts List (Left Column) */}
          <div className="lg:col-span-2 space-y-16">
            
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                <article key={post.id} className="group animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="overflow-hidden rounded-2xl mb-8 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#7cf7ad]/20 transition-all duration-500">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <User size={16} className="text-[#7cf7ad]" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#7cf7ad]" />
                        <span>{post.date}</span>
                    </div>
                    {/* Nombre de commentaires 
                    <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-[#7cf7ad]" />
                        <span>COMMENTS ({post.comments})</span>
                    </div> */}
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold mb-6 hover:text-[#7cf7ad] transition-colors cursor-pointer">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 border-b border-white/10 pb-8">
                    {post.excerpt}
                    </p>

                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#7cf7ad] font-bold uppercase tracking-wide hover:gap-4 transition-all">
                    Lire la suite <ArrowUpRight size={20} />
                    </Link>
                </article>
                ))
            ) : (
                <div className="text-center py-20 bg-[#1C1C22] rounded-2xl">
                    <p className="text-xl text-gray-400">Aucun article trouvé dans cette catégorie.</p>
                </div>
            )}

            {/* Pagination (Visuelle uniquement pour l'instant) */}
            <div className="flex gap-4 pt-8">
              <button className="w-12 h-12 rounded-full bg-[#7cf7ad] text-black font-bold flex items-center justify-center hover:bg-white transition-colors">1</button>
              <button className="w-12 h-12 rounded-full bg-[#1C1C22] text-white font-bold flex items-center justify-center hover:bg-[#7cf7ad] hover:text-black transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-12">
            
            {/* Search Widget - COMMENTÉ
            <div className="bg-[#1C1C22] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-[#111] border border-white/10 rounded-lg pl-4 pr-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7cf7ad]" size={20} />
              </div>
            </div>
            */}

            {/* Category Widget - MAINTENANT FONCTIONNEL */}
            <div className="bg-[#1C1C22] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Catégories</h3>
              <ul className="space-y-4">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <button 
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex items-center gap-2 w-full text-left transition-colors group ${selectedCategory === cat ? 'text-[#7cf7ad]' : 'text-gray-400 hover:text-[#7cf7ad]'}`}
                    >
                      <ChevronRight size={16} className={`text-[#7cf7ad] transition-opacity ${selectedCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                      <span className="group-hover:translate-x-2 transition-transform">{cat}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Widget 
            <div className="bg-[#1C1C22] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Tags Populaires</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-[#111] text-gray-400 text-sm rounded hover:bg-[#7cf7ad] hover:text-black transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>*/}

            {/* CTA Widget */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] group">
              
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
                <span className="text-[#7cf7ad] font-bold mb-2">Avez-vous unprojet ?</span>
                <h3 className="text-3xl font-bold mb-8">Vous cherchez un développeur créatif ?</h3>
                <Link to="/contact" className="bg-[#7cf7ad] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2">
                  Me contacter <ChevronRight size={20} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}