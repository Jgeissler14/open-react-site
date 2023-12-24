import Image from 'next/image'

export default function Plans() {
  return (
    <section id='plans'>
      <div className="mx-auto mb-4 w-full lg:w-3/5">
       <div className="md:pr-4 lg:pr-12 xl:pr-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h2 className="h2 mb-4">Membership levels</h2>
            {/* <p className="text-xl text-gray-400">Choose a plan that's right for you.</p> */}
          </div>

          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-1 lg:gap-6 items-start">


          {/* <div className="mx-auto mb-4 w-full">
              <div>
              <h3 className="h3 mb-3">Free Trial</h3>
                <p className="text-xl text-gray-400 mb-4">30 days free. No commitment.</p>
                <p className="text-xl text-gray-400">$0/m</p>
                <p className="text-sm text-gray-400 mb-6">No credit card required</p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:mb-0" target="_blank" href="https://forms.gle/Sz1u1LiLUvJGG8My6">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-1 mb-4 pt-5">
                  <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://calendly.com/cloudzap/introduction">Book a call</a>
                </div>
                <ul className="text-lg text-gray-400 -mb-2 pt-5 border-t border-gray-700">
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>One request at a time</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Unlimited requests</span>
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
                    <span>Pause or cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="mx-auto mb-4 w-full">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Standard</h3>
                <p className="text-xl text-gray-400 mb-4">One request at a time. Pause or cancel anytime.</p>
                <p className="text-xl text-gray-400">$499/m</p>
                <p className="text-sm text-gray-400 mb-6">Pause or cancel anytime</p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:mb-0" target="_blank" href="https://buy.stripe.com/28o4iz07jgcueVabIT">Get Started</a>
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
                    <span>Unlimited requests</span>
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

            {/* <div className="mx-auto mb-4 w-full">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
              <h3 className="h3 mb-3">Premium</h3>
                <p className="text-xl text-gray-400 mb-4">DevOps included. Pause or cancel anytime.</p>
                <p className="text-xl text-gray-400">$4,995/m</p>
                <p className="text-sm text-gray-400 mb-6">Pause or cancel anytime</p>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:mb-0" target="_blank" href="https://buy.stripe.com/dR67uL7zLf8qbIY3ce">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-1 mb-4 pt-5">
                  <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://calendly.com/cloudzap/introduction">Book a call</a>
                </div>
                <ul className="text-lg text-gray-400 -mb-2 pt-5 border-t border-gray-700">
                <li className="flex items-center mb-2">
                    <span className="inline-block w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    <span>Deployed and managed in your environment</span>
                  </li>
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
            </div> */}
           
          </div>
        </div>
      </div>
    </section>
  );
}
