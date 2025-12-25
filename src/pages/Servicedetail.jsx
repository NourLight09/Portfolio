import { useState } from "react"
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react"

function Servicedetail() {
  const [openFaq, setOpenFaq] = useState(0);

  const tags = [
    "Project Research", "Wireframe", "Analysis & Testing", "Final Design"
  ];

  const features = [
    "Responsive Design", "Search Engine Optimization",
    "Intuitive Navigation", "Social Media Integration",
    "Engaging Visuals", "Security Features",
    "Clear Call to Action", "Content Management System",
    "Fast Loading Speed", "Analytics and Tracking"
  ];

  const faqs = [
    { question: "What Service We Provide ?", answer: "At vero eos et accusamus dignissimos ducimus voluptatum corrupti quos dolores quas." },
    { question: "How Many Years Of Experience ?", answer: "We have over 10 years of experience in the digital industry." },
    { question: "Have Any Professional Team Member ?", answer: "Yes, we have a dedicated team of experts for each service." },
    { question: "Are You Awards Winning Agency ?", answer: "Yes, we have received multiple awards for our design and development work." }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
      
      {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Service Details</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Nourath</span>
            <span>•</span>
            <span className="text-[#7cf7ad]">Service Details</span>
          </div>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Hero Images Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden h-[300px] group">
                <img src="https://img.freepik.com/free-psd/smartphone-screen-mockup-design_53876-129619.jpg" alt="Mobile Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] group">
                <img src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" alt="Web Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] group">
                <img src="https://img.freepik.com/free-psd/digital-device-mockup_53876-113950.jpg" alt="Project Masonry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
        </div>
      </section>

      {/* Problem Solutions Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Real <span className="text-[#7cf7ad]">Problem Solutions</span><br /> Experience
            </h2>
            <p className="text-gray-400">
                Excepturi sint occaecati cupiditate providentqui officia deserunt mollitia animi laborum et dolorum
            </p>
        </div>
        <div className="space-y-8">
            <p className="text-gray-400 leading-relaxed">
                Designing a website can involve various aspects such as layout, graphics, content, and user experience. For a more specific response, could you please elaborate on what you would like to know or the kind of information you are looking for related to website design
            </p>
            <div className="flex flex-wrap gap-4">
                {tags.map((tag, index) => (
                    <span key={index} className="px-6 py-3 rounded-full bg-[#7cf7ad] text-black font-bold text-sm hover:bg-white transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E6DACE] p-8 rounded-2xl flex items-center justify-center h-[400px]">
                <img src="https://img.freepik.com/free-psd/tablet-mockup-isolated_1310-1564.jpg" alt="Tablet Mockup" className="max-w-full max-h-full object-contain shadow-2xl" />
            </div>
            <div className="bg-[#E3D5CA] p-8 rounded-2xl flex items-center justify-center h-[400px]">
                <img src="https://img.freepik.com/free-psd/ipad-mockup-with-shadow-overlay_106244-1978.jpg" alt="Tablet Mini Mockup" className="max-w-full max-h-full object-contain shadow-2xl" />
            </div>
        </div>
      </section>

      {/* Crafting Digital Experiences */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Crafting Digital<br />
                Experiences <span className="text-[#7cf7ad]">Elevate Your<br /> Brand</span> with Our Website<br /> Design
            </h2>
        </div>
        <div className="space-y-8">
            <p className="text-gray-400 leading-relaxed">
                Designing a website involves various elements such as layout, graphics, content, and user experience. Are you looking for general information Designing a website involves various
            </p>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <Check size={16} className="text-[#7cf7ad]" />
                        <span className="text-sm font-medium text-gray-300">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2">
            {/* Left Image Area */}
            <div className="bg-[#E6DACE] p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                 <div className="flex gap-4 transform -rotate-6 scale-110">
                    <img src="https://img.freepik.com/free-psd/website-mockup_1310-1564.jpg" className="w-40 h-auto shadow-lg rounded-lg" alt="Mockup 1" />
                    <img src="https://img.freepik.com/free-psd/website-mockup_1310-1564.jpg" className="w-40 h-auto shadow-lg rounded-lg mt-8" alt="Mockup 2" />
                    <img src="https://img.freepik.com/free-psd/website-mockup_1310-1564.jpg" className="w-40 h-auto shadow-lg rounded-lg" alt="Mockup 3" />
                 </div>
            </div>
            
            {/* Right Content Area */}
            <div className="bg-[#7cf7ad] p-12 flex flex-col justify-center items-start space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                    Ready to Work<br />
                    together for your<br />
                    next projects
                </h2>
                <p className="text-black/70 max-w-md">
                    Designing a website involves various elem such as layout graphics experience.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                    Hire Me <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16">
        <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Professional Solutions<br />
                For Your <span className="text-[#7cf7ad]">Digital Product<br /> Design & Branding</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
                Designing a website involves various elements such as layout, graphics, content, and user experience. Are you looking for general information
            </p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1C1C22] rounded-lg overflow-hidden">
                    <button 
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold transition-colors ${openFaq === index ? 'bg-[#7cf7ad]' : 'bg-[#7cf7ad]'}`}>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                            </div>
                            <span className="font-semibold text-lg">{faq.question}</span>
                        </div>
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 pl-10">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  )
}

export default Servicedetail
