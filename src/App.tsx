import React, { useState } from 'react';
import { Paintbrush2, Sun, Layers, Image, Palette, Wand2, Lightbulb, Github, SplitSquareVertical, Workflow, Shapes, Brush, Play, Image as ImageIcon, ArrowRight, Upload, Sliders, Download, RefreshCw, Sparkles, Twitter , Users, Star } from 'lucide-react';

function App() {
  const [selectedDemo, setSelectedDemo] = useState('interactive');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Paintbrush2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">LuminaBrush Online</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#technology" className="hover:text-purple-400 transition-colors">Technology</a>
            <a href="#demo" className="hover:text-purple-400 transition-colors">Try Now</a>
            <a href="#guide" className="hover:text-purple-400 transition-colors">Guide</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
            <a href="https://github.com/lllyasviel/LuminaBrush" 
               className="flex items-center gap-2 hover:text-purple-400 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-6">
            Experience AI Lighting
            <span className="text-purple-400"> Online</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transform your artwork instantly with LuminaBrush Online. Our browser-based AI lighting tool lets you create stunning lighting effects with just a few clicks - no download required.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-gray-300 mb-6">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center">
              <Image className="w-5 h-5 mr-2 text-purple-400" />
              <span>50,000+ Images Processed</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-purple-400" />
              <span>4.8/5 Average Rating</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#demo" 
               className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
              Try For Free <ArrowRight className="w-5 h-5 animate-pulse" />
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Online Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Sun />}
              title="Instant Access"
              description="Start creating immediately in your browser - no installation or downloads needed."
            />
            <FeatureCard
              icon={<Layers />}
              title="Real-time Processing"
              description="See your lighting effects applied instantly as you work."
            />
            <FeatureCard
              icon={<Palette />}
              title="Cloud-powered AI"
              description="Leverage powerful AI models directly through your web browser."
            />
            <FeatureCard
              icon={<Wand2 />}
              title="Cross-platform"
              description="Works on any device with a modern web browser."
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Cloud Technology</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Browser-based Processing</h3>
              <p className="text-gray-300 mb-6">
                LuminaBrush Online leverages cloud computing to process your images, delivering professional-quality results without requiring any local software installation.
              </p>
              <div className="space-y-4">
                <TechStep
                  icon={<SplitSquareVertical />}
                  title="Cloud-powered Processing"
                  description="Advanced AI models run on powerful cloud servers, ensuring fast and reliable performance."
                />
                <TechStep
                  icon={<Brush />}
                  title="Real-time Interaction"
                  description="Instant feedback and live preview of lighting effects as you work."
                />
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Online Advantages</h3>
              <div className="space-y-4">
                <ProcessStep
                  number="01"
                  title="No Installation"
                  description="Access advanced AI features directly through your web browser."
                />
                <ProcessStep
                  number="02"
                  title="Always Updated"
                  description="Get the latest features and improvements automatically."
                />
                <ProcessStep
                  number="03"
                  title="Cross-platform"
                  description="Use on any device with a modern web browser."
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Online Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AdvantageCard
                icon={<Shapes />}
                title="Instant Start"
                description="Begin creating immediately without any setup or installation."
              />
              <AdvantageCard
                icon={<Workflow />}
                title="Cloud Storage"
                description="Access your work from anywhere, anytime."
              />
              <AdvantageCard
                icon={<Lightbulb />}
                title="Regular Updates"
                description="Always use the latest version with automatic updates."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Try It Now</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Experience LuminaBrush Online directly in your browser. No download required - just upload your image and start creating stunning lighting effects instantly.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <DemoCard
              icon={<Play />}
              title="Start Creating"
              description="Upload your image and start adding lighting effects right away."
              isActive={selectedDemo === 'interactive'}
              onClick={() => setSelectedDemo('interactive')}
            />
            <DemoCard
              icon={<ImageIcon />}
              title="Example Gallery"
              description="See what's possible with LuminaBrush online lighting effects."
              isActive={selectedDemo === 'gallery'}
              onClick={() => setSelectedDemo('gallery')}
            />
            <DemoCard
              icon={<Workflow />}
              title="How It Works"
              description="Learn about our cloud-based processing technology."
              isActive={selectedDemo === 'process'}
              onClick={() => setSelectedDemo('process')}
            />
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {selectedDemo === 'interactive' && (
              <div>
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
                  <p className="text-gray-300">Upload your image and start experimenting with lighting effects.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">LuminaBrush Online Editor</h4>
                      <div className="h-[800px] bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <iframe
                          src="https://lllyasviel-luminabrush.hf.space"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedDemo === 'gallery' && (
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GalleryItem
                    title="Portrait Enhancement"
                    description="Add dramatic lighting to portraits instantly online."
                    beforeImage="/images/portrait-before.png"
                    afterImage="/images/portrait-after.png"
                  />
                  <GalleryItem
                    title="Landscape Lighting"
                    description="Transform landscapes with atmospheric lighting effects."
                    beforeImage="/images/landscape-before.png"
                    afterImage="/images/landscape-after.png"
                  />
                  {/* <GalleryItem
                    title="Still Life Enhancement"
                    description="Perfect lighting for still life compositions in seconds."
                    beforeImage="/images/still-life-before.jpg"
                    afterImage="/images/still-life-after.jpg"
                  />
                  <GalleryItem
                    title="Architectural Lighting"
                    description="Enhance architectural photos with professional lighting."
                    beforeImage="/images/architecture-before.jpg"
                    afterImage="/images/architecture-after.jpg"
                  /> */}
                </div>
              </div>
            )}

            {selectedDemo === 'process' && (
              <div className="p-8">
                <div className="space-y-12">
                  <ProcessStep
                    number="01"
                    title="Upload Your Image"
                    description="Simply drag and drop or select your image to begin. Supported formats include JPG, PNG, and more."
                  />
                  <ProcessStep
                    number="02"
                    title="Cloud Processing"
                    description="Our cloud servers process your image using advanced AI models for optimal results."
                  />
                  <ProcessStep
                    number="03"
                    title="Real-time Effects"
                    description="Add and adjust lighting effects in real-time with instant preview."
                  />
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Online Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold mb-3">Cloud Processing</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <Sparkles className="text-purple-400" size={20} />
                            Instant processing
                          </li>
                          <li className="flex items-center gap-2">
                            <Layers className="text-purple-400" size={20} />
                            No local resources needed
                          </li>
                          <li className="flex items-center gap-2">
                            <Sun className="text-purple-400" size={20} />
                            Professional-grade results
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold mb-3">Real-time Interaction</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <Brush className="text-purple-400" size={20} />
                            Live preview
                          </li>
                          <li className="flex items-center gap-2">
                            <Sliders className="text-purple-400" size={20} />
                            Instant adjustments
                          </li>
                          <li className="flex items-center gap-2">
                            <Wand2 className="text-purple-400" size={20} />
                            Browser-based controls
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GuideStep
              number="01"
              title="Open in Browser"
              description="Visit LuminaBrush Online in any modern web browser to begin."
            />
            <GuideStep
              number="02"
              title="Upload Image"
              description="Upload your image directly through the browser interface."
            />
            <GuideStep
              number="03"
              title="Add Effects"
              description="Use the online tools to create and adjust lighting effects."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="Digital Artist"
              quote="LuminaBrush has completely transformed my workflow. The lighting effects are stunning and save me hours of manual editing. Being able to use it directly in my browser is incredibly convenient!"
              rating={5}
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Photographer"
              quote="As a professional photographer, lighting is everything. LuminaBrush gives me the ability to enhance my photos with natural-looking lighting that would be impossible to achieve during the shoot. Game changer!"
              rating={5}
            />
            <TestimonialCard
              name="Emily Johnson"
              role="Graphic Designer"
              quote="I was skeptical about an online tool having such powerful capabilities, but LuminaBrush exceeded all my expectations. The interface is intuitive and the results are professional quality."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <FaqItem
              question="Is LuminaBrush free to use?"
              answer="Yes, LuminaBrush Online is completely free to use in your browser. There are no hidden fees or subscription requirements."
            />
            <FaqItem
              question="Do I need to download any software?"
              answer="No, LuminaBrush works entirely in your web browser. There's no need to download or install any software on your device."
            />
            <FaqItem
              question="What types of images work best with LuminaBrush?"
              answer="LuminaBrush works well with a wide variety of images, including portraits, landscapes, still life, and architectural photos. Images with clear subjects and good initial contrast tend to produce the best results."
            />
            <FaqItem
              question="How long does it take to process an image?"
              answer="Processing time depends on the size and complexity of your image, but most images are processed within seconds thanks to cloud-based AI technology."
            />
            <FaqItem
              question="Does LuminaBrush work on mobile devices?"
              answer="Yes, LuminaBrush Online is fully responsive and works on smartphones and tablets with modern web browsers. The interface automatically adapts to your screen size."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 LuminaBrush Online. All rights reserved.</p>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="https://wan21.run/" target="_blank" rel="dofollow" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
                wan21
              </a>
              <a href="https://picapix.org/" target="_blank" rel="dofollow" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
                picapix
              </a>
              <a href="https://wplacecolorconverter.online/" target="_blank" rel="dofollow" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
                wplacecolorconverter
              </a>


              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://luminabrush.site/')}&text=${encodeURIComponent('Check out LuminaBrush - AI-Powered Lighting Effects!')}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TechStep({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-purple-400">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description, image }: { number: string; title: string; description: string; image?: string }) {
  return (
    <div className={image ? "flex items-center gap-8" : "flex gap-4 items-start"}>
      {image ? (
        <>
          <div className="w-1/3">
            <div className="text-purple-400 font-bold mb-2">{number}</div>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="w-2/3">
            <img 
              src={image} 
              alt="Image before applying LuminaBrush lighting effects" 
              className="rounded-lg w-full h-96 object-cover" 
              loading="lazy"
            />
          </div>
        </>
      ) : (
        <>
          <div className="text-purple-400 font-bold">{number}</div>
          <div>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}

function AdvantageCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function DemoCard({ icon, title, description, isActive, onClick }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-6 rounded-lg transition-colors ${
        isActive ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      <div className={`${isActive ? 'text-white' : 'text-purple-400'} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`${isActive ? 'text-gray-100' : 'text-gray-300'}`}>{description}</p>
    </button>
  );
}

function GuideStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-purple-400 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function GalleryItem({ title, description, beforeImage, afterImage }: {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img 
            src={beforeImage} 
            alt="Image before applying LuminaBrush lighting effects" 
            className="rounded-lg w-full h-96 object-cover" 
            loading="lazy"
            width="600"
            height="400"
          />
          <p className="text-center mt-2 text-gray-400">Before</p>
        </div>
        <div>
          <img 
            src={afterImage} 
            alt="Image After applying LuminaBrush lighting effects" 
            className="rounded-lg w-full h-96 object-cover"
            loading="lazy"
            width="600"
            height="400"
          />
          <p className="text-center mt-2 text-gray-400">After</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, quote, rating }: {
  name: string;
  role: string;
  quote: string;
  rating: number;
}) {
  return (
    <div className="bg-gray-700 p-8 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-6">"{quote}"</p>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? "#a855f7" : "none"}
            stroke={i < rating ? "none" : "currentColor"}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 pb-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-4 text-gray-300 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;