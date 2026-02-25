export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-48 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h1 className="heading-fluid font-bold">Get in Touch</h1>
        <p className="text-zinc text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities and interesting collaborations.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="pt-8">
          <a
            href="mailto:contact@akashpoddar.me"
            className="btn-primary text-xl px-12 py-5"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
}
