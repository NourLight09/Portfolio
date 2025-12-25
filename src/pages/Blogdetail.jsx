import { Search, Calendar, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { ALL_POSTS } from '../data/blogData';

// Catégories harmonisées
const categories = [
  "Tout",
  "Productivité",
  "Outils",
  "Tendances & IA"
]

const tags = [
  "React", "Code", "Design", "Veille", "Productivité", "Futur"
]

export default function Blogdetail() {
  const { id } = useParams();
  const post = ALL_POSTS.find(p => p.id === id);

  if (!post) {
      return (
          <div className="min-h-screen bg-[#111] text-white flex items-center justify-center pt-20">
              <h1 className="text-3xl font-bold text-red-500">Article non trouvé</h1>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
      
      {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base flex-wrap">
            <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Nourath</span>
            <span>•</span>
            <Link to="/blog" className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Blog</Link>
            <span>•</span>
            <span className="text-[#7cf7ad]">Détail</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Article Content (Left Column) */}
          <div className="lg:col-span-2">
            
            {/* Post Header Info */}
            <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-[#1C1C22] rounded text-sm text-gray-300 hover:bg-[#7cf7ad] hover:text-black transition-colors cursor-pointer">{post.category}</span>
            </div>

            <div className="flex items-center gap-8 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                         {/* Placeholder avatar */}
                         <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white bg-[#7cf7ad] text-black">
                            {post.author[0]}
                         </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Posté par</p>
                        <p className="font-bold">{post.author}</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 text-xs">Publié le</p>
                    <p className="font-bold">{post.date}</p>
                </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-10">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto"
                />
            </div>

            {/* Article Text Dynamic Rendering (Lettrine retirée) */}
            <div className="space-y-8 text-gray-400 leading-relaxed text-lg mb-10">
                {post.content.map((block, index) => {
                    if (block.type === 'paragraph') {
                        return <p key={index}>{block.text}</p>;
                    }
                    if (block.type === 'subtitle') {
                        return <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{block.text}</h3>;
                    }
                    if (block.type === 'quote') {
                        return (
                             <blockquote key={index} className="border-l-4 border-[#7cf7ad] pl-6 my-8 italic text-white text-xl bg-[#1C1C22] p-6 rounded-r-lg">
                                "{block.text}"
                            </blockquote>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Footer Tags & Share 
            <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-white">Tags</span>
                    <div className="flex gap-2">
                        <span className="px-4 py-1 bg-[#1C1C22] text-gray-400 text-sm rounded hover:bg-[#7cf7ad] hover:text-black transition-colors cursor-pointer">Tech</span>
                        <span className="px-4 py-1 bg-[#1C1C22] text-gray-400 text-sm rounded hover:bg-[#7cf7ad] hover:text-black transition-colors cursor-pointer">Veille</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-bold text-white">Partager</span>
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="w-8 h-8 rounded bg-[#1C1C22] flex items-center justify-center text-gray-400 hover:bg-[#7cf7ad] hover:text-black transition-colors">
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Comment Form 
            <div className="bg-[#1C1C22] p-8 md:p-12 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">Laisser un commentaire</h3>
                <p className="text-gray-400 text-sm mb-8">Votre email ne sera pas publié. Les champs requis sont marqués *</p>
                
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Nom complet *" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors" />
                        <input type="email" placeholder="Email *" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors" />
                    </div>
                    <textarea rows={5} placeholder="Votre commentaire" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors resize-none"></textarea>
                    
                    <button type="submit" className="bg-[#7cf7ad] hover:bg-[#6be69d] text-black px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-[#7cf7ad]/20 hover:-translate-y-1">
                        Publier le commentaire
                    </button>
                </form>
            </div>*/}

          </div>

          {/* Sidebar (Right Column) */}
          <div className="space-y-12">
            
            {/* Search Widget - COMMENTÉ
            <div className="bg-[#1C1C22] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Recherche</h3>
              <div className="relative">
                <input type="text" placeholder="Rechercher..." className="w-full bg-[#111] border border-white/10 rounded-lg pl-4 pr-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors" />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7cf7ad]" size={20} />
              </div>
            </div>
            */}

            <div className="bg-[#1C1C22] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Catégories</h3>
              <ul className="space-y-4">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <Link to="/blog" className="flex items-center gap-2 text-gray-400 hover:text-[#7cf7ad] transition-colors group">
                      <ChevronRight size={16} className="text-[#7cf7ad] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-2 transition-transform">{cat}</span>
                    </Link>
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

          </div>
        </div>
      </div>
    </div>
  )
}