export default function Faq() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Page header */}
      <div className="text-center pb-12 md:pb-20">
        <h1 className="text-3xl md:text-4xl font-bold">FAQ</h1>
      </div>

      {/* FAQ content */}
      <div className="mx-auto mb-4 w-full">
        <details>
          <summary className="text-xl font-bold mb-4">Why wouldn't I just hire a full-time developer?</summary>
          <p className="text-gray-400 mb-6">
          Good question! For starters, the annual cost of a full-time senior-level developer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.

        With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your developer when you have work available for them.
          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">Is there a limit to how many requests I can have?</summary>
          <p className="text-gray-400 mb-6">
          Once subscribed, you're able to add as many infrastructure requests to your queue as you'd like, and they will be delivered one by one.
          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">How fast will I receive my infrastructure?</summary>
          <p className="text-gray-400 mb-6">
          On average, most requests are completed in just two days or less. However, more complex requests can take longer.
          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">How does the pause feature work?</summary>
          <p className="text-gray-400 mb-6">
          We understand you may not have enough infrastructure work to fill up entire month. Perhaps you only have one or two infrastructure requests at the moment. That's where pausing your subscription comes in handy.

            Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.
            </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">Do you maintain and deploy the infrastructure?</summary>
          <p className="text-gray-400 mb-6">
            No, we develop, test, and deliver the infrastructure as terraform. We include documentation on deployment but we do not ever receive access to your AWS.
          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">What if there are revisions?</summary>
          <p className="text-gray-400 mb-6">
          No worries! We'll continue to revise the infrastructure until you're 100% satisfied.
          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">What if I only have a single request?</summary>
          <p className="text-gray-400 mb-6">
          That's fine. You can pause your subscription when finished and return when you have additional infrastructure needs. There's no need to let the remainder of your subscription go to waste.          </p>
        </details>

        <details>
          <summary className="text-xl font-bold mb-4">Are there any refunds if I don't like the service?
</summary>
          <p className="text-gray-400 mb-6">
          Due to the high quality nature of the work, there will be no refunds issued.
          </p>
        </details>
      </div>

    </div>
  </div>
      </section>
    )
  }
  