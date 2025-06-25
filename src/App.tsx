import React from 'react';
import { Zap, Code, GitBranch, Settings, Check, ArrowRight, DollarSign, Clock, FileText, Award, ThumbsUp, Clock3 } from 'lucide-react';

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
      <a href={link} className="w-full py-3 px-6 rounded-lg bg-neutral-950 text-white hover:bg-neutral-950 transition-colors flex items-center justify-center gap-2 mt-auto">
        Get Started
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ProcessStep({ 
  number, 
  title, 
  description 
}: { 
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <div className="w-12 h-12 bg-[#ffde59] rounded-full flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ 
  quote, 
  name, 
  title 
}: { 
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="italic mb-4 text-gray-700">"{quote}"</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-neutral-950 text-white py-6">
        <div className="container mx-auto px-4">
          {window.innerWidth > 600 && (
            <div className="flex items-center justify-between rounded-lg p-6">
              <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-24 w-24 rounded-full" />
              <nav className="flex items-center gap-8">
                <a href="https://www.youtube.com/@JoshGeissler" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ffde59] transition-colors">
                  YouTube
                </a>
                <a href="https://cal.com/josh-geissler/30min" className="bg-[#ffde59] text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Book a Discovery Call
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <div className="relative bg-neutral-950 text-white pt-8 pb-32 px-4 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-[#ffde59]">Cloud Engineering</span> Support Only When You Need It
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              CloudZap helps small-to-mid sized teams design, build, and automate AWS or Azure infrastructure
              using Terraform and CI/CD, without finding and hiring full time engineers
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a href="https://cal.com/josh-geissler/30min" className="bg-[#ffde59] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@JoshGeissler" className="border border-gray-300 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                See Our Work
              </a>
            </div>
            <div className="my-8 flex justify-center">
              <div className="w-full h-48 md:w-2/3 md:h-72 lg:h-[480px] flex justify-center">
                <iframe
                  src="https://www.youtube.com/embed/K89PvbTobck?si=Lz5Dia9TWy6fl4vX"
                  title="How To Manage Your Cloud Infrastructure With Less Engineers"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <svg
              className="absolute bottom-0 left-0 w-full h-24 text-white"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0,224Q360,160 720,224T1440,224V320H0Z"
              />
            </svg>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Are These Your Infrastructure Blockers?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#ffde59]">
                <h3 className="text-xl font-bold mb-2">Infrastructure Slowing Your Team</h3>
                <p className="text-gray-700">Your application team struggles to move forward because infrastructure deployment is a constant bottleneck in your development process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#ffde59]">
                <h3 className="text-xl font-bold mb-2">Can't Justify a Full-Time Hire</h3>
                <p className="text-gray-700">You need cloud expertise during parts of your project, but can't justify the $125,000+ salary and 3 to 6 month hiring process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#ffde59]">
                <h3 className="text-xl font-bold mb-2">Need Expertise On-Demand</h3>
                <p className="text-gray-700">Building new infrastructure requires specialized skills your team may only need occasionally.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#ffde59]">
                <h3 className="text-xl font-bold mb-2">Facing Deployment Delays</h3>
                <p className="text-gray-700">Manual infrastructure deployment creates weekend work, delays your projects, and prevents your team from focusing on building features.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ProcessStep 
              number={1}
              title="Share Your Project"
              description="Tell us about your cloud infrastructure needs and the outcomes you want to achieve."
              />
              <ProcessStep 
              number={2}
              title="Get a Custom Quote"
              description="Receive a detailed proposal and timeline tailored to your requirements with no hidden fees."
              />
              <ProcessStep 
              number={3}
              title="Project Delivery & Support"
              description="We deliver your solution and provide ongoing support as needed, billed per project or milestone."
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services That Scale With Your Business</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
                <p className="text-gray-600">Transform your manual processes into automated, version controlled deployments that ensure consistency across all environments.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">CI/CD Implementation</h3>
                <p className="text-gray-600">Accelerate your delivery pipeline with automated workflows that reduce errors by 85% and cut deployment time from days to minutes.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Cost Optimization</h3>
                <p className="text-gray-600">Our clients typically save 10-20% on their AWS and Azure bills through our infrastructure optimization strategies.</p>
              </div>
            </div>
          </div>
        </div>


       {/* Testimonials */}
       <div className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cloudzap</h2>
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <img
                  src="/AWS-Partner-Logo.png"
                  alt="AWS Partner"
                  className="h-auto w-auto mx-auto mb-6"
                />
                <p className="text-center text-gray-700 mt-8">
                  We are a certified consulting and professional services partner, trusted by AWS and Azure clients to deliver reliable cloud solutions.
                </p>
              </div>
              <Testimonial 
                quote="In a short period of time, he was able to build out a custom application that was built with Terraform and Amazon Web Services
                native services. He not only met our expectations, but quite often exceeded them, especially when having to make application adjustments 
                as our application grew. He routinely did a fantastic job in taking our requirements and turning it into something functional."
                name="Jared Schwader"
                title="CTO, Two Suns Consulting"
              />
             </div>
         </div>
       </div>

      {/* CTA */}
       <div className="py-16 bg-gradient-to-br from-[#ffde59] via-[#ffde59] to-[#ffde59] text-black text-center shadow-2xl">
         <div className="container mx-auto px-4 max-w-3xl">
           <h2 className="text-3xl font-bold mb-4 drop-shadow-lg text-#">Ready to Transform Your Infrastructure?</h2>
           <p className="text-xl text-neutral-900 mb-8">Don't let DevOps bottlenecks slow your business growth. Get expert Terraform implementation without the overhead.</p>
           <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a href="https://cal.com/josh-geissler/30min" className="border border-neutral-950 bg-[#fff] text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-[#E6E6E6] hover:text-[#000] transition-colors shadow-lg flex items-center gap-2">
          Book a Call <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@JoshGeissler"
          className="border border-neutral-950 bg-[#fff] text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-[#E6E6E6] hover:text-[#000] transition-colors shadow-lg"
        >
          See Our Work
        </a>
           </div>
         </div>
       </div>
         </main>

     {/* Footer */}
     <footer className="bg-neutral-950 text-white py-12">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-center">
           <div className="mb-8 md:mb-0 text-center md:text-left">
             <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-32 w-32 rounded-full mx-auto md:mx-0" />
             <p className="text-gray-400">Empowering Your Cloud Infrastructure</p>
             <a href="mailto:josh@cloudzap.co" className="text-[#ffde59] hover:text-white transition-colors">josh@cloudzap.co</a>
           </div>
            <div className="flex gap-8 mt-4">
              <a href="/" className="text-gray-300 hover:text-[#ffde59] transition-colors">Home</a>
              <a href="https://cal.com/josh-geissler/30min" className="text-gray-300 hover:text-[#ffde59] transition-colors">Book a meeting</a>
              <a href="https://www.youtube.com/@JoshGeissler" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ffde59] transition-colors">YouTube</a>
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
