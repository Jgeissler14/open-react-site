import Image from 'next/image'

export default function Plans() {
  return (
    <section id='plans'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h2 className="h2 mb-4">Membership levels</h2>
            <p className="text-xl text-gray-400">Choose a plan that's right for you.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start">

            {/* monthly */}
            <div className="mx-auto mb-4 w-full">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Standard</h3>
                <p className="text-xl text-gray-400 mb-4">One request at a time. Pause or cancel anytime.</p>
                <p className="text-xl text-gray-400">$495/m</p>
                <p className="text-sm text-gray-400 mb-6">Pause or cancel anytime</p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:mb-0" href="https://buy.stripe.com/9AQ9CT3jvbWe6oE28g">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-1 mb-4 pt-5">
                  <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://calendly.com/cloudzap/introduction" target="_blank">Book a call</a>
                </div>
                <ul className="text-lg text-gray-400 -mb-2 pt-5 border-t border-gray-700">
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>One request at a time</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Unlimited modules</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Delivered in 48 hours on average</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Easy credit-card payments</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Pause or cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            
           {/* yearly */}
            <div className="mx-auto mb-4 w-full">
              <div>
              <h3 className="h3 mb-3">Premium</h3>
                <p className="text-xl text-gray-400 mb-4">Double the requests. Pause or cancel anytime.</p>
                <p className="text-xl text-gray-400">$795/m</p>
                <p className="text-sm text-gray-400 mb-6">Pause or cancel anytime</p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:mb-0" target="_blank" href="https://buy.stripe.com/bIYcP56vH9O67sIaEN">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-1 mb-4 pt-5">
                  <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://calendly.com/cloudzap/introduction" target="_blank">Book a call</a>
                </div>
                <ul className="text-lg text-gray-400 -mb-2 pt-5 border-t border-gray-700">
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Two requests at a time</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Unlimited modules</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Delivered in 48 hours on average</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Easy credit-card payments</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Pause or cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
