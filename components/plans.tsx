import Image from 'next/image'

export default function Plans() {
  return (
    <section id='plans'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Membership Levels</h2>
            <p className="text-xl text-gray-400">Choose a plan that's right for you.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* monthly */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Monthly</h3>
                  <p className="text-xl text-gray-400 mb-4">No commitment. Pause or cancel anytime.</p>
                  <p className="text-xl text-gray-400 mb-4">$4,995/m</p>
                  <p className="text-xl text-gray-400 mb-4">Pause or cancel anytime</p>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://buy.stripe.com/dR67uL7zLf8qbIY3ce">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://calendly.com/geisslersolutions/30min">Book a call</a>
                </div>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <span>One request at a time</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>Unlimited module</span>
                    </li>
                    <li className="flex items-center">
                      <span>Unlimited revisions</span>
                    </li>
                    <li className="flex items-center">
                      <span>Easy credit-card payments</span>
                    </li>
                    <li className="flex items-center">
                      <span>Pause or cancel anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* yearly */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Yearly</h3>
                  <p className="text-xl text-gray-400 mb-4">Save $828 per month</p>
                  <p className="text-xl text-gray-400 mb-4">$4,167/m</p>
                  <p className="text-xl text-gray-400 mb-4">Paid Annually</p>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://buy.stripe.com/14k7uLaLXgcueVa148">Get Started</a>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://calendly.com/geisslersolutions/30min">Book a call</a>
                </div>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <span>One request at a time</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <span>Unlimited module</span>
                    </li>
                    <li className="flex items-center">
                      <span>Unlimited revisions</span>
                    </li>
                    <li className="flex items-center">
                      <span>Easy credit-card payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
    </section>
  )
}
