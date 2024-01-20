import Image from 'next/image'
import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import Trello from '@/public/images/Trello-1.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Our Philosophy</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order" data-aos="fade-up">
                {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Trello} width={540} height={405} alt="Features 01" /> */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">—  
                    In a short period of time, he was able to build out a custom application that was built with Terraform and Amazon Web Services 
                    native services. He not only met our expectations, but quite often exceeded them, especially when having to make application adjustments 
                    as our application grew. He routinely did a fantastic job in taking our requirements and turning it into something functional. 
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Jared Schwader</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target='_blank' href="https://twosunsconsulting.com/">Two Suns Consulting</a>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Efficiency & Agility</div>
                  <h3 className="h3 mb-3">Accelerate Your Projects</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Here at Cloudzap, we do away with the the inefficiencies & formalities that plague most agencies. 
                  </p>
                  <p className="text-xl text-gray-400 mb-4">
                    Ditch the meetings and jump straight into action. Manage your AWS asynchronously via Trello. Track your active, queued, and completed tasks effortlessly.
                    </p>
                  {/* <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited requests with any subscription plan.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Resolved in as little as 48 hours.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>We'll revise the result until you're fully satisfied, guaranteed.</span>
                    </li>
                  </ul> */}
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div data-aos="fade-up" data-aos-delay="400">
                    <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-2" href="#plans">Hire Engineer</a>
                  </div>
                </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
