export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          Interested in DHAARA or learning more about our events? We'd love to hear from you!
        </p>
        <button className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
}
