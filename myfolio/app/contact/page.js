'use client';
import { Mail, Phone, Github, Linkedin, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'akashpoddar.elevensc.2020@gmail.com',
      link: 'mailto:akashpoddar.elevensc.2020@gmail.com',
      icon: <Mail className="text-emerald-500" size={24} />,
      label: 'Send an email'
    },
    {
      name: 'Phone',
      value: '+91 7980682871',
      link: 'tel:+917980682871',
      icon: <Phone className="text-emerald-500" size={24} />,
      label: 'Call or WhatsApp'
    },
    {
      name: 'GitHub',
      value: 'akash150149',
      link: 'https://github.com/akash150149',
      icon: <Github className="text-emerald-500" size={24} />,
      label: 'View my repositories'
    },
    {
      name: 'LinkedIn',
      value: 'akash150149',
      link: 'https://www.linkedin.com/in/akash150149/',
      icon: <Linkedin className="text-emerald-500" size={24} />,
      label: 'Connect with me'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container-narrow space-y-24 relative z-10">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get in touch
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s build something great together.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              target={method.name !== 'Email' && method.name !== 'Phone' ? "_blank" : undefined}
              rel={method.name !== 'Email' && method.name !== 'Phone' ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-all duration-500">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{method.name}</h3>
                  <p className="text-lg font-bold dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{method.value}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">{method.label}</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight size={20} className="text-emerald-500" />
              </div>
            </a>
          ))}
        </div>

        <div className="pt-24">
          <div className="bg-gray-900 dark:bg-gray-900/50 p-12 md:p-20 rounded-[3rem] border border-gray-800 text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32"></div>
             <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-emerald-500" size={32} />
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white">Need a custom solution?</h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                  I also provide consulting for blockchain architecture, scalable web apps, and performance optimization.
                </p>
                <div className="pt-4">
                  <Link
                    href="mailto:akashpoddar.elevensc.2020@gmail.com"
                    className="btn-primary text-xl px-12 py-5"
                  >
                    Start a Conversation
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
