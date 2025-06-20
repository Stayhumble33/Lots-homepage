import React from "react";

export default function LottieHomepage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <img
          src="/lottie-hero.jpg"
          alt="Lottie Grant Cooper hero background"
          className="absolute w-full h-full object-cover opacity-30 z-0"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            You Were Born For This
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            A sacred journey of remembrance, resonance, and radical embodiment.
          </p>
          <button className="mt-10 px-8 py-3 bg-white text-black rounded-2xl text-lg hover:opacity-90 transition">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Identity Statement */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-3xl md:text-5xl font-light mb-6">
          We Are Becoming Omnipotent
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          This isn’t coaching. This is a reclamation. You’re not here to tweak, fix, or improve. You’re here to remember who you’ve always been — and build from there.
        </p>
      </section>

      {/* Founder Bio */}
      <section className="py-20 px-6 bg-black text-gray-100 text-center">
        <img src="/lottie-portrait.jpg" alt="Lottie Cooper" className="mx-auto rounded-full w-40 h-40 object-cover mb-6 border-4 border-gold" />
        <h3 className="text-2xl md:text-4xl font-light mb-2">Lottie Grant Cooper</h3>
        <p className="text-md md:text-lg text-gray-400 max-w-xl mx-auto">
          Visionary, activator, and sacred architect for soul-led leaders. Lottie helps high-frequency beings transcend patterns, reclaim their gifts, and lead legacies of light.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-900">
        <h3 className="text-2xl md:text-4xl text-center font-light mb-12 text-white">
          Client Results
        </h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <blockquote className="text-gray-300 text-lg italic border-l-4 border-gold pl-6">
            "After one session, I cleared a block I’d been carrying for 20 years. My business doubled within 3 months."
          </blockquote>
          <blockquote className="text-gray-300 text-lg italic border-l-4 border-gold pl-6">
            "Lottie’s work cracked open parts of my soul I didn’t even know were hiding. I remembered who I am."
          </blockquote>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 px-6 text-center bg-black text-white">
        <h3 className="text-2xl md:text-4xl font-light mb-4">
          Ready to Enter the Field?
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10">
          This work is for the brave, the brilliant, and the boundless. If that’s you — the invitation is open.
        </p>
        <button className="px-8 py-3 bg-gold text-black rounded-2xl text-lg hover:opacity-90 transition">
          Apply Now
        </button>
      </section>
    </main>
  );
}
