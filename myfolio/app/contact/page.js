import { Mail, Phone, Github, Linkedin, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'akashpoddar.elevensc.2020@gmail.com',
      link: 'mailto:akashpoddar.elevensc.2020@gmail.com',
      icon: <Mail className="text-green-400" size={24} />,
      label: 'Send an email'
    },
    {
      name: 'Phone',
      value: '+91 7980682871',
      link: 'tel:+917980682871',
      icon: <Phone className="text-green-400" size={24} />,
      label: 'Call or WhatsApp'
    },
    {
      name: 'GitHub',
      value: 'akash150149',
      link: 'https://github.com/akash150149',
      icon: <Github className="text-green-400" size={24} />,
      label: 'View my repositories'
    },
    {
      name: 'LinkedIn',
      value: 'akash150149',
      link: 'https://www.linkedin.com/in/akash150149/',
      icon: <Linkedin className="text-green-400" size={24} />,
      label: 'Connect with me'
    },
    {
      name: 'Twitter',
      value: '@akash150149',
      link: 'https://x.com/akash150149',
      icon: <Twitter className="text-green-400" size={24} />,
      label: 'Follow me'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-48 pb-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-16">
          <header className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              Let&apos;s build <span className="text-zinc-600 italic">together.</span>
            </h1>
            <p className="text-zinc text-xl md:text-2xl max-w-2xl leading-relaxed">
              I&apos;m currently open to new opportunities and interesting collaborations.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.link}
                target={method.name !== 'Email' && method.name !== 'Phone' ? "_blank" : undefined}
                rel={method.name !== 'Email' && method.name !== 'Phone' ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:bg-zinc-800/40 hover:border-green-500/20 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/5 transition-all duration-500">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-1">{method.name}</h3>
                    <p className="text-xl font-bold group-hover:text-green-400 transition-colors">{method.value}</p>
                    <p className="text-zinc-600 text-sm mt-1">{method.label}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={20} className="text-green-400" />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-24 border-t border-white/5">
            <div className="bg-gradient-to-br from-zinc-900/60 to-black p-12 md:p-20 rounded-[3rem] border border-white/10 text-center space-y-8">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-green-400" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Need a customized solution?</h2>
              <p className="text-zinc text-lg max-w-xl mx-auto">
                I also provide consulting for blockchain architecture, scalable web apps, and performance optimization.
              </p>
              <div className="pt-4 flex justify-center">
                <a
                  href="mailto:akashpoddar.elevensc.2020@gmail.com"
                  className="btn-primary text-xl px-12 py-5"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
