'use client'
 
import { useState } from 'react'
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <section id='data'>
      <div className="mx-auto mt-8 w-full lg:w-3/5">

        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start ml-2">

          <div className="mx-auto w-full">
            <h3 className="h3 mb-8" data-aos="fade-up" style={{ textAlign: 'center' }}>
              <span className="text-purple-500">LOWER</span>{" "}
              <span className="text-white">YOUR BILL</span>
            </h3>

            <ul className="list-disc list-inside mb-6" style={{ lineHeight: '3', fontSize: '1.4rem', fontWeight: 'bold' }}>
              <li className="mb-4 text-white">
                <span className="text-purple-500">15-20%</span>{" "}
                <span className="text-white">targeted reduction</span>
              </li>
              <li className="mb-4 text-white">
                <span className="text-purple-500">60%</span>{" "}
                <span className="text-white"> implemented in under 1 month</span>
              </li>
              <li className="mb-4 text-white">
                <span className="text-purple-500">$0</span>{" "}
                <span className="text-white"> Risk</span>
              </li>
            </ul>
            
          </div>

          <div className="mx-auto w-full">
            <h5 className="h5 mb-4" data-aos="fade-up" style={{ textAlign: 'center' }}>
                <span className="text-white">BOOK A CALL</span>{" "}
                <span className="text-purple-500">BELOW</span>{" "}
                <span className="text-white">TO SEE IF YOU QUALIFY</span>
            </h5>
            <InlineWidget url="https://calendly.com/cloudzap-josh/30min" styles={{ height: '1000px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}