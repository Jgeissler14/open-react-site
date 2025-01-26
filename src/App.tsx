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
          {price !== "Contact us" && <span className="text-gray-600">/mo</span>}
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
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <div className="bg-black text-white pt-8 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Automate, Secure, and Scale{' '}
              <span className="text-[#ffde59]">your cloud</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cloudzap helps you take a unified approach to infrastructure management with a devops done with you service.
            </p>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">DevOps Engineering Done With You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Scalable, automated, and secure cloud environments with DevOps practices tailored for your team.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Infrastructure as Code</h3>
                <p className="text-gray-600">Automate your infrastructure deployment with modern IaC practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">CI/CD Excellence</h3>
                <p className="text-gray-600">Streamline your development pipeline with automated workflows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffde59] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Optimization</h3>
                <p className="text-gray-600">Optimize your cloud infrastructure for performance and cost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-20 bg-gray-50" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose a plan that works best for you. If you're not satisfied with the results, get your money back.
              </p>
              <a href="https://calendly.com/jrgeissler14/30min" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-6">
                Book a call
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Standard"
                price="$995"
                description="Receive expert guidance on how to plan and implement IaC, build management, and CI/CD for your cloud infrastructure, with actionable strategies and continuous support."
                features={[
                  "Infrastructure as Code Guidance",
                  "Architecture Design and Documentation",
                  "Ongoing Support & Feedback"
                ]}
                link="https://buy.stripe.com/3csg2N37w7fV7jqcMV"
              />
              <PricingCard
                title="Pro"
                price="$2,495"
                description="We'll build and configure your new or existing cloud infrastructure using best practices in IaC, build management, and CI/CD, and continuous support for changes."
                features={[
                  "Custom Infrastructure as Code",
                  "Build Configuration",
                  "CI/CD Configuration",
                  "Documentation & Guidance",
                  "Ongoing Support for Revisions",
                  "Pause or Cancel Anytime"
                ]}
                popular
                link="https://buy.stripe.com/00g8AlgYmfMrfPWfZ6"
              />
              <PricingCard
                title="Ad-Hoc"
                price="Contact us"
                description="Receive tailored, one-time cloud solutions for implementing IaC, build management, and CI/CD, with continuous support. Plus get a discount if you decide to upgrade to a monthly plan."
                features={[
                  "One-time Implementation",
                  "Custom Solutions",
                  "Continuous Support",
                  "Upgrade Discount Available"
                ]}
                link="https://calendly.com/jrgeissler14/30min"
              />
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