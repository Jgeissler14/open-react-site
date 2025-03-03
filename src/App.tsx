import React from 'react';
import { Zap, Code, GitBranch, Settings, Check, ArrowRight } from 'lucide-react';

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  popular,
  link 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  link: string;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-xl p-8 flex flex-col h-full ${popular ? 'border-2 border-[#32f3ff] relative' : ''}`}>
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#32f3ff] text-black px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      )}
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[80px]">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
        </div>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#ffde59] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href={link} className="w-full py-3 px-6 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-auto">
        Get Started
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
            {window.innerWidth > 600 && (
              <div className="flex items-center justify-between rounded-lg p-4">
              <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-24 w-24 rounded-full" />
              <nav className="flex items-center gap-6">
                <a href="https://www.youtube.com/@JoshGeissler" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffde59] transition-colors">
                YouTube
                </a>
                <a href="https://calendly.com/jrgeissler14/30min" className="bg-[#ffde59] text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Book a Call
                </a>
              </nav>
              </div>
            )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <div className="bg-black text-white pt-8 pb-24 px-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              On-Demand <span className="text-[#ffde59]">Terraform</span> Expert{' '}
              Only When You Need It
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cloudzap helps small to mid-sized consultancies and IT departments with Terraform, providing a proven framework you need without the overhead and expense of hiring a full-time DevOps Engineer
            </p>
            <div className="my-8 flex justify-center">
                <div className="w-1/2 h-48 md:h-72 lg:h-[480px] flex justify-center">
                <iframe
                  src="https://www.youtube.com/embed/hCVrniGlL7U"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                </div>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="#pricing" className="bg-[#ffde59] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://calendly.com/jrgeissler14/30min" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
                <p className="text-gray-600">Automate your infrastructure deployment with modern Terraform practices, ensuring consistency, repeatability, and scalability across your environments.</p>
                </div>
                <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">CI/CD Excellence</h3>
                <p className="text-gray-600">Streamline your development pipeline with automated workflows, reducing manual intervention and accelerating your software delivery process.</p>
                </div>
                <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Optimization</h3>
                <p className="text-gray-600">Optimize your cloud infrastructure for performance and cost, leveraging best practices to maximize efficiency and minimize expenses.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-20 bg-gray-50" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-center mb-12 max-w-2xl mx-auto">
              <PricingCard
                title="Project Based"
                price=""
                description="Schedule a call to discuss your Terraform needs, we'll deliver the right solution and continue working together until you're satisfied at no extra charge."
                features={[
                  "No long-term commitment",
                  "On-demand expertise",
                  "AWS and Azure",
                  "Documentation included",
                  "Satisfaction guarantee"
                ]}
                link="https://calendly.com/jrgeissler14/30min"
              />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center">
              <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-32 w-32 rounded-full mx-auto" />
              <p className="text-gray-400">Empowering your cloud infrastructure</p>
              <a href="mailto:josh@cloudzap.co" className="text-[#ffde59] hover:text-white transition-colors">josh@cloudzap.co</a>
            </div>
            <div className="flex gap-8">
              <a href="/" className="hover:text-[#ffde59] transition-colors">Home</a>
              <a href="https://calendly.com/jrgeissler14/30min" className="hover:text-[#ffde59] transition-colors">Book a meeting</a>
              <a href="https://www.youtube.com/@JoshGeissler" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffde59] transition-colors">YouTube</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CloudZap LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
