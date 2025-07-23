import React from 'react';
function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Header */}
      <header className="bg-neutral-950 text-white py-6">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold" style={{ color: '#ffde59' }}>CloudZap</h1>
        </div>
      </header>
      {/* Main Section */}
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl mb-4">DevOps &amp; Cloud Managers</h1>
        <h2
          className="text-4xl font-extrabold mb-8 mx-auto"
          style={{ maxWidth: '80%' }}
        >
          Learn How To Get Your Engineers Onboard to Use Infrastructure as Code
        </h2>
        {/* Step 1 */}
        <div className="mb-10">
          <h3 className="text-2xl mb-4">
            <span className="font-extrabold">Step 1:</span> Watch the video
          </h3>
          <div className="flex justify-center">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/EpIFVoWAZ6A?si=q7GfUIx0Ginbfx-e"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Step 2 */}
        <div>
          <h3 className="text-2xl mb-4">
            <span className="font-extrabold">Step 2:</span> Apply Now And Book A Call
          </h3>
          <div className="flex justify-center">
            <iframe
              src="https://calendly.com/jrgeissler14/30min"
              width="600"
              height="700"
              frameBorder="0"
              title="Book a Call"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
