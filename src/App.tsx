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
      <a href={link} className="w-full py-3 px-6 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-auto">
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
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          {window.innerWidth > 600 && (
            <div className="flex items-center justify-between rounded-lg p-4">
              <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-24 w-24 rounded-full" />
              <nav className="flex items-center gap-6">
                <a href="https://www.youtube.com/@JoshGeissler" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffde59] transition-colors">
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
        <div className="bg-black text-white pt-8 pb-24 px-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Automate Your <span className="text-[#ffde59]">Cloud Infrastructure</span> With Terraform, Done For You
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cloudzap helps small teams using AWS or Azure go from manual configuration to automated AWS and Azure infrastructure using terraform, without needing to find and hire full time devops engineers.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <a href="https://cal.com/josh-geissler/30min" className="bg-[#ffde59] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Book a Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@JoshGeissler" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                See Our Work
              </a>
            </div>
            <div className="my-8 flex justify-center">
              <div className="w-full h-48 md:w-2/3 md:h-72 lg:h-[480px] flex justify-center">
                <iframe
                  src="https://www.youtube.com/embed/e-EbicAy7A0?si=4tzC-DwtnkXn6PX-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
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
                <p className="text-gray-700">You need DevOps expertise at certain points in your project lifecycle, but can't justify the $125,000+ salary and 3-6 month hiring process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#ffde59]">
                <h3 className="text-xl font-bold mb-2">Need Expertise On-Demand</h3>
                <p className="text-gray-700">Building new infrastructure requires specialized skills that your team may not have, but you only need these skills occasionally.</p>
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
                title="Book a 15-minute call"
                description="Discuss your infrastructure challenges and what you're looking to achieve with your AWS or Azure environment."
              />
              <ProcessStep 
                number={2}
                title="Get 48-hour delivery"
                description="Receive your custom Terraform implementation within just 48 hours of approving the project scope."
              />
              <ProcessStep 
                number={3}
                title="Pay only if satisfied"
                description="Your satisfaction is guaranteed - if you're not happy with the results, you don't pay a single penny."
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
                <p className="text-gray-600">Transform your manual processes into automated, version-controlled Terraform deployments that ensure consistency across all environments.</p>
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

        {/* Why Choose Us */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Small & Mid-Size Businesses Choose CloudZap</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <DollarSign className="w-12 h-12 text-[#ffde59] mb-4" />
                <h3 className="font-bold mb-2">Save 70% on DevOps Costs</h3>
                <p className="text-gray-600">compared to hiring full-time</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Clock className="w-12 h-12 text-[#ffde59] mb-4" />
                <h3 className="font-bold mb-2">48-Hour Delivery</h3>
                <p className="text-gray-600">for urgent infrastructure needs</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <FileText className="w-12 h-12 text-[#ffde59] mb-4" />
                <h3 className="font-bold mb-2">Complete documentation</h3>
                <p className="text-gray-600">included with every project</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Award className="w-12 h-12 text-[#ffde59] mb-4" />
                <h3 className="font-bold mb-2">Experienced Engineer</h3>
                <p className="text-gray-600">from startups to enterprise</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <ThumbsUp className="w-12 h-12 text-[#ffde59] mb-4" />
                <h3 className="font-bold mb-2">100% satisfaction guarantee</h3>
                <p className="text-gray-600">or you don't pay</p>
              </div>
            </div>
          </div>
        </div>

       {/* Testimonials */}
       {/* <div className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Testimonial 
               quote="CloudZap helped us migrate to a fully automated infrastructure, cutting our deployment time by 83% and reducing our AWS bill by $3,700 monthly."
               name="Sarah Johnson"
               title="CTO at MarketStream"
             />
             <Testimonial 
               quote="Their Terraform implementation was exactly what we needed. We've eliminated weekend deployments completely, and our development team can finally focus on building features."
               name="Michael Chen"
               title="Director of Engineering at DataFlow Solutions"
             />
           </div>
         </div>
       </div> */}

       {/* CTA */}
       <div className="py-16 bg-black text-white text-center">
         <div className="container mx-auto px-4 max-w-3xl">
           <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
           <p className="text-xl mb-8">Don't let DevOps bottlenecks slow your business growth. Get expert Terraform implementation without the overhead.</p>
           <div className="flex flex-col md:flex-row gap-4 justify-center">
             <a href="https://cal.com/josh-geissler/30min" className="bg-[#ffde59] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
               Book a Discovery Call <ArrowRight className="w-5 h-5" />
             </a>
             <a href="https://www.youtube.com/@JoshGeissler" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
               Watch Our Terraform DevOps Tutorials
             </a>
           </div>
         </div>
       </div>
     </main>

     {/* Footer */}
     <footer className="bg-black text-white py-12">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-center">
           <div className="mb-8 md:mb-0 text-center md:text-left">
             <img src="cloudzap_logo.png" alt="CloudZap" className="mb-4 h-32 w-32 rounded-full mx-auto md:mx-0" />
             <p className="text-gray-400">Empowering your cloud infrastructure</p>
             <a href="mailto:josh@cloudzap.co" className="text-[#ffde59] hover:text-white transition-colors">josh@cloudzap.co</a>
           </div>
           <div className="flex gap-8">
             <a href="/" className="hover:text-[#ffde59] transition-colors">Home</a>
             <a href="https://cal.com/josh-geissler/30min" className="hover:text-[#ffde59] transition-colors">Book a meeting</a>
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
