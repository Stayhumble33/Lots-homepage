import React from "react";

export default function LottieHomepage() {
  return (
    <main className="bg-black text-white font-sans">
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
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
    </main>
  );
}