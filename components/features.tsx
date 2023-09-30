export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Membership Advantages</h2>
            <p className="text-xl text-gray-400">Unlock the full potential of your startup's AWS infrastructure. No compromises.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Asynchronous Control</h4>
              <p className="text-lg text-gray-400 text-center">Manage your AWS infrastructure asynchronously via Trello. No meetings, just action.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Rapid Turnaround</h4>
              <p className="text-lg text-gray-400 text-center">Receive your Terraform solutions within 48 hours. Speed that scales with you.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Transparent Pricing</h4>
              <p className="text-lg text-gray-400 text-center">A fixed monthly rate for all your AWS needs. No hidden costs, no surprises.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Expert Quality</h4>
              <p className="text-lg text-gray-400 text-center">Access top-tier engineering expertise, satisfaction guaranteed.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Scalability & Flexibility</h4>
              <p className="text-lg text-gray-400 text-center">Easily scale your infrastructure resources up or down as your startup grows.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              {/* SVG and other elements remain the same */}
              <h4 className="h4 mb-2">Custom Solutions</h4>
              <p className="text-lg text-gray-400 text-center">Tailored AWS solutions to meet your startup's unique requirements.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
